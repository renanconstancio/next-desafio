"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import type { InputType } from "./types";

export function Input({ dataList, ...rest }: InputType) {
  const [isHover, setIsHover] = useState<boolean>(false);

  function handleOnOutHover() {
    setIsHover(!isHover);
  }

  if (dataList?.id) {
    rest.autoComplete = "off";
    rest.list = rest.name;
    rest.role = "combobox";
  }

  return (
    <div
      className={[
        styles.input,
        isHover ? styles.active : "",
        rest.className,
      ].join(" ")}
    >
      <input onFocus={handleOnOutHover} onBlur={handleOnOutHover} {...rest} />
      {dataList?.data && (
        <datalist id={rest.name} role="listbox">
          {dataList.data.map((item, k) => (
            <option key={k} value={item.key || item.value}>
              {item.value}
            </option>
          ))}
        </datalist>
      )}
    </div>
  );
}
