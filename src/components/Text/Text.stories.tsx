import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
  },
};

export const Small: StoryObj<TextProps> = {
  args: {
    children: "Lorem Ipsum",
    size: "md",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    children: "Lorem Ipsum",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    children: <p>Esse é um paragrafo!</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
