import "../../styles/photo-gallery/PhotoModal.css";

function PhotoModal({ photo, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={`https://drive.google.com/thumbnail?id=${photo.imageUrl}`} alt="" className="modal-image" />
                <div className="modal-details">
                    <p className="modal-caption poppins-regular">{photo.caption}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoModal;
