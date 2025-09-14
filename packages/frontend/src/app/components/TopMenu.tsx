import Link from "next/link";

function TopMenu() {
  return (
    <nav>
      <ul className="flex gap-5 content-end items-center bg-light-grey min-h-15 px-20">
        <li className="mr-auto">
          <Link className="flex items-center gap-2" href="/">
            <span className="text-xl font-bold text-white hover:text-bright-red">
              Mangadrill
            </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white hover:text-bright-red">
            Главная
          </Link>
        </li>
        <li>
          <Link href="/genres" className="text-white hover:text-bright-red">
            Жанры
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-bright-red">
            О нас
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-white hover:text-bright-red">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
