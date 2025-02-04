import Layout from "../components/Layout"
import Upload from "../components/Upload"
import "../styles/OralHistory.css"

function OralHistory(){
    return (
        <Layout idname="oral-history">
            <Upload/>
            <div className="tray">AI resulted data will come here</div>
        </Layout>
    )
}

export default OralHistory;