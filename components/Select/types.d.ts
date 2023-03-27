import { SelectHTMLAttributes } from "react";

export type SelectType = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: { [key: string]: string | string[] | undefined }[];
};
