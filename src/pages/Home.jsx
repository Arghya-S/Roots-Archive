import Layout from "../components/Layout";
import "../styles/Home.css";

export default function Home() {
    return (
        <Layout idname="home">  {/* Matching the CSS selector */}
            <div className="definition">
                <h1>Roots Archive</h1>
                <p className="ipa">/ruːts ˈɑːkaɪv/</p>
                <ol>
                    <li>Browse and submit folktales/beliefs/linguistic-data from your region or community</li>
                    <li>Post and organize oral-histories on a single platform</li>
                    <li>AI organizes historical archives into tags</li>
                </ol>
            </div>
            <input id="search" type="search" placeholder="Search any region, community or language" />
        </Layout>
    );
}