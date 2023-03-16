function Error() {
    return (<>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold text-white mb-8">Oops!</h1>
                <p className="text-xl text-white mb-12">Looks like the API service is down. We're working hard to get it back up and running as soon as possible.</p>
                <img src="error.gif" alt="cute dog" className="w-1/2 rounded-full border-4 border-white shadow-lg select-none" />
            </div>
        </div>
    </>);
}

export default Error;