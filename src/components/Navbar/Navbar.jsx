import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Box, Button, border, useDisclosure, useToast,Avatar } from "@chakra-ui/react";
import dq from "../../assets/Logo Dq.png"


const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Doctors", href: "/doctors", current: false },
  { name: "Hospitals", href: "/hospitals", current: false },

  { name: "About", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [current,setCurrent] = useState("")
  const toast = useToast();

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Attach an event listener to the window resize event
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("dqAuthTo");
    toast({
      title: "Logout Successfully",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <main>
      <Disclosure as="nav" className="bg-purpul1">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-11 w-auto"
                      src={dq}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                        onClick={()=>setCurrent(item.name)}
                          style={{color:current===item.name?"#FA6B6C":"black"}}
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 "
                              : "text-gray-300 hover:bg-gray-700 hover:text-purpul4",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>

                        {windowWidth < 610 ? (
                          <Avatar
                            className="h-4 w-4 rounded-full"
                            src=""
                            alt=""
                          />
                        ) : (
                          <a style={{ fontSize: "20px" }}>Login / Sign up</a>
                        )}
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={classNames(
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              to="/login"
                            >
                              <Box mb={"5px"} fontSize={"18px"}>
                                Patient
                              </Box>
                              <Box
                                display={"flex"}
                                gap={"6px"}
                                justifyContent={"space-evenly"}
                              >
                                <Link to={"/login"}>
                                  <Box color={"red"} fontSize={"17px"}>
                                    Login
                                  </Box>
                                </Link>

                                <Link to={"/signup"}>
                                  <Box color={"teal"} fontSize={"17px"}>
                                    Sign up
                                  </Box>
                                </Link>
                              </Box>
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/user-dashboard"
                              className={classNames(
                                active
                                  ? "bg-purpul3  text-white rounded-full"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Patient
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/admin"
                              className={classNames(
                                active
                                  ? "bg-purpul3  text-white rounded-full"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Admin Login
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/doctor-dashboard"
                              className={classNames(
                                active
                                  ? "bg-purpul3  text-white rounded-full"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Doctor Dashboard
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          <Box m={"auto"} ml={"10px"}>
                            {localStorage.getItem("dqAuthTo") ? (
                              <Button
                                onClick={handleLogout}
                                fontSize={"20px"}
                                variant="link"
                                colorScheme="red"
                              >
                                Logout
                              </Button>
                            ) : (
                              ""
                            )}
                          </Box>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    style={{color:current===item.name?"#FA6B6C":"black"}}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <div style={{ height: "20px", backgroundColor: "#fea2e2" }}></div> */}
    </main>
  );
}

