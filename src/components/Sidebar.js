import React from "react";
import chatGptLogo from '../assets/chatgpt.svg'
import { Edit, Edit2 } from "react-feather";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const Sidebar = ({recentData}) => {
  const reload=()=>{
    window.location.reload();
  }
  return (
    <div className="sidebar">
      <div className="upperside">
        <div className="upperside-top">
          <div className="logoWrapper">
            {" "}
            <img src={chatGptLogo} alt="" className="logo" />
          </div>
          <span style={{cursor:"pointer"}} onClick={reload} className="brand">New chat</span>
          <Edit style={{ marginLeft: "5rem" }} size={18}></Edit>
        </div>
      </div>

      <div className="lowerside">
        <div className="recentSearch">
          <span style={{marginBottom:"13px"}}>Today</span>
          {recentData && recentData.map(i=>
            <>
              <p>
               {[i]}
              </p>
             
            </>
          )}
        </div>
        <div className="recentSearch">
          <span>Previous 7 days</span>
          <p style={{ marginTop: "13px" }}>AttachFile Opens File Dialog</p>
          <p>AttachFile file dialog alert</p>
          <p>ChatSphere - Name Suggest...</p>
        </div>
        <div className="recentSearch">
          <span>Previous 30 days</span>
          <p style={{ marginTop: "13px" }}>Toggle Login on Register</p>
          <p>Switch Status Handling</p>
          <p>Library Website title </p>
        </div>
        <div className="lowest">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AutoAwesomeIcon
              sx={{
                fontSize: "3rem",
                border: "1px solid #8f8f8f;",
                borderRadius: "50%",
                padding: "5px",
              }}
            ></AutoAwesomeIcon>
            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Upgrade
            </span>
          </div>
          <div style={{ marginTop: "5px" }}>
            {" "}
            <p>Get GPT-4, DALL·E, and more</p>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="lowest"
        >
          <img
            className="profileImg"
            src="https://i.postimg.cc/BnMDHSKL/vecteezy-default-profile-account-unknown-icon-black-silhouette-20765399.jpg"
            alt=""
          />
          <span style={{ fontSize: "1.2rem" }}>Nikhil das</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
