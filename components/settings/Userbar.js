import React, { useState, useEffect, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase } from "../../configs/firebase";
import { UserContext } from "../../context/UserContext";
import { Spinner } from "@chakra-ui/core";
function Userbar({ setimage, values, setEmail }) {
  // firebase.initializeApp();
  // const [user, loading, error] = useAuthState(firebase.auth.Auth());
  const [user, setUser] = useState();
  const [currentUser] = useContext(UserContext);
  const [fileInput, setFileInput] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(
    "https://cdn4.vectorstock.com/i/1000x1000/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg"
  );
  // console.log({ user, loading, error });
  // const router = useRouter();
  //function to handle file input
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
      setimage(reader.result);
    };
  };
  console.log({ "the user": currentUser });
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
      setEmail(currentUser.email);
    }
  }, [currentUser]);
  return (
    <div className="w-full sm:w-3/4 mx-auto flex justify-center bg-white py-4">
      <div className="text-center">
        {user ? (
          <div>
            <img
              src={previewSource}
              alt=""
              className="w-32 h-32 object-cover border-8 border-gray-700 mx-auto rounded-full"
            />
            <div className="w-full mx-auto my-2 text-white bg-green-700 rounded">
              <div className="relative shadow-lg p-1 py-2">
                <input
                  type="file"
                  className="absolute opacity-0 cursor-pointer w-3/4 "
                  onChange={handleFileInput}
                  title="add an image"
                  // value={values.previewSource}
                />
                Add profile
              </div>
            </div>
            <div className="text-gray-700">
              <span className="my-1 mx-3 text-blue-700 block font-semibold">
                {user && user.displayName}
              </span>
              <span className="my-1 mx-3 block text-blue-700 font-semibold">
                {user.email}
              </span>
            </div>
          </div>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </div>
    </div>
  );
}

export default Userbar;
