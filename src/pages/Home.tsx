import LatestUpdates from '../components/homepage/LatestUpdates';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router-dom';
import Support from '../components/Support';
import Recommended from '../components/homepage/Recommended';
import { Helmet } from 'react-helmet';
import Adsense from '../components/Adsense';
type APITYPE = {
  latest: Array<{
    comic_id: number,
    ch_number: number,
    vol_number: number,
    ch_name: string,
    comic_title: string,
    comic_viewUrl: string,
    ch_viewUrl: string,
    comic_titleslug: string,
    comic_isMature: boolean,
    comic_isLocked: boolean,
    comic_createdAt: string,
    comic_updatedAt: string,
    comic_type: string,
    comic_choice: string,
    comic_thumb: string
  }>,
  recommended: Array<{
    comic_id: number,
    comic_title: string,
    comic_viewUrl: string,
    comic_titleslug: string,
    comic_isMature: boolean,
    comic_isLocked: boolean,
    comic_createdAt: string,
    comic_updatedAt: string,
    comic_type: string,
    comic_choice: string,
    comic_thumb: string,
    ch_count: number
  }>;
  slider: Array<{
    img: string,
    position: number,
    url: string
  }>;
  ads: Array<{
    above_rec: string,
    below_rec: string
  }>;
};
function Home() {
  let data: APITYPE = useLoaderData() as APITYPE;


  //console.log(data);

  return (
    <div className="max-w-screen-xl flex mt-16 mx-auto">
      <Helmet >
        <title>HomePage - komiko</title>
        <meta
          name="description"
          content="komiko: HomePage, A place to read manga, manhua and manwha for free of cost."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HomePage, where you can read comics for free." />
        <meta
          property="og:description"
          content="komiko: HomePage, A place to read manga, manhua and manwha for free of cost."
        />

        <meta property="og:url" content="https://komiko.com/" />

        <meta
          name="twitter:title"
          content="komiko: HomePage, where you can read comics for free."
        />
        <meta
          name="twitter:description"
          content="webcomics: HomePage, A place to read manga, manhua and manwha for free of cost."
        />
      </Helmet>
      <div className="w-full">
        <div className='text-white bg-red-500 p-3 rounded-lg'>This is sample page, all resources might not load. </div>

        <div className="my-2 mx-4">
          <Slider slider={data.slider} />
        </div>
        {/* <div className='ads' id='home_ads_aboveLatest'>
          <Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"5057083037"} dataAdFormat={"auto"} dataFullWidthResponsive={true} />
        </div> */}
        <div className="flex flex-col my-2">
          <LatestUpdates latest={data.latest} />
        </div>
        <div className='ads' id='home_ads_aboveRecommend'>
          <Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"6370164706"} dataAdFormat={"auto"} dataFullWidthResponsive={true} />
        </div>
        <div className="flex flex-col my-2">
          <Recommended recommended={data.recommended} />
        </div>
        <div className='ads' id='home_ads_aboveDiscord'>
          <Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"2430919699"} dataAdFormat={"auto"} dataFullWidthResponsive={true} />
        </div>
        <div className="py-10 container flex flex-col mx-auto px-2 sm:px-10">
          <h1
            className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white"
          >
            {"Comment Section"}
          </h1>
          <div className="py-3">
            <button
              id="disq_load"
              onClick={() => { disque("komiko", "https://komiko.leaveitblank.com/", "testsite-q2cy98osnk23"); }}
              className="p-2 bg-purple-500 text-white rounded-lg center w-full"
            >
              Click to View Comment
            </button>
            <div

              id="disqus_thread"
              className="dark:text-purple-400 px-2 w-full"
            ></div>
          </div>
        </div>
        <Support />
      </div>

    </div>
  );
}

export default Home;


export async function homeLoader() {

  const fakeData = {
    "latest": [
      {
        "comic_id": 5003,
        "ch_number": 37,
        "vol_number": 1,
        "ch_name": "Chapter 37",
        "comic_title": "I Was Born as the Lead Characters' Child",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/i-was-born-as-the-lead-characters-child",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/i-was-born-as-the-lead-characters-child\/volume\/1\/chapter\/37",
        "comic_titleslug": "i-was-born-as-the-lead-characters-child",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-20T18:26:07.000000Z",
        "comic_updatedAt": "2023-02-20T18:26:07.000000Z",
        "comic_type": "manwha",
        "comic_choice": "latest",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5018,
        "ch_number": 5,
        "vol_number": 1,
        "ch_name": "Forensics",
        "comic_title": "Seventh Victim",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/seventh-victim",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/seventh-victim\/volume\/1\/chapter\/5",
        "comic_titleslug": "seventh-victim",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-26T05:43:59.000000Z",
        "comic_updatedAt": "2023-02-26T05:43:59.000000Z",
        "comic_type": "manhua",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5007,
        "ch_number": 105,
        "vol_number": 2,
        "ch_name": "Chapter 105",
        "comic_title": "The Story of a Low Rank Soldier becoming a Monarch",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5007-the-story-of-a-low-rank-soldier-becoming-a-monarch",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/5007-the-story-of-a-low-rank-soldier-becoming-a-monarch\/volume\/2\/chapter\/105",
        "comic_titleslug": "5007-the-story-of-a-low-rank-soldier-becoming-a-monarch",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-21T19:54:33.000000Z",
        "comic_updatedAt": "2023-02-21T22:10:08.000000Z",
        "comic_type": "manwha",
        "comic_choice": "editor's choice",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 35,
        "vol_number": 5,
        "ch_name": "214",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/35",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 34,
        "vol_number": 5,
        "ch_name": "213",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/34",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 33,
        "vol_number": 5,
        "ch_name": "212",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/33",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 32,
        "vol_number": 5,
        "ch_name": "211",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/32",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 31,
        "vol_number": 5,
        "ch_name": "210",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/31",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 30,
        "vol_number": 5,
        "ch_name": "209",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/30",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      },
      {
        "comic_id": 5000,
        "ch_number": 3,
        "vol_number": 5,
        "ch_name": "182",
        "comic_title": "Dimensional Mercenary",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/dimensional-mercenary",
        "ch_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comic\/dimensional-mercenary\/volume\/5\/chapter\/3",
        "comic_titleslug": "dimensional-mercenary",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-14T13:24:54.000000Z",
        "comic_updatedAt": "2023-02-14T13:24:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "hot",
        "comic_thumb": "/thumb.jpg"
      }
    ],
    "recommended": [
      {
        "comic_id": 5030,
        "comic_title": "The S-Classes That I Raised",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5030-the-s-classes-that-i-raised",
        "comic_titleslug": "5030-the-s-classes-that-i-raised",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-03-02T21:14:13.000000Z",
        "comic_updatedAt": "2023-03-02T21:15:38.000000Z",
        "comic_type": "manwha",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 1
      },
      {
        "comic_id": 5026,
        "comic_title": "Glass Wall",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/glass-wall",
        "comic_titleslug": "glass-wall",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-03-01T20:37:27.000000Z",
        "comic_updatedAt": "2023-03-01T20:37:27.000000Z",
        "comic_type": "manwha",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 32
      },
      {
        "comic_id": 5017,
        "comic_title": "Innocent Murder",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5017-innocent-murder",
        "comic_titleslug": "5017-innocent-murder",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-26T04:57:28.000000Z",
        "comic_updatedAt": "2023-02-26T06:39:33.000000Z",
        "comic_type": "manhua",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 8
      },
      {
        "comic_id": 5029,
        "comic_title": "Solo Leveling",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/solo-leveling",
        "comic_titleslug": "solo-leveling",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-03-02T19:31:54.000000Z",
        "comic_updatedAt": "2023-03-02T19:31:54.000000Z",
        "comic_type": "manwha",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 26
      },
      {
        "comic_id": 5018,
        "comic_title": "Seventh Victim",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/seventh-victim",
        "comic_titleslug": "seventh-victim",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-26T05:43:59.000000Z",
        "comic_updatedAt": "2023-02-26T05:43:59.000000Z",
        "comic_type": "manhua",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 6
      },
      {
        "comic_id": 5014,
        "comic_title": "Samsara Law",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5014-samsara-law",
        "comic_titleslug": "5014-samsara-law",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-26T02:21:36.000000Z",
        "comic_updatedAt": "2023-02-26T06:42:44.000000Z",
        "comic_type": "ru manga",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 9
      },
      {
        "comic_id": 5008,
        "comic_title": "I Love You, Miki",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5008-i-love-you-miki",
        "comic_titleslug": "5008-i-love-you-miki",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-21T22:20:47.000000Z",
        "comic_updatedAt": "2023-02-26T06:40:56.000000Z",
        "comic_type": "manga",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 9
      },
      {
        "comic_id": 5016,
        "comic_title": "I Want to Escape From Princess Training",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5016-i-want-to-escape-from-princess-training",
        "comic_titleslug": "5016-i-want-to-escape-from-princess-training",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-26T04:35:13.000000Z",
        "comic_updatedAt": "2023-02-26T06:41:15.000000Z",
        "comic_type": "manga",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 12
      },
      {
        "comic_id": 5011,
        "comic_title": "Max Level Knight",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/max-level-knight",
        "comic_titleslug": "max-level-knight",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-25T22:50:18.000000Z",
        "comic_updatedAt": "2023-02-25T22:50:18.000000Z",
        "comic_type": "manwha",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 16
      },
      {
        "comic_id": 5021,
        "comic_title": "Strong Gale, Mad Dragon",
        "comic_viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/5021-strong-gale-mad-dragon",
        "comic_titleslug": "5021-strong-gale-mad-dragon",
        "comic_isMature": false,
        "comic_isLocked": false,
        "comic_createdAt": "2023-02-27T17:38:27.000000Z",
        "comic_updatedAt": "2023-02-27T17:39:50.000000Z",
        "comic_type": "manwha",
        "comic_choice": "new",
        "comic_thumb": "/thumb.jpg",
        "ch_count": 44
      }
    ],
    "slider": [
      {
        "img": "/slide.png",
        "position": 1,
        "url": "/slide.png"
      }
    ],
    "ads": {
      "above_rec": "",
      "below_rec": ""
    }
  };
  return fakeData;

  // let url: string = `https://api.komiko.leaveitblank.co/api/homepage`;
  // // console.log(url);
  // const res = await fetch(url);
  // if (!res.ok) {
  //   const message = `An error occured: ${res.status} while fetching data from api`;
  //   console.error(message);
  //   throw new Error(message);
  // }
  // const resbody: APITYPE = await res.json();
  // // console.log(resbody);
  // return resbody;
}
function disque(comicSlug: string, url: string, disqus_shortname: string) {
  //@ts-ignore
  document.getElementById("disq_load").style.display = "none";
  var disqus_config = function (this: any) {
    this.page.url = url // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = comicSlug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
    //@ts-ignore
    s.setAttribute('data-timestamp', new Date());
    (d.head || d.body).appendChild(s);
  })();
}