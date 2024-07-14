import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    state: {
      options: ["disabled", "error", "default"],
      control: { type: "select" },
    },
    valueType: {
      options: ["placeholder", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    description: "Description",
    error: "Error",
    hasLabel: true,
    hasError: false,
    value: "Value",
    hasDescription: false,
    label: "Label",
    state: "disabled",
    valueType: "placeholder",
    className: {},
    divClassName: {},
    inputClassName: {},
  },
};
