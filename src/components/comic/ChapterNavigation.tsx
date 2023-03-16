import { Link } from "react-router-dom";

function ChapterNavigation({ prevCh, nextCh, comic_titleSlug }: any) {
    return (<> <div className="grid grid-cols-3 p-4 mb-10 mt-3 font-catamaran gap-2 bg-neutral-200 dark:bg-neutral-900 dark:text-gray-200 rounded-md text-sm">
        <div className="px-5 py-4 rounded-md bg-purple-500 text-gray-900 dark:text-gray-200 justify-self-start align-middle text-center items-center self-center">
            {

                (prevCh === null ? (

                    <button disabled>No Prev</button>
                ) : (
                    <Link
                        to={
                            "/comics/" +
                            prevCh.comic +
                            "/volume/" +
                            prevCh.volume +
                            "/chapter/" +
                            prevCh.chapter
                        }
                        className=" "
                    >
                        Previous
                    </Link>

                ))
            }
        </div>

        <Link
            to={"/comics/" + comic_titleSlug}
            className="px-5 py-4 rounded-md bg-purple-500 text-gray-900 dark:text-gray-200 justify-self-center items-center self-center align-middle text-center"
        >
            Home
        </Link>
        <div className="px-5 py-4 rounded-md bg-purple-500 text-gray-900 dark:text-gray-200 justify-self-end items-center self-center align-middle text-center">
            {

                (nextCh === null ? (
                    <button disabled>No Next</button>

                ) : (<Link
                    to={
                        "/comics/" +
                        nextCh.comic +
                        "/volume/" +
                        nextCh.volume +
                        "/chapter/" +
                        nextCh.chapter
                    }
                    className=" "
                >
                    Next
                </Link>

                ))
            }
        </div>
    </div></>)
}

export default ChapterNavigation;