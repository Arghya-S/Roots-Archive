import "../styles/Upload.css"

function Upload(){
    return <div className="upload">
        <h2>Upload</h2>
        <form>
            <input type="file" id="myfile" name="myfile"/>
            <input id="submit-file" type="submit"/>
        </form>
        <p>Have any voice/written/video interviews that can help extract oral-history? Upload them now!</p>
        <ul>
            <li>No concern for privacy: any personally-identifiable-information will be omitted</li>
            <li>Get any unorganized data duly tagged according to the community</li>
            <li>It will be your choice to upload the information; you can choose piece-by-piece</li>
        </ul>
    </div>
}

export default Upload;