import mongodb from "mongodb";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/games", {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("RES NOT OK");
    return notFound();
  }
  return res.json();
}

export default async function RecomenderPage({ params }) {
  console.log(params.slug);

  const data = await getData();
  const filteredArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].Feeling.toLowerCase() === params.slug) {
      filteredArray.push(data[i]);
    }
  }

  let rndNum = Math.floor(Math.random() * filteredArray.length);

  return (
    <div>
      {
        <div className="card w-1/2 my-10 bg-base-100 shadow-xl relative left-1/2 -translate-x-1/2">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
            <h2 className="card-title">{filteredArray[rndNum].Title}</h2>
            <h2 className="bg-green-600 w-7 h-7 text-center text-lg font-bold m-0 rounded">{filteredArray[rndNum].Metacritic}</h2>
            </div>
            <p>{filteredArray[rndNum].Description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Next!</button>
            </div>
          </div>
        </div>
        /* {
        for (let i = 0; i < data.length; i++) {
            if (data[i].Feeling) {
                
            }
            
        }
      
      : (
        <div>No data available</div>
      )} */
      }
    </div>
  );
}
