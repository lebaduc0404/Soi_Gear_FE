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
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title" style={rainbowTextStyle}>
                HOT TRONG TUẦN
              </h2>
            </div>
            <div className="section-body">
              <div className="shops grid grid-cols-4 gap-4">
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img src={ShopImg1} alt="" className="shop__image" />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img src={ShopImg2} alt="" className="shop__image" />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img src={ShopImg3} alt="" className="shop__image" />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
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
      width: 1200px;
      }
      .container-1{
        width: 1155px;
        height: 362px;
        background-color: #FFFFFF;
        margin-left: 180px;
        margin-top: 44px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
      }
        .shop__image {
          width: 250px;
          height: 208px;
          margin-left: 10px;
          object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
        }
          .section-body{
          margin-top: -30px;
          }
      `}</style>
    </>
  );
};

export default Shop;
