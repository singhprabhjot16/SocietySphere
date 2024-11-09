import { useState } from "react";
import PhotoCard from "./PhotoCard";
import AddPhoto from "./AddPhoto";
import EditPhoto from "./EditPhoto";
import "../../styles/photo-gallery/PhotoGallery.css";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import NothingHere from "../reusable/NothingHere";
import AppUtils from "../../utilities/AppUtils";

function PhotoGallery({galleryArray, societyId}) {
    const [gallery, setGallery] = useState(galleryArray);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    console.log(galleryArray);

    function toggleAddPhoto() {
        setIsAdding(!isAdding);
    }

    function handleAddPhoto(newPhoto) {
        setGallery(prevGallery => [...prevGallery, newPhoto]);
        const formDataToSend = new FormData();
        formDataToSend.append('caption', newPhoto.caption);
        formDataToSend.append('imageUrl', newPhoto.imageUrl);
        console.log("form data to send", formDataToSend, societyId);
        AppUtils.updateSociety(societyId, formDataToSend, 'gallery');
    }

    function toggleEditPhoto() {
        setIsEditing(!isEditing);
    }

    function handleEditPhoto(updatedPhoto) {
        setGallery(prevGallery =>
            prevGallery.map(g =>
                g.id === selectedPhoto.id ? updatedPhoto : g
            )
        );
    }

    function handleDeletePhoto(photoToDelete) {
        setGallery(prevGallery =>
            prevGallery.filter(photo => photo.id !== photoToDelete.id)
        );
    }

    return (
        <div className="photo-gallery-container">
            <div className="filler"></div>
            
            <div className="gallery-container">
                {!AppUtils.checkEmpty(gallery) ? (
                    gallery.map((photo, idx) => (
                        <PhotoCard
                            key={idx}
                            photo={photo}
                        />
                    ))
                ) : (
                    <NothingHere />
                )}
            </div>

            <div className="changes-container">
                <button onClick={toggleAddPhoto} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon" /> Add
                </button>
                <button onClick={toggleEditPhoto} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon" /> Edit
                </button>
            </div>

            {isAdding && (
                <AddPhoto
                    handleAdd={handleAddPhoto}
                    toggleFunction={toggleAddPhoto}
                />
            )}

            {isEditing && selectedPhoto && (
                <EditPhoto
                    selectedPhoto={selectedPhoto}
                    handleEdit={handleEditPhoto}
                    handleDelete={handleDeletePhoto}
                    toggleFunction={() => toggleEditPhoto(null)} // Close the edit form
                />
            )}
        </div>
    );
}

export default PhotoGallery;