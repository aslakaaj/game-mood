import { useEffect, useState } from "react";

export default function SearchComponent(props) {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.search) {
      setQuery(props.search + " game trailer");
    }
  }, [props.search]);

  const handleSearch = async () => {
    setError(null);
    setVideos([]);

    try {
      setLoading(true);
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setVideos(data.items || []);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  if (error && loading) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    throw new Promise(() => {});
  }

  return (
    <>
      {videos.length > 0 && (
        <iframe
          className="w-full h-64 md:h-96"
          src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        />
      )}
    </>
  );
}
