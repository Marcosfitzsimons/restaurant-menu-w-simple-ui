import React from "react";
import Item from "./item";
import { Separator } from "./ui/separator";

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

interface CategoryFilteredListProps {
  filteredList: ItemType[];
  title: string;
  icon: any;
}
const ListFilteredByCategory = ({
  filteredList,
  title,
  icon,
}: CategoryFilteredListProps) => {
  return (
    <div className="relative w-full flex flex-col gap-2 max-w-sm">
      <div className="w-full text-white rounded-xl py-2 bg-[#298e9be8] flex justify-center items-center gap-1">
        {icon}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <div className="flex flex-col">
        {filteredList.length > 0 ? (
          filteredList.map((item) => <Item item={item} key={item.id} />)
        ) : (
          <p>No hay items disponibles en esta categoría.</p>
        )}
      </div>
      <Separator className="absolute self-center -bottom-3 w-4" />
    </div>
  );
};

export default ListFilteredByCategory;
