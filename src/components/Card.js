import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img style={{ height: "200px" }} src={props.img} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{props.id}</h5>
        <p class="card-text">
         {props.title}
        </p>
        <Link to={`/detail/${props.id}`} class="btn btn-primary">
          Detail
        </Link>
      </div>
    </div>
  );
}
