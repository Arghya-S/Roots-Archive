import Layout from "../components/Layout"
import "../styles/Browse.css"
import data from "../components/data"
import ArticleLists from "../components/ArticleLists"
import {useState} from "react"

export default function Browse(){
    const [searchValue, setSearchValue] = useState("");
    const filteredData =  data.filter(item => 
        item.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase()))
    );

    console.log(filteredData)
    return (
        <Layout idname="browse">
            <h1>Browse Submissions</h1>
            <input 
                id="search" 
                type="search" 
                placeholder="Search any region, community or language"
                value = {searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            
            <ArticleLists data={filteredData}/>
        </Layout>
    )
}