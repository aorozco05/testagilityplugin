import { getSiteMap } from "../api/agilityService";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [pageItems, setpageItems] = useState<object[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(function () {
    getSiteMap()
      .then(function (pages) {
        setpageItems(pages);
      });
  },[]);

  return (
    <header className="relative w-full mx-auto bg-white px-8">
      <nav>
        {pageItems.map((navitem: any, index: number) => {
          return (
            <Link key={`nav-${index}`} href={navitem.path}>
              <a
                onClick={() => setOpen(false)}
                className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
              >
                <div className="text-base leading-6 font-medium text-gray-900">
                  {navitem.title}
                </div>
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
