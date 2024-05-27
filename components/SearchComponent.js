import { useEffect, useState } from "react";

export default function SearchComponent(props) {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.search) {
      setQuery(props.search + " game trailer");
    }
  }, [props.search]);

  const handleSearch = async () => {
    setError(null);
    setVideos([]);

    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setVideos(data.items || []);
    } catch (error) {
      setError(error);
      return console.log("FEIL");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div>
        {videos.length > 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video player"
            />
          )}
    </div>
  );
}
