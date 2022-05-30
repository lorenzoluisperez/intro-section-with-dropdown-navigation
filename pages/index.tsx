/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { Dialog, Disclosure, Transition, Popover } from "@headlessui/react";
import { Fragment, useState } from "react";

const featureMenu = [
  {
    name: "Todo List",
    icon: "/icon-todo.svg",
    height: 16,
    width: 14,
  },
  {
    name: "Calendar",
    icon: "/icon-calendar.svg",
    height: 16,
    width: 16,
  },
  {
    name: "Reminders",
    icon: "/icon-reminders.svg",
    height: 17,
    width: 13,
  },
  {
    name: "Planning",
    icon: "/icon-planning.svg",
    height: 16,
    width: 16,
  },
];

const companyMenu = [
  {
    name: "History",
  },
  {
    name: "Our Team",
  },
  {
    name: "Blog",
  },
];

const Home: NextPage = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState<boolean>(false);
  const [renderTransition, setRenderTransition] = useState<boolean>(true);

  //forceupdate to reset sidebar state
  const reRenderOnClose = () => {
    setRenderTransition(false);
    setTimeout(() => {
      setRenderTransition(true);
    }, 100);
  };

  return (
    <Fragment>
      {renderTransition && (
        <Transition appear={true} show={mobileMenuShow} as={Fragment}>
          <Dialog
            onClose={() => {}}
            className={`fixed inset-0 overflow-hidden`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="transition-all ease-in-out duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all ease-in-out duration-700"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => reRenderOnClose()}
              >
                <Dialog.Panel
                  onClick={() => setMobileMenuShow(false)}
                  className={`absolute hover:cursor-pointer inset-0 bg-almost-black bg-opacity-75 transition-all`}
                />
              </Transition.Child>

              <div className="fixed inset-y-0 right-0 w-[65%] max-w-sm flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition-all ease-in-out duration-[400ms]"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition-all ease-in-out duration-[400ms]"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="w-screen">
                    <div className="h-full flex flex-col py-6 bg-almost-white shadow-xl overflow-y-scroll">
                      <div className="px-4">
                        <div className="flex items-center justify-end">
                          <div
                            className="hover:opacity-80 hover:cursor-pointer transition ease-in-out duration-300 flex justify-center items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileMenuShow(false);
                            }}
                          >
                            <span className="sr-only">Close panel</span>
                            <Image
                              src="/icon-close-menu.svg"
                              alt="hero"
                              width={26}
                              height={26}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex-1 px-5">
                        <nav>
                          <ul>
                            <Disclosure as={"li"}>
                              {({ open }) => (
                                <Fragment>
                                  <Disclosure.Button className="flex flex-row justify-start focus:border-none items-center text-medium-gray py-2 hover:text-almost-black transition duration-300">
                                    <span className="pr-3">Features</span>
                                    <svg
                                      className={`fill-current transition ease-out ${
                                        open &&
                                        "transform -rotate-180  duration-300"
                                      }`}
                                      stroke="currentColor"
                                      width="10"
                                      height="6"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeWidth="1.5"
                                        fill="none"
                                        d="m1 1 4 4 4-4"
                                      />
                                    </svg>
                                  </Disclosure.Button>
                                  <Transition
                                    className="ml-7 overflow-clip"
                                    show={open}
                                    enter="transform transition-all ease-in-out duration-500"
                                    enterFrom="h-0"
                                    enterTo="h-[10.2rem]"
                                    leave="transform transition-all ease-in-out duration-500"
                                    leaveFrom="h-[10.2rem]"
                                    leaveTo="h-0"
                                  >
                                    <Disclosure.Panel className="mt-1">
                                      {featureMenu.map((item, index) => {
                                        return (
                                          <a
                                            href="#"
                                            key={index}
                                            className={`py-2 flex flex-row hover:cursor-pointer text-medium-gray hover:text-almost-black justify-start items-center`}
                                          >
                                            <Image
                                              src={item.icon}
                                              height={item.height}
                                              width={item.width}
                                              alt="logo"
                                            />
                                            <div className="ml-4">
                                              {item.name}
                                            </div>
                                          </a>
                                        );
                                      })}
                                    </Disclosure.Panel>
                                  </Transition>
                                </Fragment>
                              )}
                            </Disclosure>
                            <Disclosure as="li">
                              {({ open }) => (
                                <Fragment>
                                  <Disclosure.Button className="flex flex-row justify-start items-center text-medium-gray py-2 hover:text-almost-black transition duration-300">
                                    <span className="pr-3">Company</span>
                                    <svg
                                      className={`fill-current transition ease-out ${
                                        open &&
                                        "transform -rotate-180  duration-300"
                                      }`}
                                      stroke="currentColor"
                                      width="10"
                                      height="6"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeWidth="1.5"
                                        fill="none"
                                        d="m1 1 4 4 4-4"
                                      />
                                    </svg>
                                  </Disclosure.Button>
                                  <Transition
                                    className="ml-7 overflow-clip"
                                    show={open}
                                    enter="transform transition-all ease-in-out duration-700"
                                    enterFrom="h-0"
                                    enterTo="h-32"
                                    leave="transform transition-all ease-in-out duration-700"
                                    leaveFrom="h-40"
                                    leaveTo="h-0"
                                  >
                                    <Disclosure.Panel>
                                      {companyMenu.map((item, index) => {
                                        return (
                                          <a
                                            href="#"
                                            key={index}
                                            className={`py-2 flex text-medium-gray hover:cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-black flex-row justify-start items-center`}
                                          >
                                            {item.name}
                                          </a>
                                        );
                                      })}
                                    </Disclosure.Panel>
                                  </Transition>
                                </Fragment>
                              )}
                            </Disclosure>
                            <li>
                              <a
                                href="#"
                                className="py-2 block hover:cursor-pointer text-medium-gray hover:text-almost-black transition-all ease-in-out duration-300"
                              >
                                Careers
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="py-2 block hover:cursor-pointer text-medium-gray hover:text-almost-black transition-all ease-in-out duration-300"
                              >
                                About
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div className="flex flex-col mt-4">
                          <a className="text-center py-2 hover:cursor-pointer text-medium-gray hover:text-almost-black transition-all ease-in-out duration-300">
                            Login
                          </a>
                          <a className="text-center hover:cursor-pointer text-medium-gray hover:border-almost-black hover:text-almost-black border-2 transition-all ease-in-out duration-300 py-2 border-medium-gray rounded-xl">
                            Register
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
      <div className="lg:mx-5">
        <header className="h-20">
          <div className="flex h-full mx-4 flex-row justify-between items-center">
            <div className="flex flex-row items-center justify-start">
              <div className="hover:cursor-pointer">
                <Image src="/logo.svg" alt="logo" width={84} height={27} />
              </div>
              <nav className="hidden lg:flex ml-12">
                <ul className="flex flex-row justify-start items-center">
                  <Popover as="li">
                    {({ open }) => (
                      <>
                        <Popover.Button className="relative flex flex-row text-medium-gray hover:text-almost-black items-center justify-start mx-5">
                          <span className="pr-3">Features</span>
                          <svg
                            className={`fill-current transition ease-out ${
                              open && "transform -rotate-180  duration-300"
                            }`}
                            stroke="currentColor"
                            width="10"
                            height="6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeWidth="1.5"
                              fill="none"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </Popover.Button>
                        <Transition
                          className="absolute z-50 left-32 top-[4.2rem] bg-almost-white shadow-[0px_10px_40px_-8px_rgba(0,0,0,0.3)] px-6 py-3 rounded-xl"
                          enter="transition duration-300 ease-out"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition duration-300 ease-out"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="">
                            {featureMenu.map((item, index) => {
                              return (
                                <a
                                  href="#"
                                  key={index}
                                  className={`py-2 flex flex-row hover:cursor-pointer text-medium-gray hover:text-almost-black justify-start items-center`}
                                >
                                  <Image
                                    src={item.icon}
                                    height={item.height}
                                    width={item.width}
                                    alt="logo"
                                  />
                                  <div className="ml-4">{item.name}</div>
                                </a>
                              );
                            })}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover as="li">
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex flex-row items-center text-medium-gray hover:text-almost-black justify-start mx-5">
                          <span className="pr-3">Company</span>
                          <svg
                            className={`fill-current transition ease-out ${
                              open && "transform -rotate-180  duration-300"
                            }`}
                            stroke="currentColor"
                            width="10"
                            height="6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeWidth="1.5"
                              fill="none"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </Popover.Button>
                        <Transition
                          className="absolute z-50 top-[4.2rem] left-80 bg-almost-white shadow-[0px_10px_40px_-8px_rgba(0,0,0,0.3)] px-6 py-3 rounded-xl"
                          enter="transition duration-300 ease-out"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition duration-300 ease-out"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel>
                            {companyMenu.map((item, index) => {
                              return (
                                <a
                                  href="#"
                                  key={index}
                                  className={`py-2 flex text-medium-gray hover:cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-black flex-row justify-start items-center`}
                                >
                                  {item.name}
                                </a>
                              );
                            })}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-6 block hover:cursor-pointer text-medium-gray hover:text-almost-black transition-all ease-in-out duration-300"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-6  block hover:cursor-pointer text-medium-gray hover:text-almost-black transition-all ease-in-out duration-300"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:flex flex-row justify-end items-center hidden">
              <a className="text-center py-2 hover:cursor-pointer px-6 mr-3 text-medium-gray hover:text-almost-black transition-all ease-in-out duration-300">
                Login
              </a>
              <a className="text-center hover:cursor-pointer px-6 text-medium-gray hover:border-almost-black hover:text-almost-black border-2 transition-all ease-in-out duration-300 py-2 border-medium-gray rounded-[1rem]">
                Register
              </a>
            </div>
            <button
              onClick={() => setMobileMenuShow(true)}
              className="lg:hidden"
            >
              <Image src="/icon-menu.svg" alt="logo" width={32} height={18} />
            </button>
          </div>
        </header>
        <main className="lg:grid lg:grid-cols-2 lg:w-9/12 lg:mx-auto lg:mt-6 2xl:mt-12">
          <div className="lg:order-last lg:ml-14 2xl:ml-40">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="/image-hero-desktop.png"
              />
              <img
                className="w-full h-auto"
                src="/image-hero-mobile.png"
                alt="hero"
                width={750}
                height={564}
              />
            </picture>
          </div>
          <div className="mx-3 mt-8 lg:mt-0 lg:mx-0 lg:flex lg:flex-col lg:justify-between">
            <div className="lg:flex lg:flex-col lg:my-auto">
              <h1 className="text-[2.29rem] text-center lg:text-left lg:text-[3.5rem] xl:text-[4.3rem] xl:leading-[4.5rem] leading-[3.5rem] 2xl:text-8xl font-bold text-almost-black">
                Make remote work
              </h1>
              <div className="my-2">
                <p className="font-medium text-md lg:text-left  text-center text-medium-gray xl:mt-5 xl:w-5/6">
                  Get your team in sync, no matter your location. Streamline
                  processes, create team rituals, and watch productivity soar.
                </p>
              </div>
              <div className="mt-7 flex justify-center items-center lg:justify-start">
                <button
                  type="button"
                  className="transition ease-in-out duration-300 flex justify-center items-center border-2 border-almost-black w-36 h-12 hover:bg-almost-white  font-bold hover:text-almost-black bg-almost-black text-almost-white font-fold p-5 rounded-2xl"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="flex flex-row py-10 items-center justify-between  lg:py-0">
              <div className="scale-75 xl:scale-100 2xl:scale-150">
                <Image
                  src="/client-databiz.svg"
                  alt="client"
                  width={114}
                  height={20}
                />
              </div>
              <div className="scale-75 xl:scale-100 2xl:scale-150">
                <Image
                  src="/client-audiophile.svg"
                  alt="client"
                  width={73}
                  height={36}
                />
              </div>
              <div className="scale-75 xl:scale-100 2xl:scale-150">
                <Image
                  src="/client-meet.svg"
                  alt="client"
                  width={90}
                  height={20}
                />
              </div>
              <div className="scale-75 xl:scale-100 2xl:scale-150">
                <Image
                  src="/client-maker.svg"
                  alt="client"
                  width={83}
                  height={24}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Home;
