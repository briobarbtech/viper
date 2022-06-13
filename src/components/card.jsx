import React from "react";

export function Card() {
  return (
    <div className="card-lineup" datatype="card-lineup">
      <div className="title-div">
        <p className="title">CT</p>
        <i className="fa-solid fa-eye"></i>
      </div>
      <div className="lineup">
        <div className="info-lineup">
          <div className="info-details">
            <p className="title-info -info" >Map:</p>
            <p className="title-response -info">Ascent</p>
          </div>
          <div className="info-details">
            <p className="title-info -info" >Site:</p>
            <p className="title-response -info">B</p>
          </div>
          <div className="info-details">
            <p className="title-info -info" >Ability:</p>
            <p className="title-response -info">Snike Bite</p>
          </div>
        </div>
        <div className="images-lineup">
          <img src={require('../assets/img/lineup-1.png')} alt="" className="img-position -image-info" />
          <img src={require('../assets/img/lineup-1-1.png')} alt="" className="img-lineup -image-info" />
        </div>
        <div className="video-lineup">
          <video src={require('../assets/videos/video1.mp4')} controls className="video-preview"/>
        </div>
      </div>
    </div>
  )

}


