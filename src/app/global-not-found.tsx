import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sayfa bulunamadı | Toker Teknik',
  robots: { index: false },
};

// Hiçbir sayfaya uymayan adresler için 404 sayfası (dil bilinmediği için iki dilde)
export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body>
        <main
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div>
            <p style={{ color: 'var(--primary-red)', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.75rem' }}>404</p>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Sayfa bulunamadı</h1>
            <p style={{ color: '#6b6b6b', marginBottom: '1.75rem' }}>Page not found · Seite nicht gefunden</p>
            <Link href="/" className="btn-primary">
              Ana Sayfa
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
