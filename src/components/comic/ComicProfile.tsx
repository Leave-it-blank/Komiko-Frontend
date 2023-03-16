import { Link } from 'react-router-dom'
import moment from 'moment';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import Adsense from '../Adsense';
function ComicProfile({ comic }: any) {


    if (!localStorage[comic.id]) {
        //@ts-ignore
        localStorage.setItem(comic.id, JSON.stringify([...new Set()]));
    }
    const [bookmarkText, setBookmarkText] = useState("Bookmark");
    // console.log(localStorage.contains(comic.id));

    let comicChapters = JSON.parse(localStorage.getItem(comic.id)!);

    //  let comicChapters = new Set(JSON.parse(localStorage.contains(comic.id) === undefined || localStorage.getItem(comic.id) === null ? [1111] : localStorage.getItem(comic.id)));

    useEffect(() => { Bookmark_details(); readAlready() },)


    function Bookmark_details() {
        //@ts-ignore
        let bookmarks = new Map(JSON.parse(localStorage.getItem("bookmarks")));
        if (bookmarks.has(comic.id)) {
            setBookmarkText("Bookmarked");
        } else {
            setBookmarkText("Bookmark");
        }
    }

    function readAlready() {
        //@ts-ignore
        let comicChapters = new Set(JSON.parse(localStorage.getItem(comic.id)));
        comicChapters.forEach(function (value) {
            const rid = value + '_chapter_id_read';
            const rnid = value + '_chapter_id_not_read';
            if (document.getElementById(rid)) {
                // console.log(rid)
                //@ts-ignore
                document.getElementById(rid).classList.remove('hidden');
            }
            if (document.getElementById(rnid)) {
                //  console.log(rnid)
                //@ts-ignore
                document.getElementById(rnid).classList.add('hidden');
            }
        });
    }
    const create_comic_bookmark = () => {
        let comic_bookmark = [];
        comic_bookmark.push(comic.title);
        comic_bookmark.push(comic.thumb);
        comic_bookmark.push("/comics/" + comic.titleSlug);
        comic_bookmark.push(comic.updated_at);
        return comic_bookmark;
    };
    const bookmark = () => {
        //@ts-ignore
        let bookmarks = new Map(JSON.parse(localStorage.getItem("bookmarks")));
        console.log(bookmarks.has(comic.id));
        if (bookmarks.has(comic.id)) {
            bookmarks.delete(comic.id);
            console.log("removed bookmark");
        } else {
            const comic_detail = create_comic_bookmark();
            bookmarks.set(comic.id, comic_detail);
            console.log("added bookmark");
            //console.log(bookmarks);
        }
        //@ts-ignore
        localStorage.setItem("bookmarks", JSON.stringify([...bookmarks]));
        //@ts-ignore
        Bookmark_details();
        console.log("bookmarking function");

    };
    const readChapter = (cid: any) => {
        //@ts-ignore
        let comicChapters = new Set(JSON.parse(localStorage.getItem(comic.id)));
        if (comicChapters.has(cid)) {
            console.log("Read chapter Already!" + cid)
        }
        else {
            console.log("Read chapter  !" + cid)
            comicChapters.add(cid);
        }
        //@ts-ignore
        localStorage.setItem(comic.id, JSON.stringify([...comicChapters]));
    }

    return (<>
        <h1
            className="mx-8 my-3 pb-2 text-2xl capitalize font-catamaran font-bold text-left line-clamp-3 ml-2 dark:text-white select-text cursor-pointer"
        >
            {comic.title}
        </h1>
        <div
            className="flex flex-col md:flex-row justify-center sm:justify-evenly gap-10 my-2 mx-auto sm:mb-5 bg-neutral-200 dark:bg-neutral-900 py-5 md:px-24 px-2 xl:px-5 rounded-lg min-w-fit"
        >
            <div className="image2 mx-auto md:ml-8 xl:mx-auto">
                <div className="relative w-48">
                    <div
                        className="image select-none mx-auto rounded-xl h-72 w-48"

                    ><img className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none" alt={comic.titleSlug} referrerPolicy="no-referrer"
                        sizes="13vw" src={comic.thumb} width="500" height="715"></img></div>
                </div>
            </div>

            <div
                className="max-w-md min-w-fit w-full mx-auto md:mr-8 xl:mx-auto md:px-4 relative gap-3 h-16 md:h-auto"
            >
                <div

                    id="props.ads_comic.ads_below_title"
                    className="hidden md:block"
                ><Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"9988830186"} dataAdFormat={"auto"} dataFullWidthResponsive={true} /></div>
                <div className="absolute bottom-0 flex justify-around w-full text-white">
                    <button
                        className="py-2 px-4 bg-purple-500 rounded-md m-3 w-32"
                        onClick={() => { bookmark() }}
                    >
                        {bookmarkText}
                    </button>

                    <Link to={"/comics/" + comic.first_ch.comicSlug + "/volume/" + comic.first_ch.volumeNumber + "/chapter/" + comic.first_ch.chapterNumber}>
                        <button className="py-2 px-4 bg-lime-700 rounded-md m-3 w-44">
                            Read First Chapter
                        </button>
                    </Link>
                </div>
            </div>
        </div >

        <div
            className="sm:px-10 px-3 my-2 mx-auto sm:mb-5 bg-neutral-200 dark:bg-neutral-900 py-5 rounded-lg min-w-fit "
        >

            {/* <!-- here we will put description inside box --> */}
            <h2 className="text-xl font-roboto p-1   w-full text-justify max-w-md   font-bold text-gray-900 dark:text-gray-100 select-none   ">
                {"Description"}
            </h2>

            <p className="font-catamaran text-justify p-2 sm:mx-auto text-gray-800 dark:text-gray-400  mb-3 cursor-text select-text">
                {comic.description}
            </p>
            <Disclosure   >
                <Disclosure.Button id="sol_button" className="  text-xl font-roboto   font-bold   text-justify     text-gray-900 dark:text-gray-100 border border-purple-700 w-full rounded-md p-3" >
                    <div className='flex flex-row justify-between items-center' >
                        <div>Source</div>  <div className='text-neutral-500 px-2 text-sm capitalize'> click to view</div>
                    </div>
                </Disclosure.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-85 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-50 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                />
                <Disclosure.Panel className="text-gray-500" >
                    <div>
                        <div className=" flex flex-col justify-center p-3 mx-2 capitalize text-gray-800 dark:text-gray-400 select-none">

                            <div className=" flex flex-row justify-between">
                                <p className="px-2">Author: </p>
                                <p className="text-white">{comic.author}</p>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <p className="px-2">Artist:</p>
                                <p className="text-white">{comic.artist}</p>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <p className="px-2">Last Updated:</p>
                                <p className="text-white">{dateshow(comic.updated_at)}</p>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <p className="px-2">Created:</p>
                                <p className="text-white">{dateshow2(comic.created_at)}</p>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <p className="px-2">Mature:</p>
                                <p className="text-white">{comic.isMature ? "true" : "false"}</p>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <p className="px-2">Locked:</p>
                                <p className="text-white">{comic.isLocked ? "true" : "false"}</p>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <p className="px-2">publisher:</p>
                                <p className="text-white">{comic.publisher}</p>
                            </div>
                        </div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>


        </div>

        <div id="ads-comic-middle" className="px-3 mb-2 sm:mb-5 mx-auto rounded-lg min-w-fit">
            <div className="flex flex-col my-2"><Adsense style={{ display: "block" }} dataAdClient={"ca-pub-4705209099510077"} dataAdSlot={"4696990960"} dataAdFormat={"auto"} dataFullWidthResponsive={true} /></div>
        </div>

        <div
            className="sm:px-10 px-3 my-2 mx-auto  mb-4 bg-neutral-200 dark:bg-neutral-900 py-5 rounded-lg min-w-fit"
        >
            <h3 className="text-xl font-roboto p-1 w-full text-justify max-w-md font-bold dark:text-white">
                {"Content"}
            </h3>

            <div className="flex flex-col  ">
                {
                    comic.volumes.map((volume: any, key: any) => (

                        <div key={key}>
                            <div

                                className="flex flex-col my-2"
                            ></div>


                            <div className="  text-xl font-roboto my-2   font-bold   text-justify   text-gray-900 dark:text-gray-100 border border-purple-700 w-full rounded-md p-3" >
                                {
                                    volume.chapters_exist &&
                                    <div className='flex flex-row justify-between items-center' >
                                        <div>{"Volume " + volume.number} </div>  <div className='text-neutral-500 px-2 text-sm capitalize'> Scroll</div>
                                    </div>

                                }
                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" id={"vol" + volume.id}>

                                {
                                    volume.chapters.map((chapter: any, index: any) => (
                                        <div key={index}  >
                                            <Link
                                                to={"/comics/" + comic.titleSlug + "/volume/" + volume.number + "/chapter/" + chapter.number}

                                                onClick={() => { readChapter(chapter.id) }}
                                            >
                                                <div
                                                    className="col-span-1 flex flex-row justify-start items-center p-3 rounded-md bg-gray-100 dark:bg-black gap-2 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600 cursor-pointer"
                                                >
                                                    <div
                                                        className=" select-none first-letter:rounded-xl shrink-0"

                                                    >
                                                        <p id={chapter.id + '_chapter_id_read'} className="hidden" ><AiOutlineEye
                                                            className="  h-8 w-8  cursor-pointer focus:outline-none focus:ring-2 text-purple-300 rounded-md"
                                                            aria-hidden="true"
                                                        /> </p>
                                                        <p id={chapter.id + '_chapter_id_not_read'} className=""> <AiOutlineEyeInvisible
                                                            className="h-8 w-8  cursor-pointer focus:outline-none focus:ring-2 text-red-300 rounded-md"
                                                            aria-hidden="true"
                                                        /></p>

                                                    </div>
                                                    <div className="flex flex-wrap justify-evenly items-center">
                                                        <div className="text-sm dark:text-gray-100 ">{"Chapter " + chapter.number + " : "}</div>
                                                        <div className="text-sm dark:text-gray-300 ml-2">
                                                            {chapter.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div >
                                    ))}
                            </div >




                        </div >
                    ))
                }
            </div >
        </div >
    </>);
}

export default ComicProfile;


function dateshow(value: Date) {
    return moment(value).fromNow(); // here u modify data
}
function dateshow2(value: Date) {
    return moment(value).format("MMM Do YY"); // here u modify data
}