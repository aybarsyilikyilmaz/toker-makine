import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'sezar_kuyumculuk_super_secret_key_123');

// Access Token: 15 dakika (kısa ömürlü, güvenli)
export const signAccessToken = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(JWT_SECRET);
};

// Refresh Token: 7 gün (uzun ömürlü, daha kontrollü)
export const signRefreshToken = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
};

export const verifyJWT = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
};

// Token Rotation (Yenileme) Mantığı
export const refreshSession = async (request: NextRequest) => {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  if (!refreshToken) return null;

  const payload = await verifyJWT(refreshToken);
  if (!payload) return null;

  // Geçerli bir Refresh Token varsa, yeni bir Access Token üret
  const newAccessToken = await signAccessToken({ userId: payload.userId, role: payload.role });
  
  const response = NextResponse.next();
  response.cookies.set('accessToken', newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 15, // 15 dk
  });

  return response;
};
