import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us On</h2>

      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start bg-base-100 btn-outline"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start bg-base-100 btn-outline"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item justify-start bg-base-100 btn-outline"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
<h2>Find Us On</h2>;
