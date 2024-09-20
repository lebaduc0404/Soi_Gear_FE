import { ShopImg1, ShopImg2, ShopImg3, ShopImg4 } from "@/components/icons";

const Shop = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 5s infinite",
  };

  const keyframes = `
    color: black;
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section className="shop">
        <div className="container-1">
          <div className="">
            <div className="section-heading">
              <h2 className="section-heading__title" style={rainbowTextStyle}>
                HOT TRONG TUẦN
              </h2>
            </div>
            <div className="section-body">
              <div className="shops grid grid-cols-4">
                <div className="shop-item">
                  <a
                    href="/detail/66ed1aca9481433e8a2c2ab7"
                    className="shop__link"
                  >
                    <img src={ShopImg1} alt="" className="shop__image" />
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    href="/detail/66ed1b199481433e8a2c2ad3"
                    className="shop__link"
                  >
                    <img src={ShopImg2} alt="" className="shop__image" />
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    href="/detail/66ed1b759481433e8a2c2afd"
                    className="shop__link"
                  >
                    <img src={ShopImg3} alt="" className="shop__image" />
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    href="/detail/66ed1bc79481433e8a2c2b0b"
                    className="shop__link"
                  >
                    <img src={ShopImg4} alt="" className="shop__image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
      .container-1{
        width: 72.65625vw;
        height: 49vh;
        background-color: #FFFFFF;
        margin-left: 13.286vw;
        margin-top: 5.962vh;
        border-radius: 10px;
        // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
      }
        .shops{
          width: 67.578125vw;
          hieght: 28.18vh
        }

        .shop__image {
          width: 15.625vw;
          height: 28.184vh;
          margin-left: 2.6vw;
          object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
        }
          .shop-item{
            width: 16.28vw;
            height: 28.18vh;
            gap: 1px;
          }
          .section-body{
          margin-top: 4vh;
          }
      `}</style>
    </>
  );
};

export default Shop;
