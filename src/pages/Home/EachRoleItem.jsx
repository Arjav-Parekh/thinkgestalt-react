import React from "react";

function EachRoleItem(props){
    return(
      <div className="role-card">
      {props.name}
    </div>
    );
  }

export default EachRoleItem;