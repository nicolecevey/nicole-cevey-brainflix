import UploadForm from "../../components/UploadForm/UploadForm";

function Upload(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        alert("Video has been successfully uploaded")
        props.history.push("/")
    }

    return(
        <> 
            <UploadForm submitHandler={submitHandler}/>
        </>
    )
}

export default Upload;