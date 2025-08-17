import Image from "next/image";
import Link from "next/link";

function TopMenu() {
  return (
    <nav>
      <ul className="flex gap-5 content-end items-center bg-white min-h-15 px-20">
        <li className="mr-auto">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/logo.png"
              alt="Mangadrill Logo"
              width="60"
              height="60"
            />
            <span className="text-xl font-bold">Mangadrill</span>
          </Link>
        </li>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/genres">Жанры</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/login">Войти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
