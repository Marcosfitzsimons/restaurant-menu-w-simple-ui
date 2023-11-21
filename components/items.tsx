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

type Product = {
  _id: string;
  title: string;
  englishTitle?: string;
  description?: string;
  price: number;
  category:
    | "promos"
    | "cafeteria"
    | "dulces"
    | "bebidas"
    | "bebidas-alcohol"
    | "hamburguesas"
    | "pizzas"
    | "sandwiches-tostados"
    | "sandwiches-especiales"
    | "ensaladas"
    | "empanadas"
    | "panchos";
};

interface ItemsProps {
  items: Product[];
}

const categories = [
  {
    title: "Promos",
    category: "promos",
    icon: <Icons.wan className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Cafetería",
    category: "cafeteria",
    icon: <Icons.coffee className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Dulces",
    category: "dulces",
    icon: <Icons.croissant className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Sandwiches tostados",
    category: "sandwiches-tostados",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Sandwiches especiales",
    category: "sandwiches-especiales",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Hamburguesas",
    category: "hamburguesas",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Pizzas",
    category: "pizzas",
    icon: <Icons.pizza className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Panchos",
    category: "panchos",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Empanadas",
    category: "empanadas",
    icon: <Icons.sandwich className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Ensaladas",
    category: "ensaladas",
    icon: <Icons.salad className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Bebidas",
    category: "bebidas",
    icon: <Icons.cupSoda className="w-5 h-5" strokeWidth={3} />,
  },
  {
    title: "Bebidas alcohol",
    category: "bebidas-alcohol",
    icon: <Icons.beer className="w-5 h-5" strokeWidth={3} />,
  },
];

const Items = ({ items }: ItemsProps) => {
  const [selectValue, setSelectValue] = useState("todas");

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full flex flex-col gap-2">
        <Label>Categorías</Label>
        <Select value={selectValue} onValueChange={(v) => setSelectValue(v)}>
          <SelectTrigger className="w-full sm:w-[190px]">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            <SelectItem value="promos">Promos</SelectItem>
            <SelectItem value="cafeteria">Cafetería</SelectItem>
            <SelectItem value="dulces">Dulces</SelectItem>
            <SelectItem value="sandwiches-tostados">
              Sandwiches tostados
            </SelectItem>
            <SelectItem value="sandwiches-especiales">
              Sandwiches especiales
            </SelectItem>
            <SelectItem value="hamburguesas">Hamburguesas</SelectItem>
            <SelectItem value="pizzas">Pizzas</SelectItem>
            <SelectItem value="panchos">Panchos</SelectItem>
            <SelectItem value="empanadas">Empanadas</SelectItem>
            <SelectItem value="ensaladas">Ensaladas</SelectItem>
            <SelectItem value="bebidas">Bebidas</SelectItem>
            <SelectItem value="bebidas-alcohol">Bebidas alcohol</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <section className="w-full flex flex-col items-center gap-6 pb-10 sm:grid sm:grid-cols-2 sm:items-start lg:grid-cols-3 lg:grid-rows-3">
        {categories.map(({ title, category, icon }) => {
          const filteredList = items
            .filter((item) => item.category === category)
            .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by item title;

          if (selectValue !== "todas" && selectValue !== category) {
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
