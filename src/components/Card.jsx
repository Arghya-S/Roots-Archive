/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../styles/Card.css"

function Card({key, imageSrc, heading, tags, timeUpdate}){
    return (
    <div key={key} className="article-description">
        <img className="thumbnail" src={`${imageSrc}`} alt={heading}/>
        <p className="heading">{heading}</p>
        <div className="tags">
            {
                tags.map(tag => {
                    if (tag == "AI-ARCHIVED"){
                        return <div className="tag ai-archived">{tag}</div>
                    } else {
                        return <div className="tag">{tag}</div> 
                    }
                })
            }
        </div>
        <p className="time-update">{
            (timeUpdate.magnitude > 1) ? `${timeUpdate.magnitude} ${timeUpdate.type}s ago`
            : `${timeUpdate.magnitude} ${timeUpdate.type} ago`
        }</p>
    </div>
    )
}

export default Card;