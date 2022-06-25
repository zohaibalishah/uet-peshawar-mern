import React from "react";

export default function Detail(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        style={{ height: "200px" }}
        src={props.img}
        class="card-img-top"
      />

      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
