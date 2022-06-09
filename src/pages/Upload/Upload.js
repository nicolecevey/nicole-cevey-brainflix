import UploadForm from "../../components/UploadForm/UploadForm";
import axios from "axios";
import Swal from "sweetalert2";

function Upload(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        const newVideo = {
            title: event.target.title.value,
            description: event.target.description.value
        }

        axios
        .post("http://localhost:8085/videos", newVideo)
        .then(response => {
            console.log(response.data)
            Swal.fire({
                title: 'Success!',
                text: 'Your video has been successfully uploaded',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
            props.history.push("/")
          })
    };

    return(
        <> 
            <UploadForm onSubmit={submitHandler}/>
        </>
    )
}

export default Upload;