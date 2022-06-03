import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss"

function Upload(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        alert("Publish")
        props.history.push("/")
    }

    return(
        <>
            <img src={thumbnail}></img>
            <form 
                onSubmit={submitHandler} 
                className="upload-form">
                <label className="upload-form__label"> TITLE YOUR VIDEO
                    <input placeholder="Add a title to your video"></input>
                </label>
                <label className="upload-form__label"> ADD A VIDEO DESCRIPTION
                    <textarea placeholder="Add a description to your video">
                    </textarea>
                </label>
                <button>PUBLISH</button>
            </form>
        </>
    )
}

export default Upload;