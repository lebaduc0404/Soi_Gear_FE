import Test from "@/pages/test/test";
import Banner from "../home/_component/Banner";
// import Services from "../home/_component/Services";
import Filter from "./_component/Filter";
import PageNumber from "./_component/PageNumber";
import ProductList from "./_component/ProductList";
import { useEffect, useState } from "react";
import { ICategory } from "@/common/types/categories";
import instance from "@/config/axios";
// import Categories from "./_component/CategoryList";

const ShopPage = () => {
    const rainbowTextStyle = {
      animation: "rainbowText 8s infinite",
    };
  
  const [data, setData] = useState<ICategory[]>([])
  // console.log(data);
  
  const API = async () => {
    const { data } = await instance.get(`/categories`);
    setData(data)
  }

  useEffect(() => {
    API();
  },[])
    return (
      <>
        <section className="bg-white filters w-[72.65625vw] h-[40px] ml-[13.151vw]">
          <div className="container">
            <div className="filters-around">
              <div className="filters-choose mt-[-43px]">
                <div className="filters-choose__action">
                  <span className="filters__text text-[15px]">Trang Chủ</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                  <span className="filters__text text-[15px]">Danh mục</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                </div>

                <div className="filters-show">
                  <span className="filters-show__text text-[15px]">
                    Tất cả sản phẩm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Test />
        <Banner />
        <Filter />
        {/* <Categories /> */}
        <section className="shop">
          <div className="container-4 flex justify-center items-center">
            <div className="">
              <div className="section-heading flex items-center justify-between w-[100%] ml-[-5px]">
                <h2
                  className="section-heading__title text-2xl font-bold mr-5"
                  style={rainbowTextStyle}
                >
                  TẤT CẢ SẢN PHẨM
                </h2>
                <div className="btn-1 flex space-x-[20px]">
                  {data.map((item) => (
                    <button key={item._id}>
                      <div className="border border-gray-600 px-4 py-2 rounded-[8px] hover:bg-sky-200">
                        {item.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <ProductList />
            </div>
          </div>
        </section>
        <PageNumber />
        {/* <Services /> */}

        <style>{`

      .container-4{
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

export default ShopPage;
