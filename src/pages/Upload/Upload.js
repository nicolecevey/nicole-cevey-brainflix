import UploadForm from "../../components/UploadForm/UploadForm";
import axios from "axios";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";

function Upload(props) {
  // This page takes users form input and sends data to server so it can be posted to site

  const API =
    process.env.NODE_ENV === "production"
      ? "https://nicole-cevey-brainflix.herokuapp.com"
      : "http://localhost:8080";

  const submitHandler = (event) => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: uploadImage,
    };

    axios.post(`${API}videos`, newVideo).then((response) => {
      props.handleUpload();
      props.history.push("/");
    });
  };

  return (
    <>
      <UploadForm onSubmit={submitHandler} />
    </>
  );
}

export default Upload;
