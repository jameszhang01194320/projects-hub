// app/page.js
import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-4">
      <h1 className="mb-3">Projects Hub</h1>
      <p className="text-muted">通过上方导航进入各项目，或直接点击下面链接：</p>
      <ul className="mt-3">
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/note">ShareCode</Link></li>
        <li><Link href="/repair">Repair/Replace</Link></li>
      </ul>
    </div>
  );
}
