import type { NextPage } from "next";
import Image from "next/image";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

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

  /*
   indicator to disable interactions if it's in motion
    and solution for z-index issues between sidebars and main content
  */

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <div>
      <Transition show={mobileMenuShow}>
        <Dialog
          onClose={() => {}}
          className={`fixed inset-0 overflow-hidden ${
            !mobileMenuShow && !isAnimating ? "-z-50" : "z-50"
          }`}
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
              afterEnter={() => setIsAnimating(false)}
              afterLeave={() => setIsAnimating(false)}
            >
              <Dialog.Panel
                onClick={() => {
                  setIsAnimating(true);
                  setMobileMenuShow(false);
                }}
                className={`absolute hover:cursor-pointer inset-0 bg-almost-black bg-opacity-75 transition-all`}
              />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 w-[65%] max-w-sm flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen">
                  <div className="h-full flex flex-col py-6 bg-almost-white shadow-xl overflow-y-scroll">
                    <div className="px-4">
                      <div className="flex items-center justify-end">
                        <div
                          className="hover:opacity-80 hover:cursor-pointer transition ease-in-out duration-300 flex justify-center items-center"
                          onClick={() => {
                            setIsAnimating(true);
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
                                <Disclosure.Button className="flex flex-row justify-start items-center text-medium-gray py-2 hover:text-almost-black transition duration-300">
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
      <div className={`${!mobileMenuShow && !isAnimating ? "z-50" : "-z-50"}`}>
        <header className={`h-20`}>
          <div className="flex h-full mx-4 flex-row justify-between items-center">
            <div className="hover:cursor-pointer">
              <Image src="/logo.svg" alt="logo" width={84} height={27} />
            </div>
            <button
              disabled={
                isAnimating
              } /* to prevent from breaking by clicking rapidly */
              /* Wait until animation is done before clicking again */
              onClick={() => {
                setIsAnimating(true);
                setMobileMenuShow(true);
              }}
            >
              <Image src="/icon-menu.svg" alt="logo" width={32} height={18} />
            </button>
          </div>
        </header>
        <main className="h-screen">
          <div>
            <Image
              src="/image-hero-mobile.png"
              alt="hero"
              width={750}
              height={564}
            />
          </div>
          <div className="mx-3 mt-8">
            <h1 className="text-[2.29rem] text-center font-bold text-almost-black">
              Make remote work
            </h1>
            <div className="my-2">
              <p className="font-medium text-md text-center text-medium-gray">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <div className="mt-7 flex justify-center items-center">
              <button
                type="button"
                className="transition ease-in-out duration-300 flex justify-center items-center w-36 h-12 hover:opacity-90 bg-almost-black text-almost-white font-fold p-5 rounded-2xl"
              >
                Learn More
              </button>
            </div>
            <div className="flex flex-row py-10 items-center justify-between">
              <div className="scale-75">
                <Image
                  src="/client-databiz.svg"
                  alt="client"
                  width={114}
                  height={20}
                />
              </div>
              <div className="scale-75">
                <Image
                  src="/client-audiophile.svg"
                  alt="client"
                  width={73}
                  height={36}
                />
              </div>
              <div className="scale-75">
                <Image
                  src="/client-meet.svg"
                  alt="client"
                  width={90}
                  height={20}
                />
              </div>
              <div className="scale-75">
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
    </div>
  );
};

export default Home;
