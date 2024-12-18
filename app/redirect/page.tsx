"use client";
import { useEffect, useState } from "react";

const OAuth2RedirectHandler: React.FC = () => {

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const error = queryParams.get("error");

    if (token) {
      localStorage.setItem("idToken", token);
      setErrorMessage("");
    } else if (error) {
      console.error(`Error during OAuth2 authentication: ${error}`);
      setErrorMessage(error);
    } else {
      console.log("No token no error");
    }
  }, []);
  return (<div>{errorMessage && <div className="mt-4 text-red-800">{errorMessage}</div>}</div>);
};

export default OAuth2RedirectHandler;
