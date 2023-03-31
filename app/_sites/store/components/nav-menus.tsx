export async function NavMenus() {
  const resultCategories: string[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
    {
      cache: "force-cache",
    },
  ).then((res) => res.json());

  return (
    <nav className="bg-purple-strong hidden sm:block">
      <ul className="container flex flex-col sm:flex-row sm:justify-around sm:items-center text-white">
        {resultCategories.map((item: string, k: number) => (
          <li
            key={k}
            className="uppercase cursor-pointer sm:p-2 sm:text-center sm:text-xl sm:transition-colors sm:duration-150 sm:ease-in-out sm:hover:bg-white sm:hover:text-purple-strong"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
