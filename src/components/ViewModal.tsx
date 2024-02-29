import React from "react";
import { CardModal } from "../pages/Pages";
import { Photo, ModalPhoto } from "../interfaces/interface";

interface ViewModalProps {
  onClose: () => void;
  photo: Photo | ModalPhoto; // Use a union type
}

const ViewModal: React.FC<ViewModalProps> = ({ photo, onClose }) => {
  return (
    <CardModal key={photo.id}>
      <img src={photo?.urls.regular} alt={photo.alt_description} />
      <div>
        <p onClick={onClose}>ჯ</p>
        <p>{photo.alt_description}</p>
        <p>{(photo as ModalPhoto).views}</p>
        <p>{(photo as ModalPhoto).likes}</p>
        <p>{(photo as ModalPhoto).downloads}</p>
      </div>
    </CardModal>
  );
};

export default ViewModal;
