import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type DropdownProps = {
  children: React.ReactNode;
};

type DropdownButtonProps = {
  children: React.ReactNode;
};

type DropdownContentProps = {
  children: React.ReactNode;
};


type DropdownItemProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<T>;

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <Menu
      as="div"
      className="relative flex items-center justify-center text-left"
    >
      {children}
    </Menu>
  );
};

const DropdownButton = ({ children }: DropdownButtonProps) => {
  return <Menu.Button>{children}</Menu.Button>;
};

const DropdownContent = ({ children }: DropdownContentProps) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute py-2 right-0 mt-5 w-56 z-10 top-6 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-gray-300 focus:outline-none">
        {children}
      </Menu.Items>
    </Transition>
  );
};

export const DropdownItem = <T extends React.ElementType>({
  as,
  children,
  className,
  ...props
}: DropdownItemProps<T>) => {
  const Component = as || "div";
  return (
    <Menu.Item>
      <Component
        className={`hover:bg-gray-100  w-full text-left cursor-pointer py-2.5 md:py-1.5 font-medium px-4 ${className}`}
        {...props}
      >
        {children}
      </Component>
    </Menu.Item>
  );
};

export { Dropdown, DropdownButton, DropdownContent };