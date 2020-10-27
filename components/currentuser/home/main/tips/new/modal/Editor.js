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
  Select,
  useToast,
} from "@chakra-ui/core";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
function Editormodal({ setCode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [codeValue, setCodeValue] = useState("");
  const [editorMode, setEditorMode] = useState("javascript");
  const toast = useToast();
  // const handleLinkSubmit = () => {
  // let links = {
  //   title: linkTitle,
  //   source: linkBody,
  // };
  // if (!linkBody || !linkTitle) return;
  // setLinks({ title: linkTitle, source: linkBody });
  // // alert(JSON.stringify(links));
  // onClose();
  // };
  function onChange(newValue) {
    // console.log("change", newValue);
    // alert(newValue);
    setCodeValue(newValue);
  }
  function handleCodeSubmit(e) {
    e.preventDefault();
    let code = {
      value: codeValue,
      mode: editorMode,
    };
    setCode(code);
    toast({
      position: "bottom",
      title: "code success.",
      description: "code submitted succesfully",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
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
            <div className="px-2 my-2 w-3/4  sm:w-1/2  lg:w-1/4">
              <Select
                placeholder="Choose Language"
                onChange={(e) => setEditorMode(e.target.value)}
              >
                <option value="javascript">javascript</option>
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="typescript">typescript</option>
                <option value="csharp">csharp</option>
                <option value="markdown">markdown</option>
                <option value="json">json</option>
                <option value="python">python</option>
                <option value="java">java</option>
                <option value="ruby">Ruby</option>
                <option value="golang">golang</option>
              </Select>
            </div>
            <AceEditor
              mode={editorMode}
              theme="dracula"
              onChange={onChange}
              value={codeValue}
              height={"70vh"}
              //   width="500px"
              width={"95%"}
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
