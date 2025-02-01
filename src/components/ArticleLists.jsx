/* eslint-disable react/prop-types */
import Card from "./Card.jsx"
import "../styles/ArticleLists.css"

export default function ArticleLists({ data }) {
    return (
        <section className="articles">
            {data.map((articleDetail) => (
                <Card
                    key={articleDetail.id} 
                    heading={articleDetail.heading}
                    tags={articleDetail.tags}
                    timeUpdate={articleDetail.timeUpdate}
                    imageSrc={articleDetail.imageSrc}
                />
            ))}
        </section>
    );
}