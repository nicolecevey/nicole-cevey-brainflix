import UploadForm from "../../components/UploadForm/UploadForm";
import axios from "axios";

function Upload(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        const newVideo = {
            title: event.target.title.value,
            description: event.target.description.value
        }

        axios
        .post("http://localhost:8085/videos", newVideo)
        .then((response) => {
            props.handleUpload();
            props.history.push("/");
          })
    };

    return(
        <> 
            <UploadForm onSubmit={submitHandler}/>
        </>
    )
}

export default Upload;