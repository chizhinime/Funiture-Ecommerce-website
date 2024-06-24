import living from "../../assets/images/image100.png";
import bedroom from "../../assets/images/image101.png";
import dinning from "../../assets/images/image106.png";




const Gallery = () => {
  return (
    <section className="container-fluid container_gallery">
      <div className="row">
        <div className="col-12">
          <div className="header">
            <h2 className="title">Browse The Range</h2>
            <p className="sub_title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <img src={dinning} alt="" />
                <h4 className="label">Dining</h4>
              </div>
              <div className="col-12 col-md-4">
                <img src={living} alt="" />
                <h4 className="label">Living</h4>
              </div>
              <div className="col-12 col-md-4">
                <img src={bedroom} alt="" />
                <h4 className="label">Bedroom</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
