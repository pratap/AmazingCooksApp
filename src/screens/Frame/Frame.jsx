import React,
 { useState } from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import "./style.css";
import menuImage from "../../../static/img/menubutton.png"
import backgroundImage from "../../../static/img/rectangle-1.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Image, Alert } from "react-bootstrap"; 
import { useState, useEffect } from 'react';

import { Amplify } from "aws-amplify";
import { signUp, confirmSignUp, signIn, signOut, getCurrentUser } from "aws-amplify/auth"
import {  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

 import  awsmobile  from "../../aws-exports";

 Amplify.configure(awsmobile);



// Put any other imports below so that CSS from your
// components takes precedence over default styles.
 

export const Frame = () => {

  const [isOTPScreen, setIsOTPScreen] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const [isSignedUpScreen, setIsSignedUpScreen] = useState(true);
  const [isAutoSignInSuccess, setIsAutoSignInSuccess] = useState(false);
  const [user, setUser] = useState(null); 

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [emailId,setEmailId] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [gender,setGender] = useState('');
  const [emailVerificationCode,setEmailVerificationCode] = useState('');

  
  // var isLoginScreen = false;
  // var isSignedUpScreen = true;

  const signInButtonClicked = () => {
    console.log('sign In button clicked');
    
  }
  
  const showLoginScreen = (e) => {
    console.log('show login screen');
    const value = e;
    setIsLoginScreen(value);
    setIsSignedUpScreen(!value);
    //  window.location.reload();
  }
  
  const showSignUpScreen = (e) => {
    console.log('show signup screen');
    const value = e;
    setIsSignedUpScreen(value);
    setIsLoginScreen(!value);
    //  window.location.reload();
  }

  const signUpButtonClicked = () => {
    console.log(name, password, emailId, phoneNumber, gender);
    handleSignUp({
      name: name,
      password: password,
      email: emailId,
      phone_number: phoneNumber,
      gender: gender
    });
 };

 const confirmButtonClicked = () => {
  console.log(emailId, emailVerificationCode);
    handlEmailVerificationClicked(
      {
        email: emailId,
        code: emailVerificationCode
      }
    );
 };

 async function handlEmailVerificationClicked({email, code}) {
  console.log(email, code);
    try {

      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: email,
        confirmationCode: emailVerificationCode
      });

      signInUser()
    }
    catch (error) {
      alert(error.message);
    } 
   
 };

 
 const signInUser = () => {
    
    handleSignInUser({
      username: name,
      password: password
    })
 }

 const signOutUser = () => {
    handleSignOutUser({})
 }

 async function handleSignOutUser() {
  try {
     await signOut();
    console.log('Successfully signed out');
    setIsAutoSignInSuccess(false);
    showLoginScreen(true);
    setUser('');
    setPassword('');
    
  } catch (error) {
    console.log('error signing out: ', error);
  }
  
 }

 async function handleSignInUser(username, password) {
  
    try {
      // Auto sign-in after confirmation
      
     
      if (isAutoSignInSuccess) {
        const { signInDetails } = await getCurrentUser();
        console.log("sign-in details", signInDetails.loginId);
        setUser( signInDetails.loginId);
      }
      else {
        const { isSignedIn } = await signIn(username, password); // Replace 'password' with user's password
        setIsAutoSignInSuccess(true);
      }
    
      
    } catch (error) {
      console.log(error);
      alert(error.message);
      if (error.name === 'UserAlreadyAuthenticatedException') {
        setIsAutoSignInSuccess(true);
        const { signInDetails } = await getCurrentUser();
        console.log("sign-in details", signInDetails.loginId);
        setUser( signInDetails.loginId);
      }
      
    }
  
 }

 async function handleSignUp({ name, password, email, phone_number, gender }) {
  console.log(name, password, email, phone_number, gender);
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: name,
      password,
      options: {
        userAttributes: {
          name: name,
          email: email,
          phone_number: phoneNumber,// E.164 number convention
          gender: gender
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    setIsOTPScreen(true);
    setIsSignUpComplete(true);
    setIsSignedUpScreen(false);
    
  } catch (error) {
    console.log('error signing up:', error);
    alert(error.message);
  } 
}


  return (
    <div className="frame">
     { !isAutoSignInSuccess &&  <div className="main-content-frame">
        <div className="navigation-frame">
          <div className="navigation-content">
            <div className="navigation-child">
              <div className="text-wrapper-2">Amazing Cooks</div>
              <div className="navigation-buttons">
                <Button
                  className="button-instance"
                  divClassName="design-component-instance-node"
                  label="Services"
                  size="medium"
                  variant="primary"
                />
                <Button
                  className="button-instance"
                  divClassName="design-component-instance-node"
                  label="Cooks Near Me"
                  size="medium"
                  variant="primary"
                />
                <Button
                  className="button-instance"
                  divClassName="design-component-instance-node"
                  label="Join Us"
                  size="medium"
                  variant="primary"
                />
                <Button
                  className="menu-button"
                  divClassName="menu-button-instance"
                  label=""
                  size="medium"
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-frame" >
          <div className="page-child-content">
            <div className="welcome-frame">
              <div className="text-wrapper-3">Welcome to Amazing Cooks</div>
              <p className="at-amazing-cooks-we">
                At Amazing Cooks, we believe in the joy of home-cooked meals shared in the comfort of your own space. Whether you're a passionate cook looking to share your culinary skills or someone craving a delicious, personalized dining experience, our platform connects you with talented cooks who come directly to your home.
              </p>
              <div className="text-wrapper-4">How it works</div>
              <p className="register-and">
                <span className="span">Register and Showcase Your Talent: </span>
                <span className="text-wrapper-5">&nbsp;</span>
                <span className="text-wrapper-6">
                  Signing up is easy! If you love cooking and want to earn money doing what you enjoy, simply register as a cook on our platform. Create a compelling profile showcasing your specialties, experience, and availability.
                </span>
                <span>
                  <br />
                  <br />
                  Receive Booking Requests: {" "}
                </span>
                <span className="text-wrapper-6">
                  Customers will browse through cook profiles and send booking requests based on their preferences. You'll receive notifications whenever someone is interested in booking your services.
                  <br />
                  <br />
                </span>
                <span className="span">Prepare and Cook: </span>
                <span className="text-wrapper-6">
                  Once you accept a booking, it's time to shine! Gather fresh ingredients, bring your tools, and head to the customer's home at the scheduled time. Create a delightful dining experience right in their kitchen.
                  <br />
                  <br />
                </span>
                <span className="span">Earn and Grow: </span>
                <span className="text-wrapper-6">
                  Get paid for your culinary talents. The more bookings you fulfill, the more you earn. Receive ratings and reviews from customers to build your reputation and attract more bookings in the future.
                  <br />
                  <br />
                </span>
              </p>
           </div>
            <div className="create-account-frame">
              <div className="overlap-group">
              <div className="overlap">
              { isSignedUpScreen && !isSignUpComplete && <div className="frame-2">
                    <div className="text-wrapper-7">Create Account</div>
                    <InputField
                      className="input-field-instance"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="User Name"
                      state="default"
                      value="Eg: John smith"
                      valueType="placeholder"
                      onChange={e => setName(e)}
                    />
                    <InputField
                      className="input-field-4"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="Password"
                      state="default"
                      value="Enter the password"
                      valueType="placeholder"
                      onChange={e => setPassword(e)}
                    />
                    <InputField
                      className="input-field-4"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="Phone Number"
                      state="default"
                      value="+912356-XXXX-XX"
                      valueType="placeholder"
                      onChange={e => setPhoneNumber(e)}
                    />
                    <InputField
                      className="input-field-4"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="Email"
                      state="default"
                      value="Jsmith@gmail.com"
                      valueType="placeholder"
                      onChange={e => setEmailId(e)}
                    />
                    <InputField
                      className="input-field-5"
                      divClassName="input-field-2"
                      inputClassName="input-field-6"
                      label="Gender"
                      state="default"
                      value="Enter ypur gender"
                      valueType="placeholder"
                      onChange={e => setGender(e)}
                    />

                    <div className="frame-3">
                      <Button className="sign-up-button" label="Sign Up" size="medium" variant="primary" onClick={signUpButtonClicked}/>
                      <div className="frame-5">
                        <div className="text-wrapper-8">Already have an account?</div>
                        <Button className="sign-In-button" label="Sign In" size="medium" variant="primary" onClick={showLoginScreen} />
                      </div>
                    </div>
                  </div>}
                  {isOTPScreen && isSignUpComplete  && <div className="frame-2">
                    <div className="text-wrapper-7">Verify Email</div>
                    <InputField
                      className="input-field-instance"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="Confirmation Code"
                      state="default"
                      value="Enter your code"
                      valueType="placeholder"
                      onChange={e => setEmailVerificationCode(e)}
                    />
                    <div className="frame-3">
                      <Button className="sign-up-button" label="Confirm" size="medium" variant="primary" onClick={confirmButtonClicked}/>
                      <Button className="sign-up-button" label="Resend Code" size="medium" variant="primary" onClick={signUpButtonClicked}/>
                    </div>
                  </div>}
                  { isLoginScreen  && <div className="frame-2">
                    <div className="text-wrapper-7">Sign In</div>
                    <InputField
                      className="input-field-instance"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="User Name"
                      state="default"
                      value="Enter your Email id"
                      valueType="placeholder"
                      onChange={e => setName(e)}
                    />
                     <InputField
                      className="input-field-4"
                      divClassName="input-field-2"
                      inputClassName="input-field-3"
                      label="Password"
                      state="default"
                      value="Enter the password"
                      valueType="placeholder"
                      onChange={e => setPassword(e)}
                    />
                    <div className="frame-3">
                      <Button className="sign-up-button" label="Login" size="medium" variant="primary" onClick={e => signInUser()}/>  
                      <Button className="sign-up-button" label="Sign Up" size="medium" variant="primary" onClick={e => showSignUpScreen(true)}/>                     
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     }
     Welcome {user} <Button className="sign-up-button" label="Signout" size="medium" variant="primary" onClick={e => signOutUser()}/>
    </div>
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <main>
    //       <h1>Hello {user.emailId}</h1>
    //       <button onClick={signOut}>Sign out</button>
    //     </main>
    //   )}
    // </Authenticator>
  );
};


