import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<HeadingProps>;

export const Default: StoryObj = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
  },
};

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: "Lorem Ipsum",
    size: "md",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: "Lorem Ipsum",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    children: <h1>Esse é um título!</h1>,
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
