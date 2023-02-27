import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: "short",
    day: "2-digit",
    year: "numeric"
  })
}

const PhotoDetails = ({ photo, photos }) => {
  const [fav, setFav] = useState(true)

  return (
    <div style={{ backgroundColor: "	#ffffff", padding: "10px" }}>
      <img
        src={photo.url}
        alt={photo.alt}
        style={{ width: "400px", height: "350px", borderRadius: "5px" }}
      />
      <h2 style={{ fontFamily: "serif", fontSize: "23px", color: "black", fontStyle: "normal", fontWeight: "600" }}>{photo.filename}</h2>
      <p
        style={{
          color: "#686868",
          fontSize: "16px",
          fontWeight: "bold",
          fontStyle: "normal",
        }}>
        {" "}
        {(photo.sizeInBytes / 1000000).toFixed(2)} MB
      </p>
      <span style={{ display: "flex", justifyContent: "flex-end" }}>

        {!photo.favorited && <FavoriteBorderIcon onClick={() => { photo.favorited = true; console.log(photo.favorited) }} />}
        {photo.favorited && <FavoriteIcon onClick={() => { photo.favorited = false; console.log(photo.favorited) }} />}
      </span>
      <h2
        style={{
          fontFamily: "serif",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: "600",
        }}>
        Information
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}>
        <span
          style={{
            color: "#686868",
            fontSize: "16px",
            fontWeight: "bold",
            fontStyle: "normal",
          }}>
          Uploaded By
        </span>
        <span style={{
          color: "##474744",
          fontSize: "16px",
          fontWeight: "bold",
          fontStyle: "normal"
        }}>
          {photo.uploadedBy}
        </span>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}>
        <span
          style={{
            color: "#686868",
            fontSize: "16px",
            fontWeight: "bold",
            fontStyle: "normal",
          }}>
          Created
        </span>
        <span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {formatDate(photo.createdAt)}
        </span>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}>
        <span
          style={{
            color: "#686868",
            fontSize: "16px",
            fontWeight: "bold",
            fontStyle: "normal",
          }}>
          Last modified
        </span>
        <span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {formatDate(photo.updatedAt)}
        </span>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}>
        <span
          style={{
            color: "#686868",
            fontSize: "16px",
            fontWeight: "bold",
            fontStyle: "normal",
          }}>
          Dimensions
        </span>
        <span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {photo.dimensions.height} X {photo.dimensions.width}
        </span>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}>
        <span
          style={{
            color: "#686868",
            fontSize: "16px",
            fontWeight: "bold",
            fontStyle: "normal",
          }}>
          Resolution
        </span>
        <span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {photo.resolution.height} X {photo.resolution.width}
        </span>
      </div>
      <hr />
      <h2 >Description</h2>
      <p style={{ fontFamily: "normal", fontSize: "16px", color: "black" }}>{photo.description}</p>
      <button type="submit"
        onClick={() => { photos = photos.map((obj) => { if (obj.id === photo.id) { obj.deleted = true } }); console.log(photos, photo) }}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          fontSize: "20px",
        }}>
        Delete
      </button>
    </div>
  );
};

export default PhotoDetails;
