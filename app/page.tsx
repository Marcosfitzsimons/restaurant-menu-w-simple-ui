import Items from "@/components/items";
import { siteConfig } from "@/config/site";

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
        <Items items={items} />
      </div>
    </main>
  );
}
