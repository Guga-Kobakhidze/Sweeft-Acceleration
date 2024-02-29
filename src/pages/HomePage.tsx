import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Photo } from "../interfaces/interface";
import SearchBar from "../components/SearchBar";
import { Container, Loading } from "./Pages";
import PhotoCard from "../components/PhotoCard";

const HomePage: React.FC = () => {
  const accessToken = "R27yOWMgFcK32EfAy5qNiiWJFXY_wk3Hw60KwvzCcm8";
  const [quaery, setQuaery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);

  const {
    error,
    fetchRequest,
    loading: fetchLoading,
  } = useFetch({
    url: `https://api.unsplash.com/photos?page=${page}&per_page=20&order_by=popular&client_id=${accessToken}`,
    method: "GET",
  });

  const { fetchRequest: searchProducts } = useFetch({
    url: `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${quaery}&client_id=${accessToken}`,
    method: "GET",
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
      setLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setLoading(false);
      }, 500);
    }
  };

  console.log(quaery);

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
  if (fetchLoading && photos.length === 0) return <Loading>Loading...</Loading>;

  return (
    <div>
      <SearchBar handleChange={handleSearch} />
      <Container>
        {researchPhotos?.map((photo: Photo, index) => (
          <div key={index}>
            <PhotoCard photo={photo} />
          </div>
        ))}
        {loading && <Loading>Loading...</Loading>}
      </Container>
    </div>
  );
};

export default HomePage;
