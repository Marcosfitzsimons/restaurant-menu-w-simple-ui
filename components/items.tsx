"use client";

import { useState } from "react";
import ListFilteredByCategory from "./list-filtered-by-category";
import { Icons } from "./icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Attributes = {
  titulo: string;
  tituloIngles?: string;
  descripcion?: string;
  categoria: string;
  precio: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type ItemType = {
  id: number;
  attributes: Attributes;
};

interface ItemsProps {
  items: ItemType[];
}

const categories = [
  {
    title: "Promos",
    category: "Promos",
    icon: <Icons.wan className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Cafetería",
    category: "Cafeteria",
    icon: <Icons.coffee className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Dulces",
    category: "Dulces",
    icon: <Icons.croissant className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Sandwiches tostados",
    category: "Sandwiches tostados",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Sandwiches especiales",
    category: "Sandwiches especiales",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Hamburguesas",
    category: "Hamburguesas",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Pizzas",
    category: "Pizzas",
    icon: <Icons.pizza className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Panchos",
    category: "Panchos",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Empanadas",
    category: "Empanadas",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Ensaladas",
    category: "Ensaladas",
    icon: <Icons.salad className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Bebidas",
    category: "Bebidas",
    icon: <Icons.cupSoda className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Bebidas alcohol",
    category: "Bebidas con alcohol",
    icon: <Icons.beer className="w-5 h-5" strokeWidth={3} />,
  },
];

const Items = ({ items }: ItemsProps) => {
  const [selectValue, setSelectValue] = useState("Todas");

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full flex flex-col gap-2">
        <Label>Categorías</Label>
        <Select value={selectValue} onValueChange={(v) => setSelectValue(v)}>
          <SelectTrigger className="w-full sm:w-[190px]">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todas">Todas</SelectItem>
            <SelectItem value="Promos">Promos</SelectItem>
            <SelectItem value="Cafeteria">Cafetería</SelectItem>
            <SelectItem value="Dulces">Dulces</SelectItem>
            <SelectItem value="Sandwiches tostados">
              Sandwiches tostados
            </SelectItem>
            <SelectItem value="Sandwiches especiales">
              Sandwiches especiales
            </SelectItem>
            <SelectItem value="Hamburguesas">Hamburguesas</SelectItem>
            <SelectItem value="Pizzas">Pizzas</SelectItem>
            <SelectItem value="Panchos">Panchos</SelectItem>
            <SelectItem value="Empanadas">Empanadas</SelectItem>
            <SelectItem value="Ensaladas">Ensaladas</SelectItem>
            <SelectItem value="Bebidas">Bebidas</SelectItem>
            <SelectItem value="Bebidas alcohol">Bebidas alcohol</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <section className="w-full flex flex-col items-center gap-6 pb-10 sm:grid sm:grid-cols-2 sm:items-start lg:grid-cols-3 lg:grid-rows-3">
        {categories.map(({ title, category, icon }) => {
          const filteredList = items.filter(
            (item) => item.attributes.categoria === category
          );

          if (selectValue !== "Todas" && selectValue !== category) {
            return null; // Skip rendering if category doesn't match
          }

          return (
            <ListFilteredByCategory
              key={category}
              icon={icon}
              title={title}
              filteredList={filteredList}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Items;
