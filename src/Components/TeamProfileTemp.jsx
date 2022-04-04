import React from "react";

function TeamProfileTemp(props) {
  return (
    <div class="col-md-4">
      <img class="img-fluid imgCustom" src={props.pic} alt="Lead" />
      <div>
        <h5 class="titleCustom">{props.title}</h5>
        <div class="headerUnderlineCase">
          <a href={props.href} className="nameLink">
            {props.name}
          </a>
          <span class="headerUnderline"></span>
        </div>
      </div>
    </div>
  );
}

export default TeamProfileTemp;
