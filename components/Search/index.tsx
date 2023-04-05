"use client";

import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";

import IconSearch from "/public/icons-svg/search.svg";

type Props = {
  categories?: { [key: string]: string | string[] | undefined }[];
};

export function Search({ categories }: Props) {
  const { push } = useRouter();

  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [pressEnter, setPressEnter] = useState(false);

  const pressKeyEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText.length > 2) setPressEnter(true);
  };

  useEffect(() => {
    if (pressEnter || searchPrice) {
      setPressEnter(false);
      push(
        `?search_title=${searchText}&search_category=${searchCategory}&search_price=${searchPrice}`,
      );
    }
  }, [pressEnter, searchPrice]);

  return (
    <form className="flex mb-5">
      <Input
        type="search"
        name="title"
        placeholder="Pesquisa por titulos"
        className="mr-5 basis-1/2"
        onChange={(e) => setSearchText(e.currentTarget.value)}
        onKeyDown={pressKeyEnterSearch}
      />

      <Input
        type="search"
        name="category"
        placeholder="Pesquisa por categorias"
        dataList={{ id: "list", data: categories }}
        className="mr-5 basis-1/4"
        onChange={(e) => setSearchCategory(e.currentTarget.value)}
        onKeyDown={pressKeyEnterSearch}
      />

      <Select
        name="combobox"
        placeholder="Faixa de preços"
        options={[
          { id: "all", value: "Todos" },
          { id: "asc", value: "Menor Preço" },
          { id: "desc", value: "Maior Preço" },
        ]}
        className="mr-5 basis-1/4"
        onChange={(e) => setSearchPrice(e.currentTarget.value)}
      />

      <IconSearch
        className="fill-purple-strong cursor-pointer w-5"
        onClick={() => setPressEnter(true)}
      />
    </form>
  );
}
