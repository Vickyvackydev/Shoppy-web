"use client";
import { ProductDataProps } from "@/types";
import React, {
  useState,
  useContext,
  createContext,
  SetStateAction,
} from "react";

interface AppQueryProps {
  modal: boolean;
  modalState: string;
  setModalState: React.Dispatch<SetStateAction<string>>;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  selectedData: ProductDataProps | null;
  setSelectedData: React.Dispatch<SetStateAction<ProductDataProps | null>>;
}
const AppQueryContext = createContext<AppQueryProps>({
  modal: false,
  setModal: () => {},
  selectedData: null,
  setSelectedData: () => {},
  modalState: "",
  setModalState: () => {},
});
export const useAppQuery = () => useContext(AppQueryContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modal, setModal] = useState(false);
  const [modalState, setModalState] = useState("");
  const [selectedData, setSelectedData] = useState<ProductDataProps | null>(
    null
  );
  return (
    <AppQueryContext.Provider
      value={{
        modal,
        setModal,
        selectedData,
        setSelectedData,
        modalState,
        setModalState,
      }}
    >
      {children}
    </AppQueryContext.Provider>
  );
};
