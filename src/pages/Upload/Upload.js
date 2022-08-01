import UploadForm from "../../components/UploadForm/UploadForm";
import axios from "axios";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { v4 as uuid } from "uuid";

function Upload(props) {
  // This page takes users form input and sends data to server so it can be posted to site

  const submitHandler = (event) => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: uploadImage,
    };

    axios
      .post("http://localhost:8080/videos", newVideo)
      .then((response) => {
        props.handleUpload();
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    event.target.reset();
  };

  return (
    <>
      <UploadForm onSubmit={submitHandler} />
    </>
  );
}

export default Upload;
