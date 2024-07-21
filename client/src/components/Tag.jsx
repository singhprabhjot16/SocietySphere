import "../styles/Tag.css";

function Tag({tag, color}) {
    return (
        <div className="tag-container" style={{backgroundColor: color}}>
            <p className="tag inter">{tag}</p>
        </div>
    )
}

export default Tag;