import Banner from "../home/_component/Banner";
import Services from "../home/_component/Services";
import Filter from "./_component/Filter";
import PageNumber from "./_component/PageNumber";
import ProductList from "./_component/ProductList";

const ShopPage = () => {
    const rainbowTextStyle = {
      animation: "rainbowText 8s infinite",
    };
    return (
      <>
        <Banner />
        <Filter />
        {/* <Categories /> */}
        <section className="shop">
          <div className="container-4">
            <div className="container">
              <div className="section-heading">
                <h2 className="section-heading__title" style={rainbowTextStyle}>
                  TẤT CẢ SẢN PHẨM
                </h2>
              </div>
              <ProductList />
            </div>
          </div>
        </section>
        <PageNumber />
        <Services />

        <style>{`

      .container-4{
        width: 1195px;
        height: 763px;
        background-color: #FFFFFF;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        margin-left: 162px;
        margin-top: 44px;
        border-radius: 10px;
      }
      `}</style>
      </>
    );
};

export default ShopPage;
