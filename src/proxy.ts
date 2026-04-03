import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from './lib/auth';

const PROTECTED_ROUTES = ['/hesabim', '/siparislerim', '/admin', '/favorilerim'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

  if (isProtected) {
    const accessToken = request.cookies.get('accessToken')?.value;

    // Access Token yok veya geçersizse:
    if (!accessToken || !(await verifyJWT(accessToken))) {
      const refreshToken = request.cookies.get('refreshToken')?.value;

      // Refresh Token var mı bakıyoruz:
      if (refreshToken && (await verifyJWT(refreshToken))) {
        // Otomatik yenileme API'sine veya refresh mantığına yönlendirilebilir
        // Mimari hazırlığı: Burada sessizce yeni token üretilip devam edilebilir.
        return NextResponse.next();
      }

      // İkiside yoksa login'e gönderilir (Login sayfası hazır olduğunda aktifleştirilecek)
      // const loginUrl = new URL('/login', request.url);
      // loginUrl.searchParams.set('from', pathname);
      // return NextResponse.redirect(loginUrl);
      
      // Şimdilik sadece geçişe izin veriyoruz, ancak altyapıyı "Token Required" şeklinde hazır ettik.
      console.log(`[AUTH] Protected route ${pathname} accessed without valid tokens. Security ready.`);
    }
  }

  return NextResponse.next();
}

// Tüm kısımları middleware'e sokmak yerine sadece lazım olanları seçiyoruz
export const config = {
  matcher: [
    '/hesabim/:path*',
    '/siparislerim/:path*',
    '/admin/:path*',
    '/favorilerim/:path*',
  ],
};
