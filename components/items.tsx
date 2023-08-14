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

const Items = ({ items }: ItemsProps) => {
  const cafeteriaFilteredList = items.filter(
    (item) => item.attributes.categoria === "Cafeteria"
  );
  const promosFilteredList = items.filter(
    (item) => item.attributes.categoria === "Promos"
  );
  const dulcesFilteredList = items.filter(
    (item) => item.attributes.categoria === "Dulces"
  );
  const tostadosFilteredList = items.filter(
    (item) => item.attributes.categoria === "Sandwiches tostados"
  );
  const specialFilteredList = items.filter(
    (item) => item.attributes.categoria === "Sandwiches especiales"
  );
  const hamburguesasFilteredList = items.filter(
    (item) => item.attributes.categoria === "Hamburguesas"
  );
  const pizzasFilteredList = items.filter(
    (item) => item.attributes.categoria === "Pizzas"
  );
  const panchosFilteredList = items.filter(
    (item) => item.attributes.categoria === "Panchos"
  );
  const empanadasFilteredList = items.filter(
    (item) => item.attributes.categoria === "Empanadas"
  );
  const ensaladasFilteredList = items.filter(
    (item) => item.attributes.categoria === "Ensaladas"
  );
  const bebidasFilteredList = items.filter(
    (item) => item.attributes.categoria === "Bebidas"
  );
  const alcoholFilteredList = items.filter(
    (item) => item.attributes.categoria === "Bebidas con alcohol"
  );
  return (
    <section className="w-full flex flex-col gap-6 pb-10">
      <ListFilteredByCategory
        icon={<Icons.wan className="w-5 h-5" strokeWidth={3} />}
        title="Promos"
        filteredList={promosFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.coffee className="w-5 h-5" strokeWidth={3} />}
        title="Cafetería"
        filteredList={cafeteriaFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.croissant className="w-5 h-5" strokeWidth={3} />}
        title="Dulces"
        filteredList={dulcesFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.sandwich className="w-5 h-5" strokeWidth={3} />}
        title="Sandwiches tostados"
        filteredList={tostadosFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.sandwich className="w-5 h-5" strokeWidth={3} />}
        title="Sandwiches especiales"
        filteredList={specialFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.sandwich className="w-5 h-5" strokeWidth={3} />}
        title="Hamburguesas"
        filteredList={hamburguesasFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.pizza className="w-5 h-5" strokeWidth={3} />}
        title="Pizzas"
        filteredList={pizzasFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.sandwich className="w-5 h-5" strokeWidth={3} />}
        title="Panchos"
        filteredList={panchosFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.sandwich className="w-5 h-5" strokeWidth={3} />}
        title="Empanadas"
        filteredList={empanadasFilteredList}
      />
      <ListFilteredByCategory
        icon={<Icons.salad className="w-5 h-5" strokeWidth={3} />}
        title="Ensaladas"
        filteredList={ensaladasFilteredList}
      />{" "}
      <ListFilteredByCategory
        icon={<Icons.cupSoda className="w-5 h-5" strokeWidth={3} />}
        title="Bebidas"
        filteredList={bebidasFilteredList}
      />{" "}
      <ListFilteredByCategory
        icon={<Icons.beer className="w-5 h-5" strokeWidth={3} />}
        title="Bebidas alcohol"
        filteredList={alcoholFilteredList}
      />
    </section>
  );
};

export default Items;
