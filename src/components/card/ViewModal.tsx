import React from "react";
import { CardModal, Overlay } from "../../pages/Pages";
import { Photo, ModalPhoto } from "../../interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ViewModalProps {
  onClose: () => void;
  photo: Photo | ModalPhoto;
}

const ViewModal: React.FC<ViewModalProps> = ({ photo, onClose }) => {
  return (
    <>
      <CardModal key={photo.id}>
        <FontAwesomeIcon onClick={onClose} className="icon" icon={faXmark} />
        <img src={photo?.urls.regular} alt={photo.alt_description} />
        <div className="details">
          <p>
            <b>Title:</b> {photo.alt_description}
          </p>
          <p>
            <b>Views: </b>
            {(photo as ModalPhoto).views}
          </p>
          <p>
            <b>Likes:</b> {(photo as ModalPhoto).likes}
          </p>
          <p>
            <b>Downlaods:</b> {(photo as ModalPhoto).downloads}
          </p>
        </div>
      </CardModal>
      <Overlay onClick={onClose}></Overlay>
    </>
  );
};

export default ViewModal;
