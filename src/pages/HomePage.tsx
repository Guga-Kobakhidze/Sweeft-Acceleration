// HomePage where are all fetched and searched photos

import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Photo } from "../interfaces/interface";
import SearchBar from "../components/search/SearchBar";
import PhotoCard from "../components/card/PhotoCard";
import { accessToken } from "../accessToken/AccessToken";
import useLocalStorage from "../hooks/useLocalStorage";
import useSearch from "../hooks/useSearch";
import { Loading, MainPageStyle } from "../assets/styles/Pages";

const HomePage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);
  const [value, setValue] = useLocalStorage<string[]>("ValueKeys", []);

  // for searching photos with useSearch hook
  const { loading, page, query, setQuery, searchProducts } = useSearch();

  // for fetching photos with useFetch hook
  const {
    error,
    fetchRequest,
    loading: fetchLoading,
  } = useFetch({
    url: `https://api.unsplash.com/photos?page=${page}&per_page=20&order_by=popular&client_id=${accessToken}`,
    method: "GET",
  });

  const handleSearch = (query: string) => {
    setQuery(query);
    if (query == "" || value.includes(query)) {
      setValue([...value]);
    } else {
      setValue([...value, query]);
    }

    setSearchedPhotos([]);
  };

  // filtering searched and fetched photos
  useEffect(() => {
    if (fetchRequest) {
      setPhotos((prev) => {
        const uniqueNewData = fetchRequest.filter(
          (newPhoto: Photo) =>
            !prev.some((prevPhoto) => prevPhoto.id === newPhoto.id)
        );

        return [...prev, ...uniqueNewData];
      });
    }

    if (searchProducts && searchProducts.results) {
      setSearchedPhotos((prev) => {
        const searchedData: Photo[] =
          searchProducts.results?.filter(
            (newSearch: Photo) =>
              !prev.some((prevSearch) => prevSearch.id === newSearch.id)
          ) || [];

        return [...prev, ...searchedData];
      });
    }
  }, [fetchRequest, searchProducts]);

  const researchPhotos = query ? searchedPhotos : photos;

  if (error) return null;
  if (fetchLoading && photos.length === 0) return <Loading>Loading...</Loading>;

  // rendering all fetched and searched photos
  return (
    <div>
      <SearchBar handleChange={handleSearch} />
      <MainPageStyle>
        {researchPhotos?.map((photo: Photo, index) => (
          <div key={index}>
            <PhotoCard photo={photo} />
          </div>
        ))}
        {loading && <Loading>Loading...</Loading>}
      </MainPageStyle>
    </div>
  );
};

export default HomePage;
