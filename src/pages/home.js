import React from "react";
import "../styles/home.css";

import Digi from "../images/digi.jpg";
import MyCity from "../images/mycity.jpg";
import HomeProp from "../components/HomeProp";
import { Link } from "react-router-dom";
// import Digitization from "./digitization";
// import Publishing from "./publishing";

const info = {
  title: ["Helmsdale Media Digitization", "Helmsdale Media Publishing"],
  src: [Digi, MyCity],
  desc: [
    "Save your memories before they fade away. We can convert your video, photo and audio tapes to a shareable digital format at reasonable prices!",
    "If the view outside your window is a bit ordinary, use your imagination to make it extraordinary!  Now available at Amazon and Barnes & Noble.",
  ],
  link: ["/digitization", "/publishing"],
};

function home() {
  return (
    <>
        <div className="homePage">
          <HomeProp
            title={info.title[0]}
            src={Digi}
            desc={info.desc[0]}
            link={<CustomLink to={info.link[0]}>Learn More</CustomLink>}
          />

          <HomeProp
            title={info.title[1]}
            src={MyCity}
            desc={info.desc[1]}
            link={<CustomLink to={info.link[1]}>Learn More</CustomLink>}
          />
        </div>
    </>
  );
}

export default home;

function CustomLink({ to, children, ...props }) {
  return (
      <li>
      <Link to = {to} {...props}>
      { children }
      </Link>
      </li>
  )
}
