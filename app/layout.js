// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = { title: 'Projects Hub' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
          <a className="navbar-brand" href="/">My Projects</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/portfolio">Portfolio</a>
            <a className="nav-link" href="/note">ShareCode</a>
            <a className="nav-link" href="/repair">Repair/Replace</a>
          </div>
        </nav>
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
