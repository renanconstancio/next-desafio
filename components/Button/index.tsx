import { ButtonType } from "./types";

import styles from "./styles.module.css";

export function Button({
  children,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonType) {
  return (
    <button
      className={`${[styles.btn, styles[variant], styles[size]].join(" ")}`}
      {...rest}
    >
      {children}
    </button>
  );
}
