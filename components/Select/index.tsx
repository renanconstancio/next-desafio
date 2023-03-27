"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import type { SelectType } from "./types";

export function Select({ options, ...rest }: SelectType) {
  const [isHover, setIsHover] = useState<boolean>(false);

  function handleOnOutHover() {
    setIsHover(!isHover);
  }

  return (
    <div
      className={[
        styles.select,
        isHover ? styles.active : "",
        rest.className,
      ].join(" ")}
    >
      <select onFocus={handleOnOutHover} onBlur={handleOnOutHover} {...rest}>
        {options?.map((item, k) => (
          <option key={k} value={item.id}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
