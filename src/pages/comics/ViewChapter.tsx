//@ts-nocheck
import { useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
import ChapterNavigation from "../../components/comic/ChapterNavigation";
import Support from '../../components/Support';
import { Helmet } from 'react-helmet';
import Adsense from '../../components/Adsense';
type APITYPE = {
    pages: Array<{
        id: number;
        fileName: string;
        thumb: string;
    }>;
    ch_id: number;
    ch_name: string;
    ch_isLocked: boolean;
    ch_no: number;
    comic_titleSlug: string;
    comic_title: string;
    comic_ID: number;
    vol_no: number;
    vol_ID: number;
    comic_thumb: string;
    nextCh: Array<{
        comic: string;
        volume: number;
        chapter: number;
    }>;
    prevCh: Array<{
        comic: string;
        volume: number;
        chapter: number;
    }>;
    ads_reader: {
        ads_reader_inside_content: string;
        ads_reader_below_content: string;
        ads_reader_above_content: string;
    };
    crawler_detected: boolean;
};

function ViewChapter() {
    const data: APITYPE = useLoaderData() as APITYPE;
    const { nextCh, prevCh } = data;
    if (!localStorage[data.comic_ID]) {
        //@ts-ignore
        localStorage.setItem(data.comic_ID, JSON.stringify([...new Set()]));
    }
    useEffect(() => { readChapter(data.ch_id) })
    const readChapter = (cid: any) => {
        //@ts-ignore
        let comicChapters = new Set(JSON.parse(localStorage.getItem(data.comic_ID)));
        if (comicChapters.has(cid)) {
            //console.log("Read chapter Already!" + cid)
        }
        else {
            //console.log("R !" + cid)
            comicChapters.add(cid);
        }
        //@ts-ignore
        localStorage.setItem(data.comic_ID, JSON.stringify([...comicChapters]));
    }
    return (
        <>
            <div className="container mx-auto max-w-6xl pt-10 px-1">
                <Helmet>
                    <title>{data.comic_title} - komiko</title>
                    <meta
                        name="description"
                        content={data.comic_description}
                    />
                    <meta name="image" />
                    <meta property="og:type" content="website" />

                    <meta
                        property="og:title"
                        content={data.comic_title}
                    />
                    <meta
                        property="og:description"
                        content={data.comic_description}
                    />
                    <meta property="og:image" content="props.comi[0].responsive" />
                    <meta
                        property="og:url"
                        content={'http://komiko.leaveitblank.co/comics/' + data.comic_titleSlug + '/volume/' + data.vol_no + '/chapter/' + data.ch_no}
                    />


                    <meta name="twitter:title" content={data.comic_title} />
                    <meta name="twitter:description" content={data.comic_description} />
                    <meta name="twitter:image" content={data.comic_thumb} />


                    <meta
                        property="twitter:url"
                        content={'http://komiko.leaveitblank.co/comics/' + data.comic_titleSlug + '/volume/' + data.vol_no + '/chapter/' + data.ch_no}
                    />
                </Helmet>


                <div className="flex justify-between py-3 px-2 items-center dark:text-white cursor-pointer select-none">
                    <div className="text-xl md:text-2xl">{data.comic_title}</div>
                    <div className="vol p-3 md:text-xl">
                        <div>Vol {data.vol_no}</div>
                        <div>Chapter {data.ch_no}</div>
                    </div>
                </div>
                <div className='text-white bg-red-500 p-3 rounded-lg'>This is sample page, all resources might not load. Pagination wont work without server.</div>
                <ChapterNavigation nextCh={nextCh} prevCh={prevCh} comic_titleSlug={data.comic_titleSlug} />

                <div className="min-h-screen">
                    {data.pages.map((page, key) => (
                        <div key={key}>

                            <img className="select-none w-full flex justify-center items-center  " src={page.thumb} alt={page.fileName + page.id} referrerPolicy="no-referrer" />
                            {key === 3 || key === 6 || key === 12 ?
                                <div
                                    id="pads"

                                    className="flex flex-col my-2"
                                >
                                    <span></span>
                                </div>
                                : <span></span>
                            }

                        </div>
                    ))}
                </div>
                <div className="pb-10"></div>
                <ChapterNavigation nextCh={nextCh} prevCh={prevCh} comic_titleSlug={data.comic_titleSlug} />

                <div className="py-10 container flex flex-col justify-center mx-auto">
                    <h3 className="text-xl font-roboto p-1 w-full font-bold text-gray-900 dark:text-gray-100 text-start">
                        {"Comment Section"}
                    </h3>
                    <div className="py-3"></div>
                    <button
                        id="disq_load"

                        onClick={() => { disque(data.comic_titleSlug + data.ch_id, "https://komiko.leaveitblank.co/", "testsite-q2cy98osnk23"); }}
                        className="p-2 bg-purple-500 text-white rounded-lg flex justify-center w-full"
                    >
                        Click to View Comment
                    </button>
                    <div

                        id="disqus_thread"
                        className="dark:text-purple-400 px-2"
                    ></div>
                </div><Support />
            </div>
        </>
    );
}

export default ViewChapter;

function disque(comicSlug: string, url: string, disqus_shortname: string) {
    document.getElementById("disq_load").style.display = "none";
    var disqus_config = function (this: any) {
        this.page.url = url; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = comicSlug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function () {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
            s = d.createElement("script");
        s.src = "https://" + disqus_shortname + ".disqus.com/embed.js";
        //@ts-ignore
        s.setAttribute("data-timestamp", new Date());
        (d.head || d.body).appendChild(s);
    })();
}

export async function chapterLoader({ params }: any) {
    // const { comic, chapter, volume } = params;
    // // console.log(params);
    // let url: string = `https://api.komiko.leaveitblank.co/api/comics/${comic}/volume/${volume}/chapter/${chapter}`;
    // //  console.log(url);
    // const res = await fetch(url);
    // if (!res.ok) {
    //     const message = `An error occured: ${res.status} while fetching data from api`;
    //     console.error(message);
    //     throw new Error(message);
    // }
    // const resbody: APITYPE = await res.json();

    // return resbody;

    const fakeData = {
        "pages": [
            {
                "id": 14850,
                "fileName": "00.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14847\/00.jpg"
            },
            {
                "id": 14854,
                "fileName": "01.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14851\/01.jpg"
            },
            {
                "id": 14855,
                "fileName": "02.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14852\/02.jpg"
            },
            {
                "id": 14856,
                "fileName": "03.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14853\/03.jpg"
            },
            {
                "id": 14857,
                "fileName": "04.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14854\/04.jpg"
            },
            {
                "id": 14858,
                "fileName": "05.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14855\/05.jpg"
            },
            {
                "id": 14862,
                "fileName": "06.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14859\/06.jpg"
            },
            {
                "id": 14859,
                "fileName": "07.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14856\/07.jpg"
            },
            {
                "id": 14861,
                "fileName": "08.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14858\/08.jpg"
            },
            {
                "id": 14863,
                "fileName": "09.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14860\/09.jpg"
            },
            {
                "id": 14860,
                "fileName": "10.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14857\/10.jpg"
            },
            {
                "id": 14853,
                "fileName": "11.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14850\/11.jpg"
            },
            {
                "id": 14851,
                "fileName": "12.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14848\/12.jpg"
            },
            {
                "id": 14852,
                "fileName": "13.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14849\/13.jpg"
            },
            {
                "id": 14849,
                "fileName": "14.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14846\/14.jpg"
            },
            {
                "id": 14848,
                "fileName": "15.jpg",
                "thumb": "https:\/\/api.komiko.leaveitblank.co\/storage\/SITEDATA\/14845\/15.jpg"
            }
        ],
        "ch_id": 1137,
        "ch_name": "Forensics",
        "ch_isLocked": false,
        "ch_no": 5,
        "comic_titleSlug": "ninth-victim",
        "comic_title": "ninth Victim",
        "comic_ID": 5018,
        "vol_no": 1,
        "vol_ID": 24,
        "comic_thumb": "/thumb.jpg",
        "nextCh": null,
        "prevCh": {
            "comic": "ninth-victim",
            "volume": 1,
            "chapter": 4
        },
        "ads_reader": {
            "ads_reader_inside_content": "",
            "ads_reader_below_content": "",
            "ads_reader_above_content": ""
        },
        "crawler_detected": false
    };
    return fakeData;
}
