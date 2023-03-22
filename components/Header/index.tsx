"use client";

import Image from "next/image";
import { useContext } from "react";
import { SearchContext } from "@context/searchContext";
import type { Setting } from "../../types/setting";

import logoImage from "/public/logo.png";
import IconUser from "/public/icons-svg/user-solid.svg";
import IconWishlist from "/public/icons-svg/heart-solid.svg";
import IconHamburguer from "/public/icons-svg/bars.svg";
import IconCart from "/public/icons-svg/cart-shopping-solid.svg";

import styles from "./styles.module.css";

export function Header({ setting }: { setting: Setting }) {
  const { isOpen, setIsOpen } = useContext(SearchContext);

  return (
    <header className={styles.header}>
      <section className={styles["header-first-section"]}>
        <p>
          {setting.phones[0].title} {setting.phones[0].number}
        </p>
      </section>
      <section className={styles["header-first-secondary"]}>
        <aside>
          <IconHamburguer
            className="icon-svg-animated "
            onClick={() => setIsOpen(!isOpen)}
          />
        </aside>
        <aside>
          <Image
            alt="Logo"
            src={logoImage}
            className="w-full max-w-[245px] inline-block"
          />
        </aside>
        <aside>
          <IconUser className="icon-svg-animated" />
          <IconWishlist className="icon-svg-animated" />
          <IconCart className="icon-svg-animated" />
        </aside>

        {isOpen && <>asdfasdfasdfasdfasdfasdfasdfasd</>}
      </section>
    </header>
  );
}
