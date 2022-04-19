import agility from "@agility/content-fetch";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import ReactPlayer from "react-player";

interface MainContenteZone {
  item: any;
}

interface zone {
  MainContenteZone: MainContenteZone[];
}

interface homePage {
  zones: zone;
}

const whatisapsao = () => {
  const [pageProperties, SetpageProperties] = useState<homePage>();
  useEffect(function () {
    const agilityClient = agility.getApi({
      guid: "d48f2f7d-u",
      apiKey:
        "defaultlive.f5eb3711b584c45f1aa984a1791b3bb1d9a99e0a9f881f83324138c6cd847a68",
    });
    agilityClient
      .getPage({
        pageID: 3,
        locale: "en-us",
      })
      .then(function (properties) {
        console.log(properties);
        SetpageProperties(properties);
      });
  }, []);

  return (
    <div>
      <h1>
        {pageProperties?.zones.MainContenteZone[0].item.fields.ladingTitle}
      </h1>
      {pageProperties &&
        parse(
          pageProperties?.zones.MainContenteZone[0].item.fields.description
        )}
      {pageProperties && (
        <ReactPlayer url="https://www.youtube.com/watch?v=vKKu-Wt7O2Q" />
      )}
       <h1>
        {pageProperties?.zones.MainContenteZone[2].item.fields.title}
      </h1>
      {pageProperties &&
        parse(pageProperties?.zones.MainContenteZone[2].item.fields.description)}
      {pageProperties &&
        parse(pageProperties?.zones.MainContenteZone[2].item.fields.htmlForm)}
    </div>
  );
};

export default whatisapsao;
