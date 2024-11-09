import { useState } from 'react';
import "../../styles/photo-gallery/PhotoCard.css";
import PhotoModal from './PhotoModal.jsx';

function PhotoCard({ photo }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="photo-card-container" onClick={handleClick}>
                <img src={`https://drive.google.com/thumbnail?id=${photo.imageUrl}`} alt="" className="photo-image" />
            </div>
            {isModalOpen && (
                <PhotoModal
                    photo={photo}
                    onClose={handleClose}
                />
            )}
        </>
    );
}

export default PhotoCard;
