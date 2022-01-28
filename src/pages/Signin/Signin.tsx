import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import { StyledFirebaseAuth } from "react-firebaseui";
// import { withRouter } from "react-router";
// import QueryString from "query-string";
// import Axios from "axios";
// import AppConfig from "./../utils/AppConfig";
// import initialiseFirabase from "../../config/firebase";

class SignIn extends React.Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        // const parsedQueryString = QueryString.parse(this.props.location.search);
        console.log("%c⧭", "color: #007300", authResult);

        // this.createUser(authResult.user);

        // this.props.history.push(parsedQueryString.destination || "/");

        return false;
      },
    },
  };

  //   createUser = ({ uid, displayName, email, providerData }) => {
  //     const userReq = {
  //       id: uid,
  //       name: displayName,
  //       email: email,
  //       providerId: providerData[0].providerId,
  //     };

  //     Axios.post(`${AppConfig.apiBaseUrl}create-user`, userReq).then(
  //       (response) => {
  //         console.log("User Creaed...");
  //       }
  //     );
  //   };

  render() {
    return (
      <div>
        <p>Please sign-in</p>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default SignIn;
