import { PropsWithChildren } from "react";
import { Outlet, Link } from "react-router-dom";

function ListItem({ children }: PropsWithChildren) {
  return (
    <li className="font-bold hover:after:block after:bg-sky-400 after:h-1 after:w-0 hover:after:w-full after:transition-all duration-1000 ease w-full">
      <Link to="/">{children}</Link>
    </li>
  );
}

export default function Root() {
  return (
    <main className="w-full scroll-smooth">
      <header className="h-16 py-4 bg-white text-black fixed top-0 left-0 min-w-max flex w-full z-50 shadow-md">
        <nav className="flex justify-around w-full">
          <h1 className="text-xl font-bold">
            <Link to={"/"}>Dinesh's Blog</Link>
          </h1>
          <ul className="flex justify-between gap-4">
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/projects">Projects</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">About</Link>
            </ListItem>
          </ul>
        </nav>
      </header>
      <div className="pt-16 w-full h-full">
        <Outlet />
      </div>
    </main>
  );
}
