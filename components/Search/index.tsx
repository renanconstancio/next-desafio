"use client";

import { Input } from "@components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

import IconSearch from "/public/icons-svg/search.svg";

type Props = {
  categories?: { [key: string]: string | string[] | undefined }[];
};

export function Search({ categories }: Props) {
  const route = useRouter();

  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const handleSearch = () => {
    route.push(
      `?search_title=${searchText}&search_category=${searchCategory}&search_price=${searchPrice}`,
    );
  };

  const handleKeySearch = (e: any) => {
    if (
      e.key === "Enter" &&
      (searchText.length > 2 || searchCategory.length > 2)
    ) {
      route.push(
        `?search_title=${searchText}&search_category=${searchCategory}&search_price=${searchPrice}`,
      );
    }
  };

  return (
    <form className="flex mb-5">
      <Input
        type="search"
        name="title"
        placeholder="Pesquisa por titulos"
        className="mr-5 basis-1/2"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeySearch}
      />

      <Input
        type="search"
        name="category"
        placeholder="Pesquisa por categorias"
        dataList={{ id: "list", data: categories }}
        className="mr-5 basis-1/4"
        onChange={(e) => setSearchCategory(e.target.value)}
        onKeyDown={handleKeySearch}
      />

      <Input
        type="search"
        name="combobox"
        placeholder="Faixa de preços"
        dataList={{ id: "list", data: [{ value: "teste" }] }}
        className="mr-5 basis-1/4"
        onChange={(e) =>
          setSearchPrice(String(e.target.value).replace(",", ""))
        }
        onKeyDown={handleKeySearch}
      />

      <IconSearch
        className="fill-purple-strong cursor-pointer w-5"
        onClick={handleSearch}
      />
    </form>
  );
}
