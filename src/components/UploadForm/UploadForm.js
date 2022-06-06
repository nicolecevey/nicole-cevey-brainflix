import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

const UploadForm = ({submitHandler}) => {
    // Renders upload vieo page
    
    return (
        <main className="upload-page">
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__container">
                    <div className="upload__thumbnail-container">
                        <h3 className="upload__thumbnail-heading">VIDEO THUMBNAIL</h3>
                        <img 
                            src={thumbnail}
                            className="upload__thumbnail"
                            alt="Close-up of handle-bars of bike in motion"
                        >
                        </img>
                    </div>
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
                        <div className="upload-form__buttons">
                            <button className="upload-form__publish-button">PUBLISH</button>
                            <div className="upload-form__cancel-button">CANCEL</div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default UploadForm;