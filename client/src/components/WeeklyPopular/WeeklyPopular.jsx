
const WeeklyPopular = () => {
    return (
        <div>
            <h3>Weekly Popular</h3>
            <div className="weekly">
                <div className="item">
                    <div className="content">
                        <img src="assets/images/weekly-1.jpg" alt="Sea Balloon" />
                        <div className="info">
                            <h4>Sea Balloon</h4>
                            <div className="view">
                                <i className="ri-eye-fill"></i>
                                <h5>2,320</h5>
                            </div>
                        </div>
                    </div>
                    <i className="ri-heart-3-fill"></i>
                </div>
                <div className="item">
                    <div className="content">
                        <img src="assets/images/weekly-2.jpg" alt="Flower" />
                        <div className="info">
                            <h4>Flower</h4>
                            <div className="view">
                                <i className="ri-eye-fill"></i>
                                <h5>2,490</h5>
                            </div>
                        </div>
                    </div>
                    <i className="ri-heart-3-fill"></i>
                </div>
                <div className="item">
                    <div className="content">
                        <img src="assets/images/weekly-3.jpg" alt="Street" />
                        <div className="info">
                            <h4>Street</h4>
                            <div className="view">
                                <i className="ri-eye-fill"></i>
                                <h5>1,420</h5>
                            </div>
                        </div>
                    </div>
                    <i className="ri-heart-3-fill"></i>
                </div>
                <div className="item">
                    <div className="content">
                        <img src="assets/images/weekly-4.jpg" alt="Sea Water" />
                        <div className="info">
                            <h4>Sea Water</h4>
                            <div className="view">
                                <i className="ri-eye-fill"></i>
                                <h5>9,610</h5>
                            </div>
                        </div>
                    </div>
                    <i className="ri-heart-3-fill"></i>
                </div>
            </div>
        </div>
    );
};

export default WeeklyPopular;
