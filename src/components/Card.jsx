/* eslint-disable react/prop-types */
import "../styles/Card.css"

function Card({key, imageSrc, heading, tags, timeUpdate}){
    return (
    <div key={key} className="article-description">
        <img className="thumbnail" src={`${imageSrc}`} alt={heading}/>
        <p className="heading">{heading}</p>
        <div className="tags">
            {
                // eslint-disable-next-line react/jsx-key
                tags.map(tag => <div className="tag">{tag}</div>)
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