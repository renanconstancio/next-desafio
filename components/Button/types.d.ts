import React, { ButtonHTMLAttributes } from "react";

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "info"
    | "alert"
    | "warning"
    | "danger"
    | "buy";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};
