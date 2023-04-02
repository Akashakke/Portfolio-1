import React, { useContext } from "react";
import "./Works.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span style={{ fontSize: "40px" }}>Frontend , Backend as well as Database</span>
          
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src='https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png' alt="" width={'160px'}/>
          </div>
          <div className="w-secCircle">
            <img src='https://cdn.iconscout.com/icon/free/png-128/nodejs-2-226035.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img src='https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-Best-for-Developing-Web-Apps.png' alt="" width={'200px'}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' alt=""width={'170px'} />
          </div>
          <div className="w-secCircle">
            <img src='https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png' alt="" width={'170px'}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
