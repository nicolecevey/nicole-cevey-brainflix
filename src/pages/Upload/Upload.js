import UploadForm from "../../components/UploadForm/UploadForm";
import axios from "axios";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";

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
      .post("https://nicole-cevey-brainflix-api.vercel.app/videos", newVideo)
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
