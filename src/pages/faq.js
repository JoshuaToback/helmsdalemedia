import React from "react";
import { Link } from "react-router-dom";

import "../styles/faq.css"

function faq() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="questionContainer">
        <div className="question">
          <h3>How Do I Get Started?</h3>
          <p>Contact us at <a href='mailto:info@helmsdalemedia.com'>info@helmsdalemedia.com</a> to discuss your project and confirm information on pricing and turnaround time. </p>
        </div>

        <div className="question">
          <h3>How Do You Get My Media?</h3>
          <p>You will drop off your media with your name and phone number in the box/bag to one of our <CustomLink to="/dropoff">secure locations in Fuquay-Varina or Cary, NC</CustomLink></p>
        </div>

        <div className="question">
          <h3>How Long Does It Take?</h3>
          <p>This depends on the type and quantity of media along with the current queue of orders. We will provide you with an ETA during our initial conversation. </p>
        </div>

        <div className="question">
          <h3>How Do I Get My Files?</h3>
          <p>You can supply us with a 32GB Flash Drive or hard drive or purchase a 32GB flash drive from us for an additional $5. We can also copy the files up to your cloud storage. We’ll let you know if you need a larger flash drive.</p>
        </div>

        <div className="question">
          <h3>What If Something Happens To My Media?</h3>
          <p>
          While we take extraordinary care of all media, due to the age and unknown method in which the media was stored, we do not take responsibility for any damaged media.
          <strong> There is always a risk associated with playback and by using our service, you accept that risk. </strong>
          We will not hold you responsible for any damage to our equipment caused by failed media. 

          </p>
        </div>

        <div className="question">
          <h3>What If My Tape Is Blank?</h3>
          <p>Unless told otherwise, I will not digitize tapes that appear to be blank - no content in the first 2 minutes of the tape - there will be no charge for that tape. I will put those tapes aside and contact you to see If you'd like to be sure there is not content in the middle or the end of the tape. 

I will also digitize the entire tape, even if there is only a few minutes of content at the beginning. I will trim the final file down if there is no content, but this will make sure something doesn't pop up at the end of the tape. </p>
        </div>

        <div className="question">
          <h3>Is There Content You Won't Digitize</h3>
          <p>

I cannot digitize any commercial content or content that depicts violence to people or animals or represents views and values not consistent with my own. 
</p>
        </div>
      </div>
    </div>
  );
}

export default faq;


function CustomLink({ to, children, ...props }) {
  return (
      <li className="link">
      <Link to = {to} {...props}>
      { children }
      </Link>
      </li>
  )
}
