const Services = () => {
    return (
      <>
        <section className="services">
          <div className="container-fluid">
            <div className="service-list">
              <div className="service-item -mt-12 -mr-12 -ml-10">
                <img
                  // src="/src/assets/icons/10.svg"
                  alt=""
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name text-white text-[14px]">
                    Chất lượng cao
                  </h4>
                  <p className="service__description text-white text-[14px]">
                    Được gia công từ vật liệu chất lượng
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item -mt-12">
                <img
                  alt=""
                  // src="/src/assets/icons/11.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name text-[14px]">Bảo hành</h4>
                  <p className="service__description text-[14px]">
                    Bảo hành lên đến 24 tháng
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item -mt-12 -mr-12">
                <img
                  alt=""
                  // src="/src/assets/icons/12.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name text-[14px]">
                    Miễn phí vận chuyển
                  </h4>
                  <p className="service__description text-[14px]">
                    Từ sản phẩm 550$
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item -mt-12">
                <img
                  alt=""
                  // src="/src/assets/icons/13.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name text-[14px]">24/7 Hỗ trợ</h4>
                  <p className="service__description text-[14px]">
                    Hỗ Trợ Chuyên Dụng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style>{`
          .services{
            margin-bottom: -78px;
          }
              .service-list{
                background-color: #6C7B8B;
                height: 108px;
              }
                .service__name,
                .service__description {
                  color: white !important;
                }
        `}</style>
      </>
    );
};

export default Services;
