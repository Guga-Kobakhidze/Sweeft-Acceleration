import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useSearch from "../hooks/useSearch";
import { Photo } from "../interfaces/interface";
import { Container, HistoryStyle, Loading } from "../assets/styles/Pages";
import PhotoCard from "../components/card/PhotoCard";

const HistoryPage: React.FC = () => {
  const [value] = useLocalStorage<string[]>("ValueKeys", []);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);
  const [cache, setCache] = useState(false);
  const { loading, searchProducts, setQuery } = useSearch();

  const onClick = (val: string) => {
    setQuery(val);
    setCache(true);
    setSearchedPhotos([]);
  };

  useEffect(() => {
    if (searchProducts && searchProducts.results) {
      setSearchedPhotos((prev) => {
        const searchedData: Photo | any = searchProducts.results?.filter(
          (newSearch: Photo) =>
            !prev.some((prevSearch) => prevSearch.id === newSearch.id)
        );

        return [...prev, ...searchedData];
      });
    }
  }, [searchProducts]);

  return (
    <div>
      <HistoryStyle>
        <select onChange={(e) => onClick(e.target.value)}>
          <option value="">Searched History</option>
          {value.map((searched, index) => (
            <option key={index} value={searched}>
              {searched}
            </option>
          ))}
        </select>
        <h1>Choose your searched Photos</h1>
      </HistoryStyle>

      {cache && (
        <div>
          <Container>
            {searchedPhotos?.map((photo: Photo, index) => (
              <div key={index}>
                <PhotoCard photo={photo} />
              </div>
            ))}
            {loading && <Loading>Loading...</Loading>}
          </Container>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
