import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .header {
          background: #fff;
          border-bottom: 1px solid #ccc;
          ul {
            display: flex;
            li {
              a {
                display: flex;
                text-decoration: none;
                height: 60px;
                padding: 0 20px;
                color: #333;
                align-items: center;
              }
            }
          }
        }
      `}</style>
    </header>
  );
}