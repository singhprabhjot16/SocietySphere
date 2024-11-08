import "../../styles/reusable/NumberLength.css";

function  NumberLength({length}) {
    return (
        <div className="number-length-container">
            <p className="poppins-medium">{length}</p>
        </div>
    )
}

export default NumberLength;