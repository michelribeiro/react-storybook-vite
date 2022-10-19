import * as CheckboxForm from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxForm.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxForm.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxForm.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxForm.Indicator>
    </CheckboxForm.Root>
  );
}
