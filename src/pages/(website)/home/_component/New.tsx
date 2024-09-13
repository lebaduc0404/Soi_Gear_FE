// import React from "react";
import ProductList from "../../product/_component/ProductList";

const New = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 8s infinite",
  };

  const keyframes = `
    color: black;
  `;
  return (
    <>
      <style>{keyframes}</style>
      <section className="mt-[10px]">
        <div className="container2">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title" style={rainbowTextStyle}>
                SẢN PHẨM MỚI
              </h2>
            </div>
            <ProductList featured={true} />
          </div>
        </div>
      </section>
      <style>{`
      .container2{
        width: 1195px;
        height: 763px;
        background-color: #E6E6E6;
        margin-left: 162px;
        margin-top: 44px;
        border-radius: 10px;
      }
        .section-heading__title{
                font-size: 24px;
        }
      `}</style>
    </>
  );
};

export default New;
