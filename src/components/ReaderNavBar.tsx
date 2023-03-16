import { Menu, Transition } from "@headlessui/react";
import { Fragment, SVGProps, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/20/solid";

import { Switch } from "@headlessui/react";
function ReaderNavBar(props: any) {
    let location = useLocation();
    const logout = "/logout";
    const [enabled, setEnabled] = useState(true);
    const readerNav = [
        {
            name: "Home",
            href: "/",
            current: location.pathname === "/" ? true : false,
            guest: true,
        },
        {
            name: "Latest",
            href: "/latest",
            current: location.pathname === "/latest" ? true : false,
            guest: true,
        },
        {
            name: "Comics",
            href: "/comics",
            current: location.pathname === "/comics" ? true : false,
            guest: true,
        },
        {
            name: "Bookmarks",
            href: "/bookmarks",
            current: location.pathname === "/bookmarks" ? true : false,
            guest: true,
        },

    ];
    const userPerms = [
        "view dashboard",
        "handle dashboard",
        "view comic management",
    ];
    const adminNav = {
        name: "Dashboard",
        href: "/dashboard",
        current: location.pathname === "dashboard" ? true : false,

    };
    return (
        <>
            {/* Desktop Nav Bar */}
            <nav className="bg-neutral-900  py-3 w-full hidden    md:flex flex-row justify-between items-center text-neutral-300 gap-3 px-10 select-none">
                <div className=" flex justify-centern gap-3 flex-nowrap">
                    {readerNav.map((reader) => {
                        return (
                            <a href={reader.href} key={reader.name}>
                                {reader.current ?
                                    <div className=" border-b hover:animate-pulse border-purple-500 py-2 px-2 cursor-pointer rounded-md  text-white ">
                                        {reader.name}
                                    </div>
                                    : <div className="hover:border-b hover:animate-pulse border-purple-500 py-2 px-2 cursor-pointer rounded-md hover:text-white ">
                                        {reader.name}
                                    </div>
                                }

                            </a>
                        );
                    })}{" "}
                </div>
                <div className="flex flex-row gap-3 justify-between items-center">

                    <div>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? "bg-purple-600" : "bg-neutral-700"
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">Enable DarkMode</span>
                            <span
                                className={`${enabled ? "translate-x-6" : "translate-x-1"
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                    </div>
                    <div className="   hover:text-white cursor-pointer  text-center py-2 rounded-md">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md   bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Settings
                                    <ChevronDownIcon
                                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                    {/*  <div className="px-1 py-1 ">
                                       <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href={adminNav.href}
                                                    className={`${active ? "bg-violet-500 text-white" : "text-gray-50"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <DuplicateActiveIcon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <DuplicateInactiveIcon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    {adminNav.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? "bg-violet-500 text-white" : "text-gray-50"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <ArchiveActiveIcon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <ArchiveInactiveIcon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    Archive
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? "bg-violet-500 text-white" : "text-gray-50"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <MoveActiveIcon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <MoveInactiveIcon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    Move
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div> */}
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href={"https://api.komiko.leaveitblank.co/login"}
                                                    className={`${active ? "bg-violet-500 text-white" : "text-gray-50"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <DeleteActiveIcon
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <DeleteInactiveIcon
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    Login
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </nav>
            {/* Mobile Nav Bar */}
            <nav className="bg-neutral-900  py-3 w-full md:hidden     text-neutral-200 gap-3  select-none flex flex-row justify-between items-center">
                <div className="w-full mx-3">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <div className="flex flex-row justify-between items-center">
                                    <Disclosure.Button className="flex     justify-between rounded-lg  bg-neutral-800 px-4 py-2 text-left text-md font-medium items-center   ">
                                        <Bars4Icon
                                            className={`${open ? "rotate-180 transform" : ""
                                                } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <a className="self-center  " href="/">
                                        {" "}
                                        <img className="h-8 " src="logo.jpg" alt="komiko" />{" "}
                                    </a>
                                    <div className="mx-5 flex flex-row justify-center items-center gap-3">
                                        <Switch
                                            checked={enabled}
                                            onChange={setEnabled}
                                            className={`${enabled ? "bg-purple-600" : "bg-neutral-700"
                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span className="sr-only">Switch to DarkMode</span>
                                            <span
                                                className={`${enabled ? "translate-x-6" : "translate-x-1"
                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
                                    <div className=" flex flex-col justify-center gap-3 flex-nowrap">
                                        {readerNav.map((reader) => {
                                            return (
                                                <a
                                                    href={reader.href}
                                                    key={reader.name}
                                                    className="w-full"
                                                >
                                                    {reader.current ?
                                                        <div className="  hover:animate-pulse  bg-purple-600   py-2 px-2 cursor-pointer rounded-md hover:text-white w-full">
                                                            {reader.name}
                                                        </div>
                                                        : <div className="  hover:animate-pulse hover:bg-purple-600   py-2 px-2 cursor-pointer rounded-md hover:text-white w-full">
                                                            {reader.name}
                                                        </div>
                                                    }


                                                </a>
                                            );
                                        })}{" "}
                                        <a
                                            href={"https://api.komiko.leaveitblank.co/login"}
                                            key={"login"}
                                            className="w-full"
                                        >
                                            <div className="  hover:animate-pulse hover:bg-purple-600   py-2 px-2 cursor-pointer rounded-md hover:text-white w-full">
                                                {"Login | Register"}
                                            </div>
                                        </a>
                                    </div>

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </nav>
        </>
    );
}

function EditActiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    );
}

function DuplicateInactiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    );
}

function DuplicateActiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    );
}

function ArchiveInactiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function ArchiveActiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function MoveInactiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function MoveActiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
}

function DeleteInactiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function DeleteActiveIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
}
export default ReaderNavBar;
