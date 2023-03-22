"use client";

import React, { createContext, useCallback, useState } from "react";

type SearchContextType = {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
};

export const SearchContext = createContext({} as SearchContextType);

type SearchProviderType = {
  children: React.ReactNode;
};

export default function SearchProvider({ children }: SearchProviderType) {
  const [isOpen, setStateOpen] = useState<boolean>(false);

  const setIsOpen = useCallback(() => {
    setStateOpen(!isOpen);
  }, [isOpen]);

  return (
    <SearchContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SearchContext.Provider>
  );
}
