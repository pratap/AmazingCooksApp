import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const InputField = ({
  description = "Description",
  error = "Error",
  hasLabel = true,
  hasError = false,
  value = "Value",
  hasDescription = false,
  label = "Label",
  state,
  initialValueType = "placeholder", // Initial valueType prop
  className,
  divClassName,
  inputClassName,
  onChange, // Custom onChange prop
}) => {
  // useState to manage the input value and valueType
  const [inputValue, setInputValue] = useState(value);
  const [valueType, setValueType] = useState(initialValueType);

  // Function to handle input change
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    // Example logic to change valueType dynamically
    console.log(newValue);
    if (newValue === "") {
      setValueType("placeholder");
    } else {
      setValueType("default");
    }

    // Call custom onChange prop, if provided
    // if (onChange) {
    //   onChange(newValue);
    // }
  };

  const handleFocus = () => {
    setInputValue('');
    setValueType(initialValueType); // Reset to initial valueType on focus
  };

  const handleBlur = () => {
    // Optionally handle onBlur event if needed
  };

  return (
    <div className={`input-field ${className}`}>
      {hasLabel && <div className={`label ${state} ${divClassName}`}>{label}</div>}

      <div className={`input state-${state} ${inputClassName}`}>
        {/* Render an input element */}
        <input
          type="text"
          style={{ border: '1px solid transparent' }}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`value state-0-${state} value-type-${valueType}`}
          onFocus={handleFocus}
        />
      </div>

      {/* Optionally render description or error */}
      {hasDescription && <div className="description">{description}</div>}
      {hasError && <div className="error">{error}</div>}
    </div>
  );
};

InputField.propTypes = {
  description: PropTypes.string,
  error: PropTypes.string,
  hasLabel: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  hasDescription: PropTypes.bool,
  label: PropTypes.string,
  state: PropTypes.oneOf(["disabled", "error", "default"]),
  initialValueType: PropTypes.oneOf(["placeholder", "default"]), // Initial valueType prop type
  className: PropTypes.string,
  divClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  onChange: PropTypes.func, // Expecting a function prop
};

export default InputField;
