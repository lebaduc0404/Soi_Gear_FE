import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { useParams } from "react-router-dom";
import ProductList from "../../_component/ProductList";
import Banner from "@/pages/(website)/home/_component/Banner";
import Filter from "../../_component/Filter";
import instance from "@/config/axios";
import Test from "@/pages/test/test";

const CategoryDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["CATEGORY_DETAIL", id],
        queryFn: async () => {
            const { data } = await instance.get(
              `/categories/${id}`
            );
          // console.log(data);
            return data;
        },
    });
    if (isLoading) return <div></div>;
    return (
      <>
        <Test />
        <Banner />
        <Filter />
        <section className="news">
          <div className="container-3 flex justify-center items-center}">
            <div className="">
              <div className="section-heading w-[100%] ml-[-5px]">
                <h2 className="section-heading__title">{data.category.name}</h2>
              </div>
              <ProductList data={data.product} />
            </div>
          </div>
        </section>

        <style>{`

      .container-3{
        width: 72.65625vw;
        height:  103.831vh;
        background-color: #FFFFFF;
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

export default CategoryDetail;
