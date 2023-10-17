import { useContext, createContext, ReactNode } from 'react';
import { useState } from "react";


interface MyContextProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <MyContext.Provider value={{ toggle, setToggle }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext) || { toggle: false, setToggle: () => {} };
};
