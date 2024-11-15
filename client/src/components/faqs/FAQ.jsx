import { useState } from "react";
import Accordian from "../reusable/Accordion";
import "../../styles/faqs/FAQ.css";
import dummyData from "../../../dummyData.json";
import AddFAQ from "./AddFAQ";
import EditFAQ from "./EditFAQ";
import addIcon from "../../assets/add.svg";
import editIcon from "../../assets/edit.svg";
import AppUtils from "../../utilities/AppUtils";
import NothingHere from "../reusable/NothingHere";

function FAQ({ faq, societyId, isLogin, isSocietyHead }) {
  const [faqs, setFaqs] = useState(faq);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  function handleAdd(formData) {
    // setFaqs(prevCoordinators => [...prevCoordinators, formData]);
    // const modifiedFormData = {
    //     question: "",
    //     answer: ""
    // };

    const formDataToSend = new FormData();
    formDataToSend.append("question", formData.question);
    formDataToSend.append("answer", formData.answer);
    AppUtils.updateSociety(societyId, formDataToSend, "faq");
    setIsAdding(false);
  }

  function toggleAddFAQ() {
    setIsAdding(!isAdding);
  }

  function toggleEditMode() {
    setIsEditing(!isEditing);
  }
  function handleEdit(formData) {
    console.log('formData: ', formData)
    const formDataToSend = new FormData();
    formDataToSend.append("id", formData.id);
    formDataToSend.append("question", formData.question);
    formDataToSend.append("answer", formData.answer);
    // AppUtils.editUpdateSociety(societyId, formData, 'faq')
    AppUtils.editUpdateSociety(societyId, formDataToSend, "faq")
      .then((response) => {
        console.log("response", response);
        if (response.message === "FAQs updated successfully") {
          // Update only the target FAQ in the array
          setFaqs((prevFaqs) =>
            prevFaqs.map((faq) => {
                console.log('Current FAQ:', faq); // Log each FAQ in the array
                console.log('Matching IDs:', faq.id === response.id); // Log whether the ID matches
                return faq.id === response.id ? response : faq;
            })
        );
        
        } else {
          console.error("Error updating FAQ on frontend:", response.message);
        }
      })
      .catch((error) => {
        console.error("Error updating FAQ:", error);
      });
  }

  function handleDelete({id}) {
    setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq.id !== id));
    const formDataToSend = new FormData();
    formDataToSend.append("id", id);
    AppUtils.deleteSocietyData(societyId, formDataToSend, "faq");
    setIsEditing(false);
  }

  function startEditing(faq) {
    console.log('faq: ', faq)
    setSelectedFAQ(faq);
  }

  return (
    <div className="faqs-container">
      <div className="filler"></div>
      <div className="faq-container">
        {Array.isArray(faqs) && faqs.length > 0 ? (
          faqs.map((q, idx) => (
            <div
              key={idx}
              onClick={() => isEditing && startEditing(q)}
              className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
            >
              <Accordian
                title={q.question}
                content={q.answer}
                date={q.date}
                key={idx}
              />
            </div>
          ))
        ) : (
          <NothingHere />
        )}
      </div>
      {isLogin && isSocietyHead && <div className="changes-container">
        <button
          onClick={toggleAddFAQ}
          className="change-button poppins-regular"
        >
          <img src={addIcon} alt="Add" className="icon" /> Add
        </button>
        <button
          onClick={toggleEditMode}
          className="change-button poppins-regular"
        >
          <img src={editIcon} alt="Edit" className="icon" /> Edit
        </button>
      </div>}
      {isAdding && (
        <AddFAQ handleAdd={handleAdd} toggleFunction={toggleAddFAQ} />
      )}
      {selectedFAQ && isEditing && (
        <EditFAQ
          selectedFAQ={selectedFAQ}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          toggleFunction={() => {
            setIsEditing(false);
            setSelectedFAQ(null);
          }}
        />
      )}
    </div>
  );
}

export default FAQ;
