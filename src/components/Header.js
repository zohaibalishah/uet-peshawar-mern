import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <Link to={"/"} class="nav-link active" aria-current="page" href="#">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link to={"/login"} class="nav-link" href="#">
          Login
        </Link>
      </li>
      <li class="nav-item">
        <Link to={"/signup"} class="nav-link" href="#">
          Signup
        </Link>
      </li>
    
    </ul>
  );
}
