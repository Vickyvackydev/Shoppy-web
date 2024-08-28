import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode;
}
export default function Modal(props: ModalProps) {
  return (
    <>
      <Dialog
        open={props.isOpen}
        transition
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={props.isClose}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/80 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className={`lg:w-[800px] w-full rounded-xl bg-primary-grey-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0`}
            >
              {props.children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
