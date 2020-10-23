import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/core";
function Linkmodal({ setLinks }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [linkTitle, setLinkTitle] = useState("");
  const [linkBody, setLinkBody] = useState("");
  const toast = useToast();

  const handleLinkSubmit = () => {
    // let links = {
    //   title: linkTitle,
    //   source: linkBody,
    // };
    if (!linkBody || !linkTitle) return;
    setLinks({ title: linkTitle, source: linkBody });
    // alert(JSON.stringify(links));
    toast({
      position: "top",
      title: "success.",
      description: `link to ${linkTitle} submited`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <div className="px-4 py-2 rounded-lg hover:bg-gray-900 cursor-pointer mx-2">
        <img
          src="https://img.icons8.com/color/344/dynamic-links.png"
          className="h-12 "
          title="add link"
          onClick={onOpen}
        />
        {/* <span>image</span> */}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody className="">
            <h2 className="text-lg font-semibold text-blue-900 mt-3">
              Website name
            </h2>

            <div>
              <input
                type="text"
                className="w-full py-2  px-2  border-2 border-gray-500 focus:outline-none focus:border-green-600 text-sm text-gray-700 rounded-md"
                placeholder="tipjarr.app"
                value={linkTitle}
                onChange={(e) => setLinkTitle(e.target.value)}
              />
            </div>
            {/* <ModalHeader>Link source</ModalHeader> */}
            <h2 className="text-lg font-semibold text-blue-900">Website url</h2>
            <div>
              <input
                type="text"
                className="w-full py-2  px-2 border-2 border-gray-500 focus:outline-none focus:border-green-600 text-sm text-gray-700 rounded-md"
                placeholder="http://www.tipjarr.app/foobar"
                value={linkBody}
                onChange={(e) => setLinkBody(e.target.value)}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variantColor="green" onClick={handleLinkSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Linkmodal;
