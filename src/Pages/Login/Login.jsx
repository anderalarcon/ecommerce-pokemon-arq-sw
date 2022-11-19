import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import DefaultForm from "../../Components/Form/DefaultForm/DefaultForm";
import { useMsal } from "@azure/msal-react";
const Login = () => {
  // const { instance } = useMsal();
  // const [username, setUsername] = useState();
  // useEffect(() => {
  //   const currentAccount = instance.getActiveAccount();
  //   if (currentAccount) {
  //     setUsername(currentAccount.username);
  //   }
  // }, [instance]);
  return (
    <div>
      <Header />
      <DefaultForm />
      {/* <h1>Bienvenido{username}</h1> */}
    </div>
  );
};

export default Login;
