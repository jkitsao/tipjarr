import React from "react";
import Image from "next/image";
import Linkify from "react-linkify";
import { useRouter } from "next/router";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/core";
import Tip from "../../../currentuser/home/main/tip/Tip";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
function Tip_card({ tip }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  //date
  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", {
    relativeTime: {
      future: " %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
  const date = dayjs(tip.createdAt); //.format("DD/MM/YYYY");
  const mydate = dayjs();
  const c = mydate.from(date);
  const pic =
    tip?.user?.profile_url?.secure_url ||
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80";
  return (
    <div className="w-full sm:w-3/4 lg:w-3/5 mx-auto">
      <div className="p-2">
        <div className="bg-white  p-4 rounded-lg shadow border-1 hover:border-gray-400 ">
          <div className="flex">
            <div>
              <div
                className="w-8 h-8 bg-cover bg-center rounded-full mr-3 shadow-inner"
                style={{ backgroundImage: `url(${pic})` }}
              ></div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">{tip?.user?.username}</p>
              <div className="flex items-center text-xs text-gray-400">
                <p className="text-gray-700">{c}</p>
                <p className="px-1">•</p>
                <p>
                  {tip?.link ? (
                    <div className="px-3 py-2 text-blue-500 rounded-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block mx-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <a
                        href={`${tip?.link?.source}`}
                        target="_blank"
                        className=" underline text-xs inline-block "
                      >
                        {tip?.link?.title.slice(0, 18)}
                        {tip?.link?.title.length > 18 && "..."}
                      </a>
                    </div>
                  ) : null}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3
              className="text-gray-700 hover:text-blue-700 lg:w-4/5 cursor-pointer lg:mr-6 font-semibold text-lg my-2"
              onClick={onOpen}
            >
              {tip.title.slice(0, 170)}
              {tip.title.length > 170 && "..."}
            </h3>

            <div className="whitespace-pre-wrap lg:pr-5">
              <Linkify>
                <p className="text-sm  text-green-900 inline-block  lg:my-2">
                  {tip.body.slice(0, 250)}
                  {tip.body.length > 250 && (
                    <span
                      className="text-sm cursor-pointer text-blue-600 mx-1"
                      onClick={onOpen}
                    >
                      read more {">"}
                    </span>
                  )}
                </p>
              </Linkify>
            </div>
          </div>
          {tip?.imageData?.url ? (
            <div className="p-1 overflow-hidden">
              {/* <motion.img
            src={tip.imageData.secure_url}
            className="object-cover h-lg w-full lg:mx-2  rounded "
            whileHover={{ scale: 1.1 }}
          /> */}
              <Image
                src={tip.imageData.secure_url}
                alt="Picture of the author"
                unsized={true}
                quality="100"
                loading="eager"
                className="object-cover h-lg w-full lg:mx-2  rounded "
                whileHover={{ scale: 1.1 }}
              />
            </div>
          ) : (
            <div></div>
          )}
          <div className="mt-6 flex">
            {/* <button className="flex items-center hover:opacity-75 mr-4">
              <i className="mr-2">
                <svg
                  className="fill-current text-blue-300 w-6 h-6"
                  height="512"
                  viewBox="0 0 16 16"
                  width="512"
                >
                  <path d="M0 6v8a1 1 0 001 1h3V5H1a1 1 0 00-1 1zM14.153 6H11.2a.491.491 0 01-.43-.247.492.492 0 01-.007-.496l1.041-1.875c.229-.411.252-.894.065-1.325a1.488 1.488 0 00-1.013-.858l-.734-.184a.499.499 0 00-.493.15l-3.987 4.43A2.499 2.499 0 005 7.267V12.5C5 13.878 6.122 15 7.5 15h4.974a2.506 2.506 0 002.411-1.84l1.068-4.898A1.849 1.849 0 0014.153 6z" />
                </svg>
              </i>
              <p className="mt-1 text-blue-400">Like</p>
            </button> */}
            <button className="flex items-center hover:opacity-75">
              <i className="mr-2">
                {/* <svg
                  className="fill-current text-blue-300 w-6 h-6"
                  height="512"
                  viewBox="0 0 511.072 511.072"
                  width="512"
                >
                  <path d="M74.39 480.536H38.177l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425C-2.04 277.611-3.811 238.37 6.932 199.776c12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z" />
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className=" text-gray-700 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </i>
              <p className="mt-1 font-semibold text-gray-700">
                {tip.upvotes.length}{" "}
                {tip.upvotes.length > 1 ? "upvotes" : "upvote"}
              </p>
            </button>
          </div>
          {/* <div className="mt-6 border-gray-100 border-t pt-4 flex justify-between">
            <input
              placeholder="Add comment"
              className="placeholder-gray-300 text-gray-700 focus:outline-none"
              type="text"
            
            />
              <div className="flex">
                <button className="mr-2 hover:opacity-75">
                  <i>
                    <svg
                      className="fill-current text-gray-300 w-6 h-6"
                      height="512pt"
                      viewBox="-96 0 512 512"
                      width="512pt"
                    >
                      <path d="M160 512C71.766 512 0 440.234 0 352V128c0-11.797 9.559-21.332 21.332-21.332 11.777 0 21.336 9.535 21.336 21.332v224c0 64.684 52.629 117.332 117.332 117.332S277.332 416.684 277.332 352V117.332c0-41.172-33.492-74.664-74.664-74.664-41.176 0-74.668 33.492-74.668 74.664v213.336c0 17.64 14.355 32 32 32s32-14.36 32-32V128c0-11.797 9.559-21.332 21.332-21.332 11.777 0 21.336 9.535 21.336 21.332v202.668c0 41.172-33.496 74.664-74.668 74.664s-74.668-33.492-74.668-74.664V117.332C85.332 52.652 137.961 0 202.668 0 267.371 0 320 52.652 320 117.332V352c0 88.234-71.766 160-160 160zm0 0" />
                    </svg>
                  </i>
                </button>
                <button className="hover:opacity-75">
                  <i>
                    <svg
                      className="fill-current text-gray-300 w-6 h-6"
                      viewBox="0 0 477.867 477.867"
                    >
                      <path d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm0 443.733c-113.108 0-204.8-91.692-204.8-204.8s91.692-204.8 204.8-204.8 204.8 91.692 204.8 204.8c-.122 113.058-91.742 204.678-204.8 204.8z" />
                      <circle cx="153.6" cy="204.8" r="34.133" />
                      <circle cx="324.267" cy="204.8" r="34.133" />
                      <path d="M304.287 296.61c-5.637-7.554-16.331-9.108-23.885-3.47a17.07 17.07 0 00-.953.766c-24.135 17.628-56.898 17.628-81.033 0-7.131-6.164-17.909-5.379-24.072 1.752-6.164 7.131-5.379 17.909 1.752 24.072.308.267.626.522.953.766 36.531 27.922 87.236 27.922 123.767 0 7.555-5.638 9.109-16.332 3.471-23.886z" />
                    </svg>
                  </i>
                </button>
              </div>
            </div> */}
        </div>
      </div>
      <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton
            color="red.700"
            backgroundColor="gray.300"
            marginTop="2"
          />
          <div style={{ minHeight: "100vh" }}>
            {/* <Tip tip={tip} /> */}
            <Tip tip={tip} />
          </div>
          {/* <Tip /> */}
          {/* </ModalBody> */}

          {/* <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button> 
             <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Tip_card;
