import React from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import "./style.css";
import menuImage from "../../../static/img/menubutton.png"
import backgroundImage from "../../../static/img/rectangle-1.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Image } from "react-bootstrap"; 
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const handleInputChange = (value) => {
  // Custom onChange logic
  console.log('Input value changed:', value);
  setInputFieldValue(value);
};

// export const Frame = () => {
//   return (
//     <div className="frame">  
//     <div className="rectangle" alt="Rectangle" />
//        <div className="div">
//         <div className="text-wrapper-2">Amazing Cooks</div>
//         <Button
//           className="services-button"
//           divClassName="button-instance"
//           label="Services"
//           size="medium"
//           variant="primary"
//         />
//         <Button
//           className="cooks-near-me-button"
//           divClassName="design-component-instance-node"
//           label="Cooks Near Me"
//           size="medium"
//           variant="primary"
//         />
//         <Button
//           className="join-us-button"
//           divClassName="design-component-instance-node"
//           label="Join Us"
//           size="medium"
//           variant="primary"
//         />
//         <div className="menu-button">
//           <img className="img" alt="Button" src="button.png" />
//         </div>
//       </div>
//       <div className="overlap-group-wrapper">
//         <div className="overlap-group">
//           <div className="overlap">
//             <div className="text-wrapper-3">Create Account</div>
//             <InputField
//               className="input-field-instance"
//               divClassName="input-field-2"
//               inputClassName="input-field-3"
//               label="User Name"
//               state="default"
//               value="Eg: John smith"
//               valueType="placeholder"
//               onChange={handleInputChange}
//             />
//           </div>
//           <InputField
//             className="input-field-4"
//             divClassName="input-field-2"
//             inputClassName="input-field-3"
//             label="Password"
//             state="default"
//             value="Enter the password"
//             valueType="placeholder"
//           />
//           <InputField
//             className="input-field-5"
//             divClassName="input-field-2"
//             inputClassName="input-field-3"
//             label="Address"
//             state="default"
//             value="123, church street, Bangalore"
//             valueType="placeholder"
//           />
//           <InputField
//             className="input-field-6"
//             divClassName="input-field-2"
//             inputClassName="input-field-3"
//             label="Birthdate"
//             state="default"
//             value="12-05-1992"
//             valueType="placeholder"
//           />
//           <InputField
//             className="input-field-7"
//             divClassName="input-field-2"
//             inputClassName="input-field-3"
//             label="John Smith"
//             state="default"
//             value="Value"
//             valueType="placeholder"
//           />
//           <InputField
//             className="input-field-8"
//             divClassName="input-field-2"
//             inputClassName="input-field-3"
//             label="Family Name"
//             state="default"
//             value="Nikki"
//             valueType="placeholder"
//           />
//           <InputField
//             className="input-field-9"
//             divClassName="input-field-2"
//             inputClassName="input-field-3"
//             label="Email"
//             state="default"
//             value="Jsmith@gmail.com"
//             valueType="placeholder"
//           />
//           <InputField
//             className="input-field-10"
//             divClassName="input-field-2"
//             inputClassName="input-field-11"
//             label="Profile Pic"
//             state="default"
//             value="Enter the Ps"
//             valueType="placeholder"
//           />
//           <Button className="sign-up-button" label="Sign Up" size="medium" variant="primary" />
//           <Button className="upload-photo-button" label="Upload photo" size="medium" variant="primary" />
//           <Button className="sign-In-button" label="Sign In" size="medium" variant="primary" />
//           <div className="text-wrapper-4">Already have an account?</div>
//         </div>
//       </div>  
//       <div className="div-4">
//          <div className="text-wrapper-5">Welcome to Amazing Cooks</div>
//          <p className="at-amazing-cooks-we">
//          At Amazing Cooks, we believe in the joy of home-cooked meals shared in the comfort of your own space. Whether you're a passionate cook looking to share your culinary skills or someone craving a delicious, personalized dining experience, our platform connects you with talented cooks who come directly to your home.
//          </p>
//          <div className="text-wrapper-6">How it works</div>
//          <p className="register-and">
//           <span className="span">Register and Showcase Your Talent: </span>
//           <span className="text-wrapper-7">&nbsp;</span>
//           <span className="text-wrapper-8">
//           Signing up is easy! If you love cooking and want to earn money doing what you enjoy, simply register as a cook on our platform. Create a compelling profile showcasing your specialties, experience, and availability.
//           </span>
//           <span>
//           <br />
//           <br />
//           Receive Booking Requests: {" "}
//           </span>
//           <span className="text-wrapper-8">
//           Customers will browse through cook profiles and send booking requests based on their preferences. You'll receive notifications whenever someone is interested in booking your services.
//           <br />
//           <br />
//           </span>
//           <span className="span">Prepare and Cook: </span>
//           <span className="text-wrapper-8">
//           Once you accept a booking, it's time to shine! Gather fresh ingredients, bring your tools, and head to the customer's home at the scheduled time. Create a delightful dining experience right in their kitchen.
//           <br />
//           <br />
//           </span>
//           <span className="span">Earn and Grow: </span>
//           <span className="text-wrapper-8">
//           Get paid for your culinary talents. The more bookings you fulfill, the more you earn. Receive ratings and reviews from customers to build your reputation and attract more bookings in the future.
//           <br />
//           <br />
//           </span>
//          </p>
//       </div>
//     </div>
//   );
// };

export const Frame = () => {
  return(
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
              {/* <div className="overlap-group-wrapper"> */}
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
                      onChange={handleInputChange}
                    />
                  
                  <InputField
                    className="input-field-4"
                    divClassName="input-field-2"
                    inputClassName="input-field-3"
                    label="Password"
                    state="default"
                    value="Enter the password"
                    valueType="placeholder"
                  />
                  <InputField
                    className="input-field-4"
                    divClassName="input-field-2"
                    inputClassName="input-field-3"
                    label="Address"
                    state="default"
                    value="123, church street, Bangalore"
                    valueType="placeholder"
                  />
                  <InputField
                    className="input-field-4"
                    divClassName="input-field-2"
                    inputClassName="input-field-3"
                    label="Birthdate"
                    state="default"
                    value="12-05-1992"
                    valueType="placeholder"
                  />
                  <InputField
                    className="input-field-4"
                    divClassName="input-field-2"
                    inputClassName="input-field-3"
                    label="John Smith"
                    state="default"
                    value="Value"
                    valueType="placeholder"
                  />
                  <InputField
                    className="input-field-4"
                    divClassName="input-field-2"
                    inputClassName="input-field-3"
                    label="Family Name"
                    state="default"
                    value="Nikki"
                    valueType="placeholder"
                  />
                  <InputField
                    className="input-field-4"
                    divClassName="input-field-2"
                    inputClassName="input-field-3"
                    label="Email"
                    state="default"
                    value="Jsmith@gmail.com"
                    valueType="placeholder"
                  />
                  <div className="frame-3">
                  <InputField
                    className="input-field-5"
                    divClassName="input-field-2"
                    inputClassName="input-field-6"
                    label="Profile Pic"
                    state="default"
                    value="Enter the Ps"
                    valueType="placeholder"
                  />
                  <Button className="upload-photo-button" label="Upload photo" size="medium" variant="primary" />
                  </div>
                  <div className="frame-3">
                  <Button className="sign-up-button" label="Sign Up" size="medium" variant="primary" />    
                  <div className="frame-5">
                  <div className="text-wrapper-8">Already have an account?</div>
                  <Button className="sign-In-button" label="Sign In" size="medium" variant="primary" />                            
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
  );
};

// export const Frame = () => {
//   return(
//     <Container fluid className="frame">
//       <Row className="justify-content-start" color="#fff0000">
//         <Col xs={12} md={12} lg={12}>
//           <div className="main-content-frame">
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


