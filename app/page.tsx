import Items from "@/components/items";
import data from "../lib/data.json";
import { siteConfig } from "@/config/site";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

async function getData() {
  const res = await fetch(`${siteConfig.endPoints.getAll.url}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const items = data.data;
  return (
    <main className="container min-h-screen flex  flex-col items-center gap-6 pt-6">
      <h1 className="text-xl">{siteConfig.name}</h1>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full flex flex-col gap-2">
          <Label>Categorías</Label>
          <Select>
            <SelectTrigger className="w-full sm:w-[160px]">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Promos</SelectItem>
              <SelectItem value="dark">Hamburguesas</SelectItem>
              <SelectItem value="system">Cafetería</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Items items={items} />
      </div>
    </main>
  );
}
