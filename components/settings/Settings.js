import React, { useState, useEffect, useContext } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import Error from "../alerts/Error";
// import { useRouter } from "next/router";
// import Spinner from "../auth/signup/Spinner";
import { useRouter } from "next/router";
import Success from "../auth/alerts/Success";
import { UserContext } from "../../context/UserContext";
import { UserInfo } from "../../context/UserInfo";

import Userbar from "./Userbar";
import axios from "axios";
import {
  Textarea,
  Spinner,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";
const Settings = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [image, setimage] = useState("");
  const [user, setUser] = useState();
  const [email, setEmail] = useState(null);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const { userInfo } = useContext(UserInfo);
  // const router = useRouter();
  //   console.log({ currentUser });
  // const [user, setUser] = useState(null);
  useEffect(() => {
    if (currentUser) setUser(currentUser);
    if (userInfo) router.push("/home");
  }, [currentUser]);
  // console.log({ user });
  const router = useRouter();
  // yap validation schema
  let validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "name cannot be one char")
      .required("cannot be blank"),
    username: yup
      .string()
      .min(2, "username cannot be one char")
      .required("cannot be blank"),
    // email: yup
    //   .string()
    //   .email("please enter a valid email")
    //   .required("email cannot be empty"),
    bio: yup.string().min(30, "min is 30 words"),
    // .required("cannot be blank"),
    // password: yup.string(),
    //   .min(6, "password length must be greater than 6 characters")
  });
  return (
    <div className="w-full h-screen mx-auto flex justify-center  px-3 relative">
      {errorMsg && <Error msg={errorMsg} setErrorMsg={setErrorMsg} />}
      {success && <Success msg="" setSuccess={setSuccess} />}
      <div className="w-full rounded-md overflow-hidden sm:w-full lg:w-1/2 bg-gray-900">
        {/* {!user && <Spinner />} */}
        {user && !userInfo ? (
          <Formik
            initialValues={{
              email: email,
              name: user?.displayName,
              username: "",
              bio: "",
              uid: user.uid,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   alert(email);
              //   setSubmitting(false);
              // }, 10);
              const profileData = {
                name: values.name,
                username: values.username,
                email: email,
                bio: values.bio,
                uid: user.uid,
                image: image,
              };
              alert(JSON.stringify(profileData, null, 2));
              axios
                .post(`/api/user`, { profileData })
                .then((res) => {
                  // console.log(res);
                  setSubmitting(false);
                  // alert(JSON.stringify(res.data, null, 2));
                  router.push("/home");
                })
                .catch((err) => {
                  setSubmitting(false);
                  // alert(JSON.stringify(err, null, 2));
                  setErrorMsg(err.message);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="py-5">
                <Userbar
                  setimage={setimage}
                  values={values}
                  setEmail={setEmail}
                />
                <div className="w-full lg:w-3/4 mx-auto bg-white px-6 sm:px-12 py-10  ">
                  <div className="mb-3">
                    {/* <FormControl>
                      <FormLabel htmlFor="email">Email address</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        aria-describedby="email-helper-text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <FormHelperText id="email-helper-text">
                        We'll never share your email.
                      </FormHelperText>
                      <div className="text-red-700 text-xs">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </FormControl> */}
                    {/* </Field> */}
                  </div>
                  <div className="mb-3">
                    {/* <div className="text-white text-sm ">Username</div>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    className=" py-3 w-full bg-gray-700 text-white rounded px-2 outline-none focus:outline-none focus:border-green-400 "
                    autoComplete="off"
                  />
                  <div className="text-red-700 text-xs">
                    {errors.username && touched.username && errors.username}
                  </div> */}
                    <FormControl isRequired>
                      <FormLabel htmlFor="fname">Full name</FormLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Full name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <FormHelperText id="name-helper-text">
                        Your full name
                      </FormHelperText>
                      <div className="text-red-700 text-xs">
                        {errors.name && touched.name && errors.name}
                      </div>
                    </FormControl>
                  </div>
                  <div className="mb-3">
                    <FormControl isRequired>
                      <FormLabel htmlFor="fname">Username</FormLabel>
                      <Input
                        id="username"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                      <FormHelperText id="name-helper-text">
                        choose a username
                      </FormHelperText>
                      <div className="text-red-700 text-xs">
                        {errors.username && touched.username && errors.username}
                      </div>
                    </FormControl>
                  </div>
                  <div className="mb-3">
                    <FormControl isRequired>
                      <FormLabel htmlFor="fname">Bio</FormLabel>
                      <Textarea
                        id="bio"
                        name="bio"
                        placeholder="Tell us something about yourself"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bio}
                      />
                      <FormHelperText id="name-helper-text">
                        something nice about you
                      </FormHelperText>
                      <div className="text-red-700 text-xs">
                        {errors.bio && touched.bio && errors.bio}
                      </div>
                    </FormControl>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 text-white rounded bg-blue-600 hover:bg-blue-500 font-semibold"
                  >
                    {!isSubmitting && "submit"}
                    {isSubmitting && <Spinner />}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

//   export default Basic;
//  Reducing boilerplate

export default Settings;
