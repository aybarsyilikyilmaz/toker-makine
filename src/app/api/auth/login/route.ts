import { NextResponse } from 'next/server';
import { signAccessToken, signRefreshToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Kullanıcıyı DB'den sorgula (Daha sonra eklenecek)
    // if (email !== 'admin@sezar.com' || password !== '1234') { 
    //   throw new Error('Geçersiz şifre veya kullanıcı adı');
    // }

    // 2. Mock User Data
    const userPayload = { userId: '123', role: 'customer', email };

    // 3. Tokens (AccessToken: 15m, RefreshToken: 7d)
    const accessToken = await signAccessToken(userPayload);
    const refreshToken = await signRefreshToken(userPayload);

    // 4. Response with HttpOnly cookies
    const response = NextResponse.json({ success: true, user: userPayload });

    // Access Token: Kısa ömürlü, her istekte gönderilir
    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 15, // 15 dakika
    });

    // Refresh Token: Uzun ömürlü, sadece yenilemede kullanılır
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 gün
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Giriş Başarısız' }, { status: 401 });
  }
}
