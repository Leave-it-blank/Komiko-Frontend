import { Link } from "react-router-dom";
import moment from 'moment';
type recommendedType = {
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
    }>
}
function Recommended({ recommended }: recommendedType) {



    return (<>
        <div className="sm:mx-10">
            <h1 className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white">
                Hot recommended
            </h1>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
                style={{ minHeight: "10rem" }}
            >
                {
                    recommended.map((comic, key) => (
                        <div key={key} className="m-2 grow flex justify-center">
                            <Link to={"/comics/" + comic.comic_titleslug}>
                                <div className="px-2 py-1 h-content bg-transparent">
                                    <div className="flex flex-shrink rounded-md">
                                        <div className="flex flex-col rounded-md">
                                            <div className="relative">
                                                <div
                                                    className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 sm:w-48"


                                                >
                                                    <img className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none" alt={comic.comic_titleslug} loading="lazy" referrerPolicy="no-referrer"
                                                        sizes="13vw" src={comic.comic_thumb} width="500" height="715"></img>


                                                </div>
                                                <div
                                                    className="absolute top-1 left-1 right-0 text-md md:text-sm font-bold font-catamaran w-fit pr-2 max-w-2/3 ml-1 md:ml-0 text-gray-100 bg-purple-300 dark:bg-purple-500 opacity-95 mt-1 capitalize text-left select-none cursor-pointer flex items-center justify-center flex-0 rounded-md"
                                                >

                                                    <div className="mt-1 px-2 py-1" >{"  " + comic.comic_choice}</div>
                                                </div>

                                                <div v-if="comic.chapter_count !== 0 && comic.volume_count !== 1">

                                                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 flex justify-start md:justify-center">
                                                        <div
                                                            className="shrink-1  py-1 opacity-80 text-lg md:text-sm font-semibold mt-2 font-roboto capitalize text-purple-500  text-center select-none cursor-pointer flex-none flex-0 truncate border-purple-500  border-2 bg-white rounded-md w-fit px-3"
                                                        >
                                                            <p> {comic.ch_count + " Chapters "}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="justify-end flex-none">
                                                <div className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-600 sm:w-48">
                                                    <div className="min-h-5 w-full text-xl md:text-md   text-left select-none cursor-pointer text-zinc-900 flex-none flex-0 dark:text-white   hover:text-purple-400 dark:hover:text-purple-500 font-bold">
                                                        {comic.comic_title}
                                                    </div>

                                                    <div
                                                        className=" min-h-3 w-full text-sm font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0"
                                                    >
                                                        {dateshow(comic.comic_updatedAt)}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    </>)
}

export default Recommended;


function dateshow(value: string) {
    return moment(value).fromNow(); // here u modify data
}