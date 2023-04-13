import React from "react";
import "../styles/home.css";

import Digi from "../images/digi.jpg";
import MyCity from "../images/mycity.jpg";
import HomeProp from "../components/HomeProp";
import { Link } from "react-router-dom";


const info = [
  { title: 'Helmsdale Media Digitization', src: Digi, desc: "Save your memories before they fade away. We can convert your video, photo and audio tapes to a shareable digital format at reasonable prices!", link: '/digitization' },
  { title: 'Helmsdale Media Publishing', src: MyCity, desc: "If the view outside your window is a bit ordinary, use your imagination to make it extraordinary!  Now available at Amazon and Barnes & Noble.", link: '/publishing' },
];


function home() {
  return (
    <center className="homePage">
      {info.map((homeProp, index) => (
        <HomeProp
          key={index}
          title={homeProp.title}
          src={homeProp.src}
          desc={homeProp.desc}
          link={<CustomLink to={homeProp.link}>Learn More</CustomLink>}
        />
      ))}
    </center>
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
