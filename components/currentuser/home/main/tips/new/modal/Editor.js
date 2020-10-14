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
} from "@chakra-ui/core";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
function Editormodal({ setCode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [codeValue, setCodeValue] = useState("");
  const handleLinkSubmit = () => {
    // let links = {
    //   title: linkTitle,
    //   source: linkBody,
    // };
    // if (!linkBody || !linkTitle) return;
    // setLinks({ title: linkTitle, source: linkBody });
    // // alert(JSON.stringify(links));
    // onClose();
  };
  function onChange(newValue) {
    // console.log("change", newValue);
    // alert(newValue);
    setCodeValue(newValue);
  }
  function handleCodeSubmit(e) {
    e.preventDefault();
    setCode(codeValue);
  }
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <div className="px-4 py-2 rounded-lg hover:bg-gray-900 cursor-pointer">
        <img
          src="https://img.icons8.com/color/452/code.png"
          className="h-12 "
          title="add a code snippet"
          onClick={onOpen}
        />
        {/* <span>image</span> */}
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className="">
            <AceEditor
              mode="javascript"
              theme="dracula"
              onChange={onChange}
              value={codeValue}
              height={"65vh"}
              //   width="500px"
              width={"90%"}
              name="editor"
              fontSize={18}
              highlightActiveLine={true}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variantColor="green" onClick={handleCodeSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Editormodal;
