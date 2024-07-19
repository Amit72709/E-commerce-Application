import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3>Privacy Policy</h3>
          <p>This privacy policy outlines how we collect, use, and
           protect the personal information of our customers on our 
          ecommerce website. By using our website, you agree to the 
          terms outlined in this policy.</p>
          <p>If you have any questions or concerns about our privacy policy, please contact us at [contact information].

          By using our website, you agree to the terms of this privacy policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
