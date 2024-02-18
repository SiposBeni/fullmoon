function Carousel(){
    return (
        <div id="carouselExampleIndicators" className="carousel slide my-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img src="blue.jpg" className="d-block w-100" alt="blue" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Első item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu cursus dui. Nulla pharetra lorem vitae tortor ornare rhoncus.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="green.jpg" className="d-block w-100" alt="green" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Második item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu cursus dui. Nulla pharetra lorem vitae tortor ornare rhoncus.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="orange.jpg" className="d-block w-100" alt="orange" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Harmadik item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu cursus dui. Nulla pharetra lorem vitae tortor ornare rhoncus.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}

export default Carousel;