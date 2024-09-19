// import React from "react";
import ProductList from "../../product/_component/ProductList";

const New = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 5s infinite",
  };

  const keyframes = `
    color: black;
  `;
  return (
    <>
      <style>{keyframes}</style>
      <section className="mt-[1.355vh]">
        <div className="container2 flex justify-center items-center">
          <div className="">
            <div className="section-heading w-[100%] ml-[-5px]">
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
        width: 72.65625vw;
        height:  103.831vh;
        background-color: #FFFFFF;
        // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        margin-left: 13.151vw;
        margin-top: 5.962vh;
        border-radius: 10px;
      }
        .section-heading__title{
          font-size: 3.252vh;
        }
      `}</style>
    </>
  );
};

export default New;
