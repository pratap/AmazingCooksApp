import React from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import "./style.css";

const handleInputChange = (value) => {
  // Custom onChange logic
  console.log('Input value changed:', value);
  setInputFieldValue(value);
};

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="text-wrapper-2">Amazing Cooks</div>
        <Button
          className="services-button"
          divClassName="button-instance"
          label="Services"
          size="medium"
          variant="primary"
        />
        <Button
          className="cooks-near-me-button"
          divClassName="design-component-instance-node"
          label="Cooks Near Me"
          size="medium"
          variant="primary"
        />
        <Button
          className="join-us-button"
          divClassName="design-component-instance-node"
          label="Join Us"
          size="medium"
          variant="primary"
        />
        <div className="menu-button">
          <img className="img" alt="Button" src="button.png" />
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper-3">Create Account</div>
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
          </div>
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
            className="input-field-5"
            divClassName="input-field-2"
            inputClassName="input-field-3"
            label="Address"
            state="default"
            value="123, church street, Bangalore"
            valueType="placeholder"
          />
          <InputField
            className="input-field-6"
            divClassName="input-field-2"
            inputClassName="input-field-3"
            label="Birthdate"
            state="default"
            value="12-05-1992"
            valueType="placeholder"
          />
          <InputField
            className="input-field-7"
            divClassName="input-field-2"
            inputClassName="input-field-3"
            label="John Smith"
            state="default"
            value="Value"
            valueType="placeholder"
          />
          <InputField
            className="input-field-8"
            divClassName="input-field-2"
            inputClassName="input-field-3"
            label="Family Name"
            state="default"
            value="Nikki"
            valueType="placeholder"
          />
          <InputField
            className="input-field-9"
            divClassName="input-field-2"
            inputClassName="input-field-3"
            label="Email"
            state="default"
            value="Jsmith@gmail.com"
            valueType="placeholder"
          />
          <InputField
            className="input-field-10"
            divClassName="input-field-2"
            inputClassName="input-field-11"
            label="Profile Pic"
            state="default"
            value="Enter the Ps"
            valueType="placeholder"
          />
          <Button className="sign-up-button" label="Sign Up" size="medium" variant="primary" />
          <Button className="upload-photo-button" label="Upload photo" size="medium" variant="primary" />
          <Button className="sign-In-button" label="Sign In" size="medium" variant="primary" />
          <div className="text-wrapper-4">Already have an account?</div>
        </div>
      </div>
    </div>
  );
};
