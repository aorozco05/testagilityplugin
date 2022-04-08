import agility from "@agility/content-fetch";
import { useEffect, useState } from "react";
import Image from "next/image";

interface MainContenteZone {
  item: any;
}

interface zone {
  MainContenteZone: MainContenteZone[];
}

interface homePage {
  zones: zone;
}

const home = () => {
  const [pageProperties, SetpageProperties] = useState<homePage>();
  const img = pageProperties?.zones.MainContenteZone[0].item.fields.backgroundImage.url;
  useEffect(function () {
    const agilityClient = agility.getApi({
      guid: "d48f2f7d-u",
      apiKey:
        "defaultlive.f5eb3711b584c45f1aa984a1791b3bb1d9a99e0a9f881f83324138c6cd847a68",
    });
    agilityClient
      .getPage({
        pageID: 2,
        locale: "en-us",
      })
      .then(function (properties) {
		  console.log(properties)
        SetpageProperties(properties);
	
      });
  }, []);

  return (
    <div>
		 <h1>{pageProperties?.zones.MainContenteZone[0].item.fields.ladingTitle}</h1>
      {pageProperties?.zones.MainContenteZone[0].item.fields.description}
      <img
        src={img}
        className={"image"}
		width={376} height={190} 
      />
    </div>
  );
};

export default home;
