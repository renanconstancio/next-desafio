import { InputHTMLAttributes } from "react";

export type InputType = InputHTMLAttributes<HTMLInputElement> & {
  dataList?: {
    id: string;
    data: {
      key?: string;
      value: string;
    }[];
  };
};
