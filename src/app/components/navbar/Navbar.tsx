"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";

interface NavbarProps {
  search: (value: string) => void;
}

function Navbar({ search }: NavbarProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] =
    useState<string>(searchValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  useEffect(() => {
    search(debouncedSearchValue);
  }, [debouncedSearchValue, search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Pokemon market</h1>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search by Name"
              className={styles.searchInput}
              value={searchValue}
              onChange={handleSearch}
            />
            <Image
              className={styles.searchIcon}
              src="/search.png"
              alt="search"
              width={15}
              height={15}
            />
          </div>
          <button className={styles.button} onClick={handleOpenDrawer}>
            <Image src="/shopping-bag.png" alt="cart" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by Name"
            className={styles.searchInput}
            value={searchValue}
            onChange={handleSearch}
          />
          <Image
            className={styles.searchIcon}
            src="/search.png"
            alt="search"
            width={15}
            height={15}
          />
        </div>
      </div>
      <Drawer open={isOpen} onSetclose={setIsOpen} />
    </div>
  );
}

export default Navbar;
