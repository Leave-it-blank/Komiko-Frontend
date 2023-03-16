import { Link } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import moment from 'moment';
import { Helmet } from 'react-helmet';
import Pagination from "../components/Pagination";
import Adsense from '../components/Adsense';
type APITYPE = {
    chapters: {
        "current_page": number,
        "data": Array<
            {
                "ch_id": number,
                "ch_number": number,
                "ch_created_at": string,
                "vol_id": number,
                "vol_number": number,
                "vol_created_at": string,
                "comic_id": number,
                "comic_title": string,
                "comic_titleSlug": string,
                "comic_choice": string,
                "comic_type": string,
                "comic_isMature": boolean,
                "comic_status": string,
                "comic_thumb": string
            }>,

        "first_page_url": string,
        "from": number,
        "last_page": number,
        "last_page_url": string,
        "links": Array<
            {
                "url": string,
                "label": string,
                "active": boolean,
            }

        >,
        "next_page_url": string,
        "path": string,
        "per_page": number,
        "prev_page_url": string,
        "to": number,
        "total": number
    }
}
function Latest() {
    const release: APITYPE = useLoaderData() as APITYPE;
    return (<>
        <div className="max-w-screen-xl py-10 w-full md:mx-auto">
            <Helmet >
                <title>Latest Releases - komiko</title>
                <meta
                    name="description"
                    content="komiko: Latest Releases, A place to read manga, manhua and manwha for free of cost."
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="komiko: Latest, where you can read comics for free." />
                <meta
                    property="og:description"
                    content="New: Latest Releases, A place to read manga, manhua and manwha for free of cost."
                />

                <meta property="og:url" content="https://komiko.com/" />

                <meta
                    name="twitter:title"
                    content="komiko: Latest Releases, where you can read comics for free."
                />
                <meta
                    name="twitter:description"
                    content="webcomics: Latest Releases, A place to read manga, manhua and manwha for free of cost."
                />
            </Helmet>
            <div className='text-white bg-red-500  rounded-lg p-3'>This is sample page, all resources might not load. </div>

            <div className="flex mt-5">
                <div className="w-full">
                    <div className="flex flex-col my-2">
                        <div className="sm:mx-10">
                            <h1
                                className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white"
                            >
                                Latest Releases
                            </h1>

                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
                            >
                                {release["chapters"].data.map((chapter) =>


                                    <div
                                        key={chapter.ch_id}
                                        className="m-2 grow flex justify-center"

                                    >
                                        <Link to={"/comics/" + chapter.comic_titleSlug + "/volume/" + chapter.vol_number + "/chapter/" + chapter.ch_number}>
                                            <div className="px-2 py-1 h-content bg-transparent">
                                                <div className="flex flex-shrink rounded-md">
                                                    <div className="flex flex-col rounded-md">
                                                        <div className="relative">
                                                            <div
                                                                className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 sm:w-48"


                                                            > <img className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none" alt="728cda22-d761-44ce-9344-50d4387c34ca"
                                                                referrerPolicy="no-referrer" sizes="13vw" src={chapter.comic_thumb} width="500" height="715"></img></div>

                                                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 flex justify-start md:justify-center">
                                                                <div
                                                                    className="shrink-1  py-1 opacity-80 text-lg md:text-sm font-semibold mt-2 font-roboto capitalize text-purple-500  text-center select-none cursor-pointer flex-none flex-0 truncate border-purple-500  border-2 bg-white rounded-md w-fit px-3"
                                                                >
                                                                    <p>
                                                                        {
                                                                            "vol " +
                                                                            chapter.vol_number +
                                                                            " chapters " +
                                                                            chapter.ch_number
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="justify-end flex-none">
                                                            <div
                                                                className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-500 sm:w-48"
                                                            >
                                                                <div className="min-h-5 w-full text-xl md:text-md    text-left select-none cursor-pointer flex-none flex-0 dark:text-white       hover:text-purple-400 dark:hover:text-purple-500 font-bold">

                                                                    {chapter.comic_title}

                                                                </div>

                                                                <div
                                                                    className=" min-h-3 w-full text-sm font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0"
                                                                >
                                                                    {dateshow(chapter.ch_created_at)}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )

                                }

                            </div>
                            <div className='ads' id='Latest_ads_aboveLatest'>
                                <Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"6178593010"} dataAdFormat={"auto"} dataFullWidthResponsive={true} />
                            </div>
                            <div className="mx-auto flex justify-center md:justify-start">
                                {<Pagination links={release["chapters"].links} />}
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        </div >

    </>);
}
export default Latest;

export async function latestDataLoader({ request }: any) {
    // const params = new URL(request.url).searchParams;
    // const page = params.get('page');
    // let url: string = `https://api.komiko.com/api/latest`;

    // if (page !== null && page !== undefined) {
    //     //console.log('hi');
    //     url = `https://api.komiko.com/api/latest/?page=${page}`
    // }
    // const res = await fetch(url);
    // if (!res.ok) {
    //     const message = `An error occured: ${res.status} while fetching data from api`;
    //     console.error(message);
    //     throw new Error(message);
    // }
    // const resbody: APITYPE = await res.json();
    const fakeData = {
        "chapters": {
            "current_page": 1,
            "data": [
                {
                    "ch_id": 1138,
                    "ch_number": 37,
                    "ch_created_at": "2023-03-13T17:37:43.000000Z",
                    "vol_id": 4,
                    "vol_number": 1,
                    "vol_created_at": "2023-02-20T18:26:26.000000Z",
                    "comic_id": 5003,
                    "comic_title": "I Was Born as the Lead Characters' Child",
                    "comic_titleSlug": "i-was-born-as-the-lead-characters-child",
                    "comic_choice": "latest",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1137,
                    "ch_number": 5,
                    "ch_created_at": "2023-03-13T04:06:39.000000Z",
                    "vol_id": 24,
                    "vol_number": 1,
                    "vol_created_at": "2023-02-26T05:44:19.000000Z",
                    "comic_id": 5018,
                    "comic_title": "Seventh Victim",
                    "comic_titleSlug": "seventh-victim",
                    "comic_choice": "new",
                    "comic_type": "manhua",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1136,
                    "ch_number": 105,
                    "ch_created_at": "2023-03-12T05:05:02.000000Z",
                    "vol_id": 10,
                    "vol_number": 2,
                    "vol_created_at": "2023-02-21T20:59:00.000000Z",
                    "comic_id": 5007,
                    "comic_title": "The Story of a Low Rank Soldier becoming a Monarch",
                    "comic_titleSlug": "5007-the-story-of-a-low-rank-soldier-becoming-a-monarch",
                    "comic_choice": "editor's choice",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1135,
                    "ch_number": 35,
                    "ch_created_at": "2023-03-10T21:35:29.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1134,
                    "ch_number": 34,
                    "ch_created_at": "2023-03-10T21:34:38.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1133,
                    "ch_number": 33,
                    "ch_created_at": "2023-03-10T21:33:47.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1132,
                    "ch_number": 32,
                    "ch_created_at": "2023-03-10T21:33:05.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1131,
                    "ch_number": 31,
                    "ch_created_at": "2023-03-10T21:32:11.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1130,
                    "ch_number": 30,
                    "ch_created_at": "2023-03-10T21:31:18.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1129,
                    "ch_number": 3,
                    "ch_created_at": "2023-03-10T21:29:47.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1128,
                    "ch_number": 2,
                    "ch_created_at": "2023-03-10T21:28:50.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1127,
                    "ch_number": 1,
                    "ch_created_at": "2023-03-10T21:28:02.000000Z",
                    "vol_id": 1,
                    "vol_number": 5,
                    "vol_created_at": "2023-02-14T13:25:25.000000Z",
                    "comic_id": 5000,
                    "comic_title": "Dimensional Mercenary",
                    "comic_titleSlug": "dimensional-mercenary",
                    "comic_choice": "hot",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1126,
                    "ch_number": 45,
                    "ch_created_at": "2023-03-10T18:20:56.000000Z",
                    "vol_id": 33,
                    "vol_number": 1,
                    "vol_created_at": "2023-02-27T21:04:25.000000Z",
                    "comic_id": 5023,
                    "comic_title": "A Way to Protect the Lovable You",
                    "comic_titleSlug": "a-way-to-protect-the-lovable-you",
                    "comic_choice": "new",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1125,
                    "ch_number": 44,
                    "ch_created_at": "2023-03-10T18:20:15.000000Z",
                    "vol_id": 33,
                    "vol_number": 1,
                    "vol_created_at": "2023-02-27T21:04:25.000000Z",
                    "comic_id": 5023,
                    "comic_title": "A Way to Protect the Lovable You",
                    "comic_titleSlug": "a-way-to-protect-the-lovable-you",
                    "comic_choice": "new",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                },
                {
                    "ch_id": 1124,
                    "ch_number": 43,
                    "ch_created_at": "2023-03-10T18:19:32.000000Z",
                    "vol_id": 33,
                    "vol_number": 1,
                    "vol_created_at": "2023-02-27T21:04:25.000000Z",
                    "comic_id": 5023,
                    "comic_title": "A Way to Protect the Lovable You",
                    "comic_titleSlug": "a-way-to-protect-the-lovable-you",
                    "comic_choice": "new",
                    "comic_type": "manwha",
                    "comic_isMature": false,
                    "comic_status": "ongoing",
                    "comic_thumb": "/thumb.jpg"
                }
            ],
            "first_page_url": "?page=1",
            "from": 1,
            "last_page": 66,
            "last_page_url": "?page=66",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "?page=3",
                    "label": "3",
                    "active": false
                },
                {
                    "url": "?page=4",
                    "label": "4",
                    "active": false
                },
                {
                    "url": "?page=5",
                    "label": "5",
                    "active": false
                },
                {
                    "url": "?page=6",
                    "label": "6",
                    "active": false
                },
                {
                    "url": "?page=7",
                    "label": "7",
                    "active": false
                },
                {
                    "url": "?page=8",
                    "label": "8",
                    "active": false
                },
                {
                    "url": "?page=9",
                    "label": "9",
                    "active": false
                },
                {
                    "url": "?page=10",
                    "label": "10",
                    "active": false
                },
                {
                    "url": null,
                    "label": "...",
                    "active": false
                },
                {
                    "url": "?page=65",
                    "label": "65",
                    "active": false
                },
                {
                    "url": "?page=66",
                    "label": "66",
                    "active": false
                },
                {
                    "url": "?page=2",
                    "label": "Next &raquo;",
                    "active": false
                }
            ],
            "next_page_url": "?page=2",
            "path": "",
            "per_page": 15,
            "prev_page_url": null,
            "to": 15,
            "total": 988
        }
    }
    //console.log(resbody);
    return fakeData;
}

function dateshow(value: string) {
    return moment(value).fromNow(); // here u modify data
}