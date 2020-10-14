import React, { useState } from "react";
import { Input, Textarea, Spinner } from "@chakra-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
// import { RichEditorExample } from "./Richtext";
import Linkmodal from "./modal/Linkmodal";
// import { useDisclosure } from "@chakra-ui/core";
import Editormodal from "./modal/Editor";
function Newtip({ user }) {
  const [fileInput, setFileInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const [links, setLinks] = useState({});
  const [code, setCode] = useState();
  // const { isOpen, onOpen, onClose } = useDisclosure();/

  //function to handle user input file
  const router = useRouter();
  const handleFileInput = (e) => {
    let file = e.target.files[0];
    setFileInput(file);
    previewFile(file);
  };
  //function to priview file
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      // alert(JSON.stringify(previewSource));
      setImage(reader.result);
    };
  };
  //when user clicks close button on the image preview
  const handleClearImage = () => {
    setPreviewSource(null);
    setImage(null);
    setFileInput(null);
  };
  //handling form submit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    setSubmiting(true);
    // const image = previewSource;
    const tip = { title, body, image, links, user, code };
    // alert(JSON.stringify(tip, null, 2));
    // setSubmiting(false);

    axios
      .post(`/api/tips`, { tip })
      .then((res) => {
        // console.log(res);
        // alert(JSON.stringify(tip, null, 2));
        router.push("/home");
        setSubmiting(false);
      })
      .catch((err) => {
        setSubmiting(false);
        alert(JSON.stringify(err, null, 2));
      });
  };
  return (
    <div className="py-12 px-3">
      <form onSubmit={handleSubmit} className="">
        <section className="w-full lg:w-1/3 mx-auto px-5 bg-gray-800 rounded-t py-5 ">
          <div>
            <div className="py-2">
              <h2 className="font-semibold text-2xl text-gray-400">
                Tip title
              </h2>
            </div>
            <div className="w-full">
              <Input
                placeholder="Title"
                size="lg"
                className="text-gray-800 font-semibold"
                backgroundColor="gray.800"
                color="gray.300"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
              />
            </div>
          </div>
        </section>
        {previewSource && (
          <div className="m-2 w-full lg:w-1/3 mx-auto relative  border-8 ">
            <img
              src={previewSource}
              alt=""
              className="w-full object-cover h-xl"
            />
            <span
              className="absolute top-0 right-0 h-8 w-8 m-4 hover:bg-gray-600 cursor-pointer rounded"
              onClick={handleClearImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                // fill="currentColor"
                className="text-gray-800"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        )}
        <section className="w-full lg:w-1/3 mx-auto px-5 bg-gray-800 rounded-b pb-3">
          <div>
            <div className="py-2">
              <h2 className="font-semibold text-2xl text-gray-400">
                Resources
              </h2>
              <div className="flex">
                <div className="px-4 py-2 rounded-lg relative hover:bg-gray-900 cursor-pointer">
                  <img
                    src="https://img.icons8.com/color/344/image.png"
                    className="h-12"
                    title="add image"
                  />
                  <input
                    type="file"
                    className="absolute top-0 left-0 h-full cursor-pointer w-16 opacity-0"
                    title="add an image"
                    onChange={handleFileInput}
                    // value={fileInput}
                  />
                  {/* <span className="text-sm text-gray-400">image</span> */}
                </div>
                <Linkmodal setLinks={setLinks} />
                <Editormodal setCode={setCode} />
              </div>
            </div>
            <h2 className="font-semibold text-2xl text-gray-400 my-2">
              Description
            </h2>
            <div className="w-full">
              <Textarea
                placeholder="Write tip here"
                className="text-gray-800 p-3"
                resize="vertical"
                size="xl"
                height="200px"
                rounded="7px"
                backgroundColor="gray.800"
                color="gray.300"
                value={body}
                onChange={({ target }) => setBody(target.value)}
              />
            </div>
            {/* <RichEditorExample
              editorState={"hello"}
              // onChange={setFieldValue}
              // onBlur={handleBlur}
            /> */}
          </div>
          <div className="py-4 mb-4 lg:pt-6">
            <button
              type="submit"
              disabled={submiting}
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold w-full px-4 py-4 rounded"
            >
              Post tip
              {submiting && <Spinner size="sm" className="mt-1 mx-1" />}
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Newtip;
