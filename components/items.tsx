import ListFilteredByCategory from "./list-filtered-by-category";
import { Icons } from "./icons";

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
  return (
    <section className="w-full flex flex-col gap-6 pb-10">
      {categories.map(({ title, category, icon }) => {
        const filteredList = items.filter(
          (item) => item.attributes.categoria === category
        );
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
  );
};

export default Items;
