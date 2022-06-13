import React from "react";

export function Card(props) {
  return (
    <div className="card-lineup" datatype="card-lineup">
      <div className="title-div">
        <p className="title">{props.Title}</p>
        <i className="fa-solid fa-eye"></i>
      </div>
      <div className="lineup">
        <div className="info-lineup">
          <div className="info-details">
            <p className="title-info -info" >Map</p>
            <p className="title-response -info">{props.Map}</p>
          </div>
          <div className="info-details">
            <p className="title-info -info" >Site:</p>
            <p className="title-response -info">{props.Site}</p>
          </div>
          <div className="info-details">
            <p className="title-info -info" >Ability:</p>
            <p className="title-response -info">{props.Ability}</p>
          </div>
        </div>
        <div className="images-lineup">
          <img src={require(props.img_position)} alt="" className="img-position -image-info" />
          <img src={require(props.img_lineup)} alt="" className="img-lineup -image-info" />
        </div>
        <div className="video-lineup">
          <video src={require(props.video_preview)} controls className="video-preview"/>
        </div>
      </div>
    </div>
  )

}


