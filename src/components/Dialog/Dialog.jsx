"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function HeadlessDialog({
  title,
  children,
  isOpen,
  close,
  width = "max-w-md",
}) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-40 w-screen overflow-y-auto bg-stone-900/50">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className={`rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 w-1/3`}
            >
              <div className="flex items-center justify-between">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black/90"
                >
                  {title}
                </DialogTitle>
                <div className="flex items-center cursor-pointer" onClick={close}>
                    <XMarkIcon className="w-6 h-6 text-stone-500" />
                </div>
              </div>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
