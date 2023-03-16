import ComicProfile from '../../components/comic/ComicProfile'
import moment from 'moment';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { AiOutlineTag } from "react-icons/ai";
import Support from '../../components/Support';
import { Helmet } from 'react-helmet';
import Adsense from '../../components/Adsense';
type APITYPE = {
    'comic': Array<{
        id: number,
        title: string,
        viewUrl: string,
        description: string,
        created_at: string,
        updated_at: string,
        isMature: boolean,
        isLocked: boolean,
        author: string,
        artist: string,
        publisher: string,
        tags: string,
        first_ch: string,
        thumb: string,

        volumes: string,
        titleSlug: string,

    }>,
    'ads_comic': Array<{
        ads_above_comment: string,
        ads_below_desc: string,
        ads_inside_content: string,
        ads_below_content: string,
        ads_below_title: string,
    }>,
}
function ViewComic() {
    const data: APITYPE = useLoaderData() as APITYPE;
    const { comic }: any = data;

    //@ts-ignore
    useEffect(() => { disque(comic.titleSlug, "https://komiko.leaveitblank.co/", "testsite-q2cy98osnk23") });

    return (<>
        <div className="max-w-screen-2xl py-10 w-full min-h-screen mx-auto">

            <Helmet>
                <title>{comic.title} - komiko</title>
                <meta
                    name="description"
                    content={comic.description}
                />
                <meta name="image" content={comic.thumb} />
                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content={comic.title}
                />
                <meta
                    property="og:description"
                    content={comic.description}
                />
                <meta property="og:image" content={comic.thumb} />
                <meta
                    property="og:url"
                    content={'http://komiko.leaveitblank.co/comics/' + comic.titleSlug}
                />


                <meta name="twitter:title" content={comic.title} />
                <meta name="twitter:description" content={comic.description} />
                <meta name="twitter:image" content={comic.thumb} />


                <meta
                    property="twitter:url"
                    content={'http://komiko.leaveitblank.co/comics/' + comic.titleSlug}
                />
            </Helmet>
            <div className='text-white bg-red-500 p-3 rounded-lg'>This is sample page, all resources might not load. </div>

            <div className="flex flex-col xl:flex-row justify-evenly sm:mx-10 gap-2">
                <div className="xl:w-8/12 w-full  rounded-lg mx-auto">
                    <ComicProfile comic={data.comic} />

                    <div
                        className="flex flex-col md:flex-col justify-center sm:justify-evenly gap-3 my-2 mx-auto  bg-neutral-200 dark:bg-neutral-900 py-5   rounded-lg min-w-fit px-5 sm:px-10"
                    >

                        {/* <!-- here we will put description inside box --> */}
                        <h3 className="text-xl font-roboto p-1   w-full text-left max-w-md   font-bold text-gray-900 dark:text-gray-100">
                            {"Comment Section"}
                        </h3>
                        <div className="py-3"></div>
                        <div id="disqus_thread" className=" dark:text-purple-300 bg-transparent "></div>
                    </div>

                </div>
                <div className="rounded-lg w-full  xl:w-4/12 xl:ml-10 mx-auto">
                    <div
                        className="flex flex-col md:flex-col justify-center sm:justify-evenly gap-3 my-2 mx-auto sm:mb-5 bg-neutral-200 dark:bg-neutral-900 py-5 md:px-24 px-2 xl:px-5 rounded-lg min-w-fit"
                    >

                        <h2 className="flex flex-wrap  ">
                            {
                                //@ts-expect-error
                                comic["tags"].map((tag: any, key) =>
                                    <div key={key} className="flex flex-row cursor-pointer select-none align-middle justify-items-center justify-center gap-2 px-4 m-1 py-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl text-white font-bold font-catamaran text-sm capitalize" >
                                        <AiOutlineTag
                                            className="    h-6 w-4  focus:outline-none focus:ring-2 text-purple-300 rounded-md"
                                            aria-hidden="true"
                                        />   <span
                                            className="mt-0.5 "

                                        >
                                            {tag.name}</span>

                                    </div>
                                )
                            }


                        </h2>

                    </div>

                    <Support />

                </div>

            </div >

        </div ></>)
}


export default ViewComic;

export async function comicLoader({ params }: any) {
    // const { comic } = params;

    // let url: string = `https://api.komiko.com/api/comics/${comic}`;

    // const res = await fetch(url);
    // if (!res.ok) {
    //     const message = `An error occured: ${res.status} while fetching data from api`;
    //     console.error(message);
    //     throw new Error(message);
    // }
    // const resbody: APITYPE = await res.json();

    // return resbody;

    const fakeData = {
        "comic": {
            "id": 5018,
            "title": "Test Title: ninth Victim",
            "viewUrl": "https:\/\/api.komiko.leaveitblank.co\/comics\/ninth-victim",
            "description": "In order for high school student Xu Sixian to escape her fated death, she must work together with her schoolmate from the future, Li Yunshan, to find the true killer!",
            "created_at": "2022-03-26T05:43:59.000000Z",
            "updated_at": "2022-03-26T05:43:59.000000Z",
            "isMature": false,
            "isLocked": false,
            "author": "lib",
            "artist": "lib",
            "publisher": "ac.qq",
            "tags": [
                {
                    "name": "mature",
                    "svg": null,
                    "tagCode": "b61eef1b-b26b-4f04-babc-d824572b2734"
                },
                {
                    "name": "school",
                    "svg": null,
                    "tagCode": "d16c116d-3998-4535-ac8a-5e933ea530f5"
                }
            ],
            "first_ch": {
                "comicSlug": "ninth-victim",
                "volumeNumber": 1,
                "chapterNumber": 0
            },
            "thumb": "/thumb.jpg",
            "volumes": [
                {
                    "chapters": [
                        {
                            "number": 5,
                            "name": "Forensics",
                            "id": 1137,
                            "url": "reader.chapter.view"
                        },
                        {
                            "number": 4,
                            "name": "Encounter",
                            "id": 404,
                            "url": "reader.chapter.view"
                        },
                        {
                            "number": 3,
                            "name": "Ginkgo Tree",
                            "id": 403,
                            "url": "reader.chapter.view"
                        },
                        {
                            "number": 2,
                            "name": "Li Yunshan",
                            "id": 402,
                            "url": "reader.chapter.view"
                        },
                        {
                            "number": 1,
                            "name": "Xu Sixian",
                            "id": 401,
                            "url": "reader.chapter.view"
                        },
                        {
                            "number": 0,
                            "name": "Preview",
                            "id": 400,
                            "url": "reader.chapter.view"
                        }
                    ],
                    "name": "Volume 1",
                    "number": 1,
                    "id": 24,
                    "chapters_exist": true
                }
            ],
            "titleSlug": "ninth-victim"
        },
        "ads_comic": {
            "ads_above_comment": "",
            "ads_below_desc": "",
            "ads_inside_content": "",
            "ads_below_content": "",
            "ads_below_title": ""
        }
    };

    return fakeData;
}


function dateshow(value: Date) {
    return moment(value).fromNow(); // here u modify data
}
function dateshow2(value: Date) {
    return moment(value).format("MMM Do YY"); // here u modify data
}

function disque(comicSlug: string, url: string, disqus_shortname: string) {
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