const Services = () => {
    return (
        <>
            <section className="services">
                <div className="container-fluid">
                    <div className="service-list">
                        <div className="service-item">
                            <img
                                src="/src/assets/icons/10.svg"
                                alt=""
                                className="service__image"
                            />
                            <div className="service-info">
                                <h4 className="service__name">Chất Lượng Cao</h4>
                                <p className="service__description">
                                Được gia công từ vật liệu chất lượng 
                                </p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img
                                alt=""
                                src="/src/assets/icons/11.svg"
                                className="service__image"
                            />
                            <div className="service-info">
                                <h4 className="service__name">
                                    Bảo Hành
                                </h4>
                                <p className="service__description">
                                    Bảo hành lên đến 24 tháng
                                </p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img
                                alt=""
                                src="/src/assets/icons/12.svg"
                                className="service__image"
                            />
                            <div className="service-info">
                                <h4 className="service__name">Miễn Phí Vận Chuyển</h4>
                                <p className="service__description">
                                    Từ sản phẩm 550$
                                </p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img
                                alt=""
                                src="/src/assets/icons/13.svg"
                                className="service__image"
                            />
                            <div className="service-info">
                                <h4 className="service__name">
                                    24 / 7 Hỗ Trợ
                                </h4>
                                <p className="service__description">
                                    Hỗ Trợ Chuyên Dụng
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
