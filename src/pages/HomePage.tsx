import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { CSSProperties } from "styled-components";
import { Photo } from "../interfaces/interface";
import SearchBar from "../components/SearchBar";

const HomePage: React.FC = () => {
  const accessToken = "R27yOWMgFcK32EfAy5qNiiWJFXY_wk3Hw60KwvzCcm8";
  const [quaery, setQuaery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);

  const {
    error,
    fetchRequest,
    loading: fetchLoading,
  } = useFetch({
    url: `https://api.unsplash.com/photos?page=${page}&per_page=20&order_by=popular`,
    method: "GET",
    accessToken: accessToken,
  });

  const { fetchRequest: searchProducts } = useFetch({
    url: `https://api.unsplash.com/search/photos?query=${quaery}`,
    method: "GET",
    accessToken: accessToken,
  }) as { fetchRequest: { results?: Photo[] } | null };

  const handleSearch = (quaery: string) => {
    setQuaery(quaery);
    setSearchedPhotos([]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (fetchRequest) {
      setPhotos((prev) => [...prev, ...fetchRequest]);
    }

    if (searchProducts) {
      setSearchedPhotos((prev: Photo[]) => [
        ...prev,
        ...(searchProducts?.results || []),
      ]);
    }
  }, [fetchRequest, searchProducts]);

  const researchPhotos = quaery ? searchedPhotos : photos;

  if (error) return null;
  if (fetchLoading && photos.length === 0)
    return <div style={Styles.loading}>Loading...</div>;

  return (
    <div>
      <SearchBar handleChange={handleSearch} />
      <div style={Styles.container}>
        {researchPhotos?.map((photo: Photo, index) => (
          <div style={Styles.card} key={index}>
            <h1 style={Styles.text}>{photo.alt_description}</h1>
            <img style={Styles.image} src={photo?.urls.regular} alt="Product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

const Styles = {
  container: {
    margin: "40px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
  } as CSSProperties,

  card: {
    position: "relative",
    cursor: "pointer",
  } as CSSProperties,

  text: {
    position: "absolute",
    left: "20px",
    bottom: "10px",
    width: "250px",
    fontSize: "20px",
    color: "white",
    textTransform: "uppercase",
  } as CSSProperties,

  image: {
    objectFit: "cover",
    width: "300px",
    height: "300px",
  } as CSSProperties,

  loading: {
    position: "fixed",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "40px",
    color: "black",
    zIndex: "9999",
  } as CSSProperties,
};
