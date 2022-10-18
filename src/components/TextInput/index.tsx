import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextInputRootProps {
  children: ReactNode;
}
interface TextInputIconProps {
  children: ReactNode;
}

const stylesRoot =
  "flex\
  items-center\
  h-12\
  gap-3\
  py-4\
  px-3\
  rounded\
  bg-gray-800\
  w-full\
  focus-within:ring-2 ring-cyan-300\
";

const styleInput =
  "bg-transparent\
  flex-1\
  text-gray-100\
  text-xs\
  placeholder:text-gray-400\
  outline-none\
";

function TextInputRoot({ children }: TextInputRootProps) {
  return <div className={stylesRoot}>{children}</div>;
}
TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-5 text-gray-400">{children}</Slot>;
}
TextInputIcon.displayName = "TextInput.Icon";

function TextInputInput(props: TextInputProps) {
  return <input className={styleInput} {...props} />;
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
