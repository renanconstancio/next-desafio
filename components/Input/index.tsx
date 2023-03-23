"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export function Input({ ...rest }) {
  const [isHover, setIsHover] = useState<boolean>(false);

  function handleOnOutHover() {
    setIsHover(!isHover);
  }

  return (
    <div
      className={[
        styles.input,
        isHover ? styles.active : "",
        rest.className,
      ].join(" ")}
    >
      <input {...rest} onFocus={handleOnOutHover} onBlur={handleOnOutHover} />
    </div>
  );
}
