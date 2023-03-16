import { Link } from 'react-router-dom';
import moment from 'moment';
function Bookmarks() {
    //@ts-expect-error
    const bookmarks: any = JSON.parse(localStorage.getItem("bookmarks"));

    return (<>
        <div className="max-w-screen-xl py-10 w-full md:mx-auto">
            <div className='text-white bg-red-500 p-3 rounded-lg'>This is sample page, all resources might not load. </div>

            <div className="flex mt-5">
                <div className="w-full">
                    <div className="flex flex-col my-2">
                        <div className="sm:mx-10">
                            <h1
                                className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white"
                            >
                                bookmarks
                            </h1>

                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
                            >
                                {
                                    bookmarks.map((comic: any) => (
                                        <div

                                            key={comic[0]}
                                            className="m-2 grow flex justify-center"
                                        >
                                            <Link to={comic[1][2]}>
                                                <div className="px-2 py-1 h-content bg-transparent">
                                                    <div className="flex flex-shrink rounded-md">
                                                        <div className="flex flex-col rounded-md">
                                                            <div className="relative">
                                                                <div
                                                                    className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 w-full sm:w-48"


                                                                ><img className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none" alt="728cda22-d761-44ce-9344-50d4387c34ca" loading="lazy"
                                                                    referrerPolicy="no-referrer" sizes="13vw" src={comic[1][1]} width="500" height="715"></img></div>
                                                            </div>
                                                            <div className="justify-end flex-none">
                                                                <div
                                                                    className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-500 sm:w-48"
                                                                >

                                                                    <div
                                                                        className="min-h-5 w-full text-md text-left select-none cursor-pointer flex-none flex-0 dark:text-white    hover:text-purple-400 dark:hover:text-purple-500 font-bold"
                                                                    >
                                                                        {comic[1][0]}

                                                                    </div>

                                                                    <div
                                                                        className="  min-h-3 w-full text-sm font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0"
                                                                    >
                                                                        {dateshow(comic[1][3])}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </>);
}

export default Bookmarks;

function dateshow(value: Date) {
    return moment(value).fromNow(); // here u modify data
}