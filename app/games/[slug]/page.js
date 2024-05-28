import { notFound } from "next/navigation";
import RecomenderPage from "@/components/RecommenderPage";

async function fetchData() {
    const res = await fetch("http://localhost:3000/api/games", {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("RES NOT OK");
      return notFound();
    }
    return res.json();
  }

  export default async function Page({ params }) {
    const data = await fetchData();
    return <RecomenderPage params={params} data={data} />;
  }
  