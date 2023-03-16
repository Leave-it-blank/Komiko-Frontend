import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import moment from 'moment';
import { Helmet } from 'react-helmet';
import Pagination from "../components/Pagination";
import Adsense from "../components/Adsense";
type APITYPE = {
    comics: {
        "current_page": number,
        "data": Array<
            {
                "id": number,
                "title": string,
                "titleSlug": string,
                "created_at": string,
                "choice": string,
                "chapterCount": number,
                "type": string,
                "isMature": false,
                "status": string,
                "thumb": string
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

function Comics() {
    const release: APITYPE = useLoaderData() as APITYPE;

    return (<>
        <div className="max-w-screen-xl py-10 w-full md:mx-auto">
            <Helmet >
                <title>Comics- komiko</title>
                <meta
                    name="description"
                    content="New: komiko Comics, A place to read manga, manhua and manwha for free of cost."
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="HomePage, where you can read comics for free." />
                <meta
                    property="og:description"
                    content="New: komiko Comics, A place to read manga, manhua and manwha for free of cost."
                />

                <meta property="og:url" content="https://komiko.com/" />

                <meta
                    name="twitter:title"
                    content="komiko Comics, where you can read comics for free."
                />
                <meta
                    name="twitter:description"
                    content="webcomics: komiko Comics, A place to read manga, manhua and manwha for free of cost."
                />
            </Helmet>
            <div className='text-white bg-red-500 p-3 rounded-lg'>This is sample page, all resources might not load. </div>

            <div className="flex mt-5">

                <div className="w-full">
                    <div className="flex flex-col my-2">
                        <div className="sm:mx-10">
                            <h1
                                className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white"
                            >
                                Comics
                            </h1>



                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
                            >
                                {
                                    release["comics"].data.map((comic) =>

                                        <div

                                            key={comic.id}
                                            className="m-2 grow flex justify-center"
                                        >
                                            <Link to={"/comics/" + comic.titleSlug}>
                                                <div className="px-2 py-1 h-content bg-transparent">
                                                    <div className="flex flex-shrink rounded-md">
                                                        <div className="flex flex-col rounded-md">
                                                            <div className="relative">
                                                                <div
                                                                    className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 sm:w-48"


                                                                ><img className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none" alt="728cda22-d761-44ce-9344-50d4387c34ca"
                                                                    referrerPolicy="no-referrer" sizes="13vw" src={comic.thumb} width="500" height="715"></img></div>

                                                                {comic.chapterCount !== 0 &&
                                                                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 flex justify-start md:justify-center">
                                                                        <div
                                                                            className="shrink-1  py-1 opacity-80 text-lg md:text-sm font-semibold mt-2 font-roboto capitalize text-purple-500  text-center select-none cursor-pointer flex-none flex-0 truncate border-purple-500  border-2 bg-white rounded-md w-fit px-3"
                                                                        >
                                                                            <p>  {comic.chapterCount + " Chapters "} </p>
                                                                        </div>
                                                                    </div>

                                                                }

                                                            </div>
                                                            <div className="justify-end flex-none">
                                                                <div
                                                                    className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-500 sm:w-48"
                                                                >

                                                                    <div
                                                                        className="min-h-5   text-xl md:text-md    text-left select-none cursor-pointer flex-none flex-0 dark:text-white      w-full hover:text-purple-400 dark:hover:text-purple-500 font-bold"
                                                                    >
                                                                        {comic.title}

                                                                    </div>

                                                                    <div
                                                                        className=" min-h-3 w-full text-sm font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0"
                                                                    >
                                                                        {dateshow(comic.created_at)}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )}

                            </div>
                            <div className='ads' id='Comic_ads_aboveLatest'>
                                <Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"3552429677"} dataAdFormat={"auto"} dataFullWidthResponsive={true} />
                            </div>
                            <div className="mx-auto flex justify-center md:justify-start">
                                {<Pagination links={release["comics"].links} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    </>);
}
export default Comics;

export async function comicDataLoader({ request }: any) {
    // const params = new URL(request.url).searchParams;
    // const page = params.get('page');
    // let url: string = `https://api.komiko.com/api/comics`;

    // if (page !== null && page !== undefined) {
    //     // console.log('hi');
    //     url = `https://api.komiko.com/api/comics/?page=${page}`
    // }
    // const res = await fetch(url);
    // if (!res.ok) {
    //     const message = `An error occured: ${res.status} while fetching data from api`;
    //     console.error(message);
    //     throw new Error(message);
    // }
    // const resbody: APITYPE = await res.json();
    // console.log(resbody);
    // return resbody;

    const fakeData = {
        "comics": {
            "current_page": 1,
            "data": [
                {
                    "id": 5025,
                    "title": "Another Happy Day for the Villainess",
                    "titleSlug": "another-happy-day-for-the-villainess",
                    "created_at": "2023-03-01T04:41:00.000000Z",
                    "choice": "new",
                    "chapterCount": 29,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5023,
                    "title": "A Way to Protect the Lovable You",
                    "titleSlug": "a-way-to-protect-the-lovable-you",
                    "created_at": "2023-02-27T20:14:59.000000Z",
                    "choice": "new",
                    "chapterCount": 45,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5019,
                    "title": "Chaos Alchemist",
                    "titleSlug": "chaos-alchemist",
                    "created_at": "2023-02-26T20:30:59.000000Z",
                    "choice": "new",
                    "chapterCount": 57,
                    "type": "manhua",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5032,
                    "title": "Cinderella Wasn't Me",
                    "titleSlug": "cinderella-wasnt-me",
                    "created_at": "2023-03-02T22:16:21.000000Z",
                    "choice": "new",
                    "chapterCount": 15,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5012,
                    "title": "Counter Cube",
                    "titleSlug": "5012-counter-cube",
                    "created_at": "2023-02-26T00:21:10.000000Z",
                    "choice": "new",
                    "chapterCount": 25,
                    "type": "manwha",
                    "isMature": false,
                    "status": "dropped",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5002,
                    "title": "Dawn of the Eastland",
                    "titleSlug": "5002-dawn-of-the-eastland",
                    "created_at": "2023-02-14T17:41:41.000000Z",
                    "choice": "new",
                    "chapterCount": 15,
                    "type": "manwha",
                    "isMature": false,
                    "status": "dropped",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5000,
                    "title": "Dimensional Mercenary",
                    "titleSlug": "dimensional-mercenary",
                    "created_at": "2023-02-14T13:24:54.000000Z",
                    "choice": "hot",
                    "chapterCount": 61,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5004,
                    "title": "Dungeon Sherpa",
                    "titleSlug": "5004-dungeon-sherpa",
                    "created_at": "2023-02-21T14:04:30.000000Z",
                    "choice": "new",
                    "chapterCount": 5,
                    "type": "manga",
                    "isMature": false,
                    "status": "dropped",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5026,
                    "title": "Glass Wall",
                    "titleSlug": "glass-wall",
                    "created_at": "2023-03-01T20:37:27.000000Z",
                    "choice": "new",
                    "chapterCount": 32,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5008,
                    "title": "I Love You, Miki",
                    "titleSlug": "5008-i-love-you-miki",
                    "created_at": "2023-02-21T22:20:47.000000Z",
                    "choice": "new",
                    "chapterCount": 9,
                    "type": "manga",
                    "isMature": false,
                    "status": "dropped",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5020,
                    "title": "I'm an Overlord",
                    "titleSlug": "im-an-overlord",
                    "created_at": "2023-02-27T14:32:55.000000Z",
                    "choice": "new",
                    "chapterCount": 81,
                    "type": "manhua",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5017,
                    "title": "Innocent Murder",
                    "titleSlug": "5017-innocent-murder",
                    "created_at": "2023-02-26T04:57:28.000000Z",
                    "choice": "new",
                    "chapterCount": 8,
                    "type": "manhua",
                    "isMature": false,
                    "status": "dropped",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5016,
                    "title": "I Want to Escape From Princess Training",
                    "titleSlug": "5016-i-want-to-escape-from-princess-training",
                    "created_at": "2023-02-26T04:35:13.000000Z",
                    "choice": "new",
                    "chapterCount": 12,
                    "type": "manga",
                    "isMature": false,
                    "status": "dropped",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5003,
                    "title": "I Was Born as the Lead Characters' Child",
                    "titleSlug": "i-was-born-as-the-lead-characters-child",
                    "created_at": "2023-02-20T18:26:07.000000Z",
                    "choice": "latest",
                    "chapterCount": 37,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                },
                {
                    "id": 5028,
                    "title": "Leveling Up, By Only Eating!",
                    "titleSlug": "leveling-up-by-only-eating",
                    "created_at": "2023-03-02T04:09:24.000000Z",
                    "choice": "new",
                    "chapterCount": 31,
                    "type": "manwha",
                    "isMature": false,
                    "status": "ongoing",
                    "thumb": "/thumb.jpg"
                }
            ],
            "first_page_url": "?page=1",
            "from": 1,
            "last_page": 3,
            "last_page_url": "?page=3",
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
            "total": 33
        }
    };

    return fakeData;
}


function dateshow(value: string) {
    return moment(value).fromNow(); // here u modify data
}