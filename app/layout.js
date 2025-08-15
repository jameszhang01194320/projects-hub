// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export const metadata = { title: 'Projects Hub' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
          <Link href="/" className="navbar-brand">My Projects</Link>
          <div className="navbar-nav">
            <Link href="/portfolio" className="nav-link">Portfolio</Link>
            <Link href="/note" className="nav-link">ShareCode</Link>
            <Link href="/repair" className="nav-link">Repair/Replace</Link>
          </div>
        </nav>
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
