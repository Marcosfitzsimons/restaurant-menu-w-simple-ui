import React from "react";

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

interface ItemProps {
  item: Product;
}

const Item = ({ item }: ItemProps) => {
  return (
    <article
      className="w-full flex items-center justify-between p-2 rounded-xl transition-all odd:bg-[#ddf8f5] even:bg-[#f4fffa] dark:odd:bg-[#e3fdf0]/20 dark:even:bg-[#f4fffa]/5 lg:px-4"
      key={item._id}
    >
      <div className="flex flex-col">
        <h3 className="">{item.title}</h3>
        {item.englishTitle && (
          <h4 className="text-[13px] text-card-foreground relative bottom-1">
            {item.englishTitle}
          </h4>
        )}
        {item.description && (
          <p className="text-[12px] w-8/12 relative leading-3">
            {item.description}
          </p>
        )}
      </div>
      <p className="text-lg font-bold">${item.price}</p>
    </article>
  );
};

export default Item;
