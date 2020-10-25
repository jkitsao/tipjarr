import React from "react";
import Card_info from "./components/Card_info";
import Card_footer from "./components/Card_footer";
import Link from "next/link";
import Linkify from "react-linkify";
import { motion } from "framer-motion";
import Tip from "../tip/Tip";
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
function Card({ tip }) {
  const { title } = tip;
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const slug = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="w-full select-none lg:w-full overflow-hidden border hover:border-gray-500 shadow-sm bg-white mx-auto my-2 cursor-pointer rounded-md sm:pl-4">
      <Card_info tip={tip} />
      <div className="p-2">
        {/* <Link href={`/tips/${tip._id}`}>
          <a> */}
        <h1
          className="text-lg text-gray-900 sm:max-w-xl sm:whitespace-pre-wrap hover:text-gray-800 font-semibold "
          onClick={onOpen}
        >
          {/* <img
              src="https://img.icons8.com/color/344/idea.png"
              alt=""
              className="h-6 w-6 hidden sm:inline-block ml-2 mx-1"
            /> */}
          <span className="text-lg sm:text-xl hover:text-blue-800 inline-block px-3">
            {tip.title}
          </span>
        </h1>
        {/* </a>
        </Link> */}
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
              {tip?.link?.title}
            </a>
          </div>
        ) : null}
        <div className="whitespace-pre-wrap">
          <Linkify>
            <p className="text-sm  text-green-900 inline-block lg:my-2 px-3">
              {tip.body.slice(0, 250)}
              {tip.body.length > 250 && "..."}
            </p>
          </Linkify>
        </div>
      </div>

      {tip?.imageData?.url ? (
        <div className="p-1 overflow-hidden">
          <motion.img
            src={tip.imageData.secure_url}
            className="object-cover h-lg w-full lg:mx-2  rounded "
            whileHover={{ scale: 1.1 }}
          />
        </div>
      ) : (
        <div></div>
      )}

      <hr />
      <Card_footer />
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal preserveScrollBarGap isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton color="red.700" backgroundColor="grey" />
          <div style={{ minHeight: "100vh" }}>
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

export default Card;
