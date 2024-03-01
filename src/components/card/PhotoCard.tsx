import React, { useState } from "react";
import { Photo } from "../../interfaces/interface";
import ViewModal from "./ViewModal";
import { accessToken } from "../../accessToken/AccessToken";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(false);
  const [viewedPhoto, setViewedPhoto] = useState<Photo | null>(null);

  const onCardClick = async () => {
    setSelectedPhoto(true);

    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/${photo.id}?client_id=${accessToken}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        throw new Error("Response Failed");
      }

      const data = await res.json();
      setViewedPhoto(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card" onClick={onCardClick}>
        <h1>{photo.alt_description}</h1>
        <img src={photo?.urls.regular} alt="Product" />
      </div>
      {selectedPhoto && viewedPhoto && (
        <ViewModal
          photo={viewedPhoto}
          onClose={() => setSelectedPhoto(false)}
        />
      )}
    </>
  );
};

export default PhotoCard;
