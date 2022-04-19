import agility from "@agility/content-fetch";

const lang = "en-us"

const agilityApi = agility.getApi({
    guid: "d48f2f7d-u",
    apiKey: "defaultlive.f5eb3711b584c45f1aa984a1791b3bb1d9a99e0a9f881f83324138c6cd847a68"
});

export const getPage = function (pageId: number) {
   return agilityApi.getPage({ pageID: pageId, locale: lang });
}

export const getSiteMap = function(){
    return agilityApi.getSitemapNested({
        channelName: "website",
        languageCode: lang,
      });
}

export const getContentList = function(referenceName: String) {
    return agilityApi. getContentList({
        referenceName: referenceName,
        languageCode: lang,
    });
}

