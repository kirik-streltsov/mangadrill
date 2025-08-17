import "./globals.css";
import TopMenu from "./components/TopMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light-black">
        <header>
          <TopMenu />
        </header>
        <main className="px-20">{children}</main>
      </body>
    </html>
  );
}
