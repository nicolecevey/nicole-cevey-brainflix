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
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <h3 className="upload__thumbnail-heading">VIDEO THUMBNAIL</h3>
                <img 
                    src={thumbnail}
                    className="upload__thumbnail"
                >
                </img>
                <form 
                    onSubmit={submitHandler} 
                    className="upload-form">
                    <label className="upload-form__label"> TITLE YOUR VIDEO
                        <input 
                            placeholder="Add a title to your video"
                            className="upload-form__title-input"
                            >
                        </input>
                    </label>
                    <label className="upload-form__label"> ADD A VIDEO DESCRIPTION
                        <textarea 
                            placeholder="Add a description to your video"
                            className="upload-form__description-input"
                            >
                        </textarea>
                    </label>
                    <button className="upload-form__button">PUBLISH</button>
                </form>
                <button className="upload__cancel-button">CANCEL</button>
            </section>
        </>
    )
}

export default Upload;