import agility from "@agility/content-fetch";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [pageItems, setpageItems] = useState<object[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(function () {
    const agilityClient = agility.getApi({
      guid: "d48f2f7d-u",
      apiKey:
        "defaultlive.f5eb3711b584c45f1aa984a1791b3bb1d9a99e0a9f881f83324138c6cd847a68",
    });
    agilityClient
      .getSitemapNested({
        channelName: "website",
        languageCode: "en-us",
      })
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
