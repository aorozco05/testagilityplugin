import { getPage, getContentList } from "../api/agilityService";
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
  const [urlvideo, Seturlvideo] = useState<String>("");

  useEffect(function () {
    getPage(3).then(function (properties) {
      SetpageProperties(properties);
    });

    getContentList("whatisapsao_videosection57_v61142f").then(function (videocontentList) {
      Seturlvideo(videocontentList.items[0].fields.videoUrl.href);
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
      {urlvideo && (
        <video controls width="250">
          <source src={urlvideo} type="video/webm" />
        </video>
      )}
      <h1>{pageProperties?.zones.MainContenteZone[2].item.fields.title}</h1>
      {pageProperties &&
        parse(
          pageProperties?.zones.MainContenteZone[2].item.fields.description
        )}
      {pageProperties &&
        parse(pageProperties?.zones.MainContenteZone[2].item.fields.htmlForm)}
    </div>
  );
};

export default whatisapsao;
