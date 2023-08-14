import React from "react";

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

type Item = {
  id: number;
  attributes: Attributes;
};

interface ItemProps {
  item: Item;
}

const Item = ({ item }: ItemProps) => {
  return (
    <article
      className="w-full flex items-center justify-between py-1 px-2 rounded-xl transition-all odd:bg-[#ddf8f5] even:bg-[#f4fffa] dark:odd:bg-[#e3fdf0]/20 dark:even:bg-[#f4fffa]/5 hover:scale-105"
      key={item.id}
    >
      <div className="flex flex-col">
        <h3 className="">{item.attributes.titulo}</h3>
        {item.attributes.tituloIngles && (
          <h4 className="text-[13px] text-card-foreground relative bottom-1">
            {item.attributes.tituloIngles}
          </h4>
        )}
        {item.attributes.descripcion && (
          <p className="text-[12px] w-8/12 relative">
            {item.attributes.descripcion}
          </p>
        )}
      </div>
      <p className="text-lg font-bold">${item.attributes.precio}</p>
    </article>
  );
};

export default Item;
