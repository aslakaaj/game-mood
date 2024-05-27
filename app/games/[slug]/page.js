"use client";
import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";

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

const filteredArray = [];
const indexes = [];

function RecomenderPage({ params, data }) {

  const [index, setIndex] = useState(0);
  let rndNum;

  for (let i = 0; i < data.length; i++) {
    if (data[i].Feeling.toLowerCase() === params.slug) {
      filteredArray.push(data[i]);
    }
  }

  rndNum = Math.floor(Math.random() * filteredArray.length);
  indexes.push(rndNum);

  function nextClickHandler() {
    if (index === indexes.length - 1) {
      rndNum = Math.floor(Math.random() * filteredArray.length);
      indexes.push(rndNum);
    }
    setIndex((prevIndex) => prevIndex + 1);
    console.log(indexes);
  }

  function prevClickHandler() {
    setIndex((prevIndex) => prevIndex - 1);
    console.log(indexes);
  }

  return (
    <div className="card w-1/2 my-10 bg-base-100 shadow-xl relative left-1/2 -translate-x-1/2">
      <figure>
        <SearchComponent
          search={filteredArray[indexes[index]].Title}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{filteredArray[indexes[index]].Title}</h2>
          <h2 className="bg-green-600 w-7 h-7 text-center text-lg font-bold m-0 rounded">
            {filteredArray[indexes[index]].Metacritic}
          </h2>
        </div>
        <p>{filteredArray[indexes[index]].Description}</p>
        <div className="card-actions justify-end">
          {index >> 0 ? (
            <button className="btn btn-secondary" onClick={prevClickHandler}>
              Previous
            </button>
          ) : null}
          <button className="btn btn-secondary" onClick={nextClickHandler}>
            Next!
          </button>
        </div>
      </div>
    </div>
  );
}

export default async function Page({ params }) {
  const data = await fetchData();
  return <RecomenderPage params={params} data={data} />;
}
