"use client";
import LoadingVideo from "@/components/LoadingVideo";
import SearchComponent from "@/components/SearchComponent";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { Suspense } from "react";

export default function RecommenderPage({ params, data }) {
  const [index, setIndex] = useState(0);
  const [filteredArray, setFilteredArray] = useState([]);
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    // Reset the filtered array and indexes when params change
    const newFilteredArray = data.filter(game => game.Feeling.toLowerCase() === params.slug);

    if (newFilteredArray.length === 0) {
      notFound();
    }

    const initialIndex = Math.floor(Math.random() * newFilteredArray.length);
    setFilteredArray(newFilteredArray);
    setIndexes([initialIndex]);
    setIndex(0);
  }, [params.slug, data]);

  function nextClickHandler() {
    if (index === indexes.length - 1) {
      const newRndNum = Math.floor(Math.random() * filteredArray.length);
      setIndexes([...indexes, newRndNum]);
    }
    setIndex(prevIndex => prevIndex + 1);
  }

  function prevClickHandler() {
    setIndex(prevIndex => prevIndex - 1);
  }

  if (filteredArray.length === 0 || indexes.length === 0) {

    return <span className="loading loading-spinner loading-lg absolute left-1/2 top-1/2 -translate-x-1/2"></span>;
  }

  return (
    <div className="card w-full md:w-1/2 my-10 bg-neutral shadow-xl relative left-1/2 -translate-x-1/2">
      <figure>
        <Suspense fallback={<LoadingVideo />}>
          <SearchComponent search={filteredArray[indexes[index]].Title} />
        </Suspense>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{filteredArray[indexes[index]].Title}</h2>
          <h2 className="bg-green-600 w-7 h-7 text-center text-lg font-bold m-0 rounded">
            {filteredArray[indexes[index]].Metacritic}
          </h2>
        </div>
        <p>{filteredArray[indexes[index]].Description}</p>
        <div className="card-actions justify-end mt-5">
          {index > 0 && (
            <button className="btn btn-secondary text-white" onClick={prevClickHandler}>
              Previous
            </button>
          )}
          <button className="btn btn-secondary text-white" onClick={nextClickHandler}>
            Next!
          </button>
        </div>
      </div>
    </div>
  );
}
