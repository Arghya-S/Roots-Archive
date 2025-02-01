import Layout from "../components/Layout"
import "../styles/Browse.css"
import data from "../components/data"
import ArticleLists from "../components/ArticleLists"

export default function Browse(){
    console.log(data);
    return (
        <Layout idname="browse">
            <h1>Browse Submissions</h1>
            <input id="search" type="search" placeholder="Search any region, community or language"/>
            <ArticleLists data={data}/>
        </Layout>
    )
}