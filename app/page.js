// app/page.js
export default function Page() {
  return (
    <div className="py-4">
      <h1 className="mb-3">Projects Hub</h1>
      <p className="text-muted">通过上方导航进入各项目，或直接点击下面链接：</p>
      <ul className="mt-3">
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/note">ShareCode</a></li>
        <li><a href="/repair">Repair/Replace</a></li>
      </ul>
    </div>
  );
}
