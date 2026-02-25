"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { ChevronDown } from "../icons";

type SelectorOption = {
  id: number;
  label: string;
};

interface SelectorDrawerProps {
  title: string;
  description: string;
  triggerLabel: string;
  options: SelectorOption[];
}

export const SelectorDrawer = ({
  title,
  description,
  triggerLabel,
  options,
}: SelectorDrawerProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const onSelected = (id: number) => {
    setSelectedId(id);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex justify-between w-full" variant='outline'>
          {triggerLabel} <ChevronDown />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>

        <ul className="h-60 overflow-y-auto text-center px-4">
          {options.map((item) => (
            <li key={item.id}>
              <Button
                className="w-full"
                variant={selectedId === item.id ? "secondary" : "ghost"}
                size="lg"
                onClick={() => onSelected(item.id)}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>

        <DrawerFooter>
          <Button size="lg">Seleccionar</Button>
          <DrawerClose asChild>
            <Button variant="outline" size="lg">
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
