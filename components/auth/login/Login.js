import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { firebase } from "../../../configs/firebase";
import Error from "../../alerts/Error";
import Spinner from "../signup/Spinner";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import Link from "next/link";
import Success from "../alerts/Success";
const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  // yap validation schema
  let validationSchema = yup.object().shape({
    // name: yup
    //   .string()
    //   .min(2, "name cannot be one char")
    //   .required("cannot be blank"),
    email: yup
      .string()
      .email("please enter a valid email")
      .required("email cannot be empty"),
    password: yup
      .string()
      .min(6, "password length must be greater than 6 characters")
      .required("please enter a password"),
  });
  const handleGoogleAuth = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        setSuccess(true);
        router.push("/profile/settings");
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        setErrorMsg(errorMessage);
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  };
  return (
    <div className="w-full mx-auto flex justify-center items-center px-3 relative">
      {errorMsg && <Error msg={errorMsg} setErrorMsg={setErrorMsg} />}
      {success && (
        <Success msg="Login success welcome" setSuccess={setSuccess} />
      )}
      <div className="w-full  sm:w-3/4 lg:w-1/4 border rounded-md px-6 pb-10 py-4 mt-24 lg:mt-32 bg-white  shadow-xl">
        <div className="my-6">
          <h1 className="text-2xl text-center text-blue-700 font-semibold">
            Login to continue
          </h1>
        </div>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 1000);
            firebase
              .auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .then(() => {
                setSuccess(true);
                setSubmitting(false);
              })
              .catch(function (error) {
                // Handle Errors here.
                setErrorMsg(error.message);
                setSubmitting(false);
                // ...
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
            <form onSubmit={handleSubmit}>
              <div>
                {/* <div className="mb-3">
                  <div className="text-green-700 text-sm my-1">Fullname</div>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className=" py-2 w-full bg-gray-100 border border-gray-300 px-2 outline-none focus:outline-none focus:border-green-400 "
                    autoComplete="off"
                  />
                  <div className="text-red-700 text-xs">
                    {errors.name && touched.email && errors.name}
                  </div>
                </div> */}
                <div className="mb-3">
                  <div className="text-green-700 text-sm my-1">Email</div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className=" py-2 w-full font-normal bg-gray-100 border border-gray-300 px-2 outline-none focus:outline-none focus:border-green-400 "
                    autoComplete="off"
                  />
                  <div className="text-red-700 text-xs">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-green-700 text-sm my-1">Password</div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className=" py-2 w-full font-thin bg-gray-100 border border-gray-300 px-2 outline-none focus:outline-none focus:border-green-400 mb-2"
                  />
                  <div className="text-red-700 text-xs">
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-white rounded bg-blue-600 hover:bg-blue-500 font-semibold"
              >
                {!isSubmitting && "submit"}
                {isSubmitting && <Spinner />}
              </button>
              <hr />
              <div className="mt-5">
                {/*social buttons */}
                <h3 className="my-3 text-sm text-gray-700 text-center">
                  ---- {!isSubmitting ? "continue with" : "loading please wait"}
                  -----
                </h3>
                {!isSubmitting && (
                  <GoogleButton
                    className="lg:ml-24"
                    onClick={handleGoogleAuth}
                  />
                )}
              </div>
              <div className="text-center pt-6">
                <Link href="/auth/signup">
                  <a className="text-blue-700 text-center text-xs">
                    Dont have an account ?
                  </a>
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

//   export default Basic;
//  Reducing boilerplate

export default Login;
