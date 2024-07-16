import React, { useState } from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import "./style.css";
import menuImage from "../../../static/img/menubutton.png"
import backgroundImage from "../../../static/img/rectangle-1.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Image, Alert } from "react-bootstrap"; 
import { signUp } from "aws-amplify/auth"

import { useState } from 'react';

import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

 import  awsmobile  from "../../aws-exports";

 Amplify.configure(awsmobile);



// Put any other imports below so that CSS from your
// components takes precedence over default styles.
 


const signInButtonClicked = () => {
  console.log('sign In button clicked');
}

export const Frame = () => {

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [emailId,setEmailId] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [gender,setGender] = useState('');

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

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  } 
}

  return (
    <div className="frame">
      <div className="main-content-frame">
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
              <div className="frame-2">
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
                        <Button className="sign-In-button" label="Sign In" size="medium" variant="primary" onClick={signInButtonClicked} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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


