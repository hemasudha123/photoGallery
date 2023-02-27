import axios from "axios";

const PhotosList = async () => {
  const photos = await axios.get(
    "https://agencyanalytics-api.vercel.app/images.json"
  );

  return photos.data;
};

export default PhotosList;
