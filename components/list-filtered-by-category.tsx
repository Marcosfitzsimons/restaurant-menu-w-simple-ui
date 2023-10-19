import React from "react";
import Item from "./item";
import { Separator } from "./ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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

interface CategoryFilteredListProps {
  filteredList: Product[];
  title: string;
  icon: any;
}
const ListFilteredByCategory = ({
  filteredList,
  title,
  icon,
}: CategoryFilteredListProps) => {
  return (
    <div className="relative w-full flex flex-col gap-2 max-w-[450px]">
      <div className="w-full text-white rounded-xl py-2 bg-[#298e9be8] flex justify-center items-center gap-1">
        {icon}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <ScrollArea className="flex flex-col w-full lg:h-[420px]">
        {filteredList.length > 0 ? (
          filteredList.map((item) => <Item item={item} key={item._id} />)
        ) : (
          <p>No hay productos disponibles en esta categoría</p>
        )}
      </ScrollArea>
      <Separator className="absolute self-center -bottom-3 w-4 sm:hidden" />
    </div>
  );
};

export default ListFilteredByCategory;
