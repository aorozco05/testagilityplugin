import agility from "@agility/content-fetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";

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
  const [imgUrl, SetimgUrl] = useState<any>("");

  const RenderHTML = (element : string) => {
    return parse(element);
   
  };

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
        console.log(properties);
        SetpageProperties(properties);
        SetimgUrl(
          properties.zones.MainContenteZone[0].item.fields.backgroundImage.url
        );
       
      });
  }, []);

  return (
    <div>
      <h1>
        {pageProperties?.zones.MainContenteZone[0].item.fields.ladingTitle}
      </h1>
      <div id="descriptionContent"></div>
     {pageProperties && RenderHTML(pageProperties?.zones.MainContenteZone[0].item.fields.description)}
      {imgUrl && (
        <Image src={imgUrl} layout="responsive" width={460} height={460} />
      )}
    </div>
  );
};

export default home;
