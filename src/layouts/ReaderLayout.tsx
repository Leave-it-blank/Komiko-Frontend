import React from "react";
import { Outlet } from "react-router-dom";
import ReaderNavBar from "../components/ReaderNavBar";
import ReaderFooter from "../components/ReaderFooter";
import Adsense from "../components/Adsense";
import { ScrollRestoration } from "react-router-dom";
function ReaderLayout() {
    return (
        <div className="">
            <ScrollRestoration />
            <main className="relative ">
                <div className="w-full h-full min-h-screen">
                    <ReaderNavBar />
                    {/* <div id="ads_global_nav_1 " className="mx-auto container max-w-screen-xl max-h-48">
                        <Adsense style={{ display: "block" }} dataAdClient={"ca-puba-131"} dataAdSlot={"231"} dataAdFormat={"auto"} dataFullWidthResponsive={true} />
                    </div> */}

                    <Outlet />
                </div>
                {/* <div id="ads_global_nav_2" className="mx-auto container max-w-screen-xl  ">
                    <Adsense style={{ display: "block" }} dataAdClient={"a-puba-131"} dataAdSlot={"2131"} dataAdFormat={"autorelaxed"} dataFullWidthResponsive={true} />
                </div> */}
                <ReaderFooter />
            </main>

        </div>
    );
}

export default ReaderLayout;
