"use client";
import { useContext } from "react";
import { SearchContext } from "@context/searchContext";
import { Input } from "@components/Input";

export function Search() {
  const { isOpen } = useContext(SearchContext);

  return isOpen ? (
    <form className="">
      <Input />
    </form>
  ) : (
    <></>
  );
}
