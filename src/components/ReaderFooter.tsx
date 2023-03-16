function ReaderFooter() {
    return (<>
        <div className="absolute    w-full  bg-neutral-900 ">
            <div className="container mx-auto px-4  ">
                <div className="border-b-1 border-gray-700">

                    <div className="flex flex-wrap items-center md:justify-between justify-center py-2 ">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-sm text-neutral-900 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 font-semibold py-3">
                                Komiko © 2022 <a href="#" className="text-neutral-900 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 text-sm font-semibold py-1">
                                    Leaveitblank</a></div></div><div className="w-full md:w-8/12 px-4"><ul className="flex flex-wrap list-none md:justify-end justify-end">
                                        <li>
                                            <a href="#" className="text-neutral-900 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 text-sm font-semibold block py-1 px-3">Back To Top</a>
                                        </li></ul></div></div></div>
            </div>   </div>
    </>);
}

export default ReaderFooter;