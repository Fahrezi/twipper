import React from "react";
import styled from "styled-components";
import "./styles/card.css";

import Button from "./Button";

export default function Card({
  img,
  title,
  fullname,
  time,
  mainTalk,
  comment,
  retweet,
  like
}) {
  return (
    <div className="card">
      <img className="card-profile">{img}</img>
      <div className="card-data">
        <p className="nickname">{title}</p>
        <p className="fullname">{fullname}</p>
        <small className="time">{time}</small>
        <p className="main-talk">{mainTalk}</p>
        <div className="action">
          <span className="comment">{comment}</span>
          <span className="retweet">{retweet}</span>
          <span className="like">{like}</span>
          <span className="download"></span>
        </div>
      </div>
    </div>
  );
}
