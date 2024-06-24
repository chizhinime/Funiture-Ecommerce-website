import { IoShareSocialOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";
import Paginations from "../pagination/Paginations"

const productData = [
  {
    title: "Syltherine",
    sub_title: "Stylish cafe chair",
    price: "2.500.000",
    discount: "3.500.000",
    percentage: "-30%",
    img: "http://localhost:5173/src/assets/images/image.png"
  },
  {
    title: "Leviosa",
    sub_title: "Stylish cafe chair",
    price: "2.500.000",
    discount: "",
    percentage: "",
    img: "http://localhost:5173/src/assets/images/image2.png"
  },
  {
    title: "Lolito",
    sub_title: "Luxury big sofa",
    price: "7.000.000",
    discount: "3.500.000",
    percentage: "-50%",
    img: "http://localhost:5173/src/assets/images/image3.png"
  },
  {
    title: "Respira",
    sub_title: "Outdoor bar table and stool",
    price: "500.000",
    discount: "",
    percentage: "New",
    img: "http://localhost:5173/src/assets/images/image4.png"
  },
  {
    title: "Grifo",
    sub_title: "Night lamp",
    price: "2.500.000",
    discount: "1.500.000",
    percentage: "",
    img: "http://localhost:5173/src/assets/images/image5.png"
  },
  {
    title: "Muggo",
    sub_title: "Small mug",
    price: "1.50.000",
    discount: "3.500.000",
    percentage: "New",
    img: "http://localhost:5173/src/assets/images/image6.png"
  },
  {
    title: "Pingky",
    sub_title: "Cute bed set",
    price: "7.000.000",
    discount: "3.500.000",
    percentage: "-50%",
    img: "http://localhost:5173/src/assets/images/image7.png"
  },
  {
    title: "Potty",
    sub_title: "Minimalist flower pot",
    price: "500.000",
    discount: "3.500.000",
    percentage: "New",
    img: "http://localhost:5173/src/assets/images/image8.png"
  }

];

const Products = ({page}) => {
  
  const initial = page == "home"? 8 : 16;
  const initialPagination = page == "home"? 16 : 8;

const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostPerPage] = useState(initialPagination);

const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage
const currentPost = productData && productData.slice(firstPostIndex, lastPostIndex)




  const [showMore, setShowMore] = useState(initial);

  return (
    <div className="container-fluid container_products">
      <div className="header"><h2 className="title">Our Products</h2></div>
      <div className="row">
        {currentPost &&
          currentPost.slice(0, showMore).map((item, key) => {
            return (
              <div className="col-16 col-md-8" key={key}>
                <div className="card">
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.sub_title}</p>
                    <p className="card-text price">
                      <span className="fw-bold">Rp {item.price}</span> 
                      &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <small className="text-body-secondary">{item.discount && "Rp "+item.discount} </small>
                    </p>
                  </div>
                    { item.percentage !== "" &&
                      <div className= {item.percentage === "New"? "angle_tag new_tag" : "angle_tag percentage_tag" }>{item.percentage}</div>}
                  <div className="card_hover">
                    <button type="button" className="btn btn-lg hover_btn">Add to cart</button>
                    <br />
                    <span>
                      <span><IoShareSocialOutline className="icon" />Share</span>
                      <span><MdCompareArrows className="icon" />compare</span>
                      <span><IoIosHeartEmpty className="icon" />Like</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
          }
      </div>
       <div className="row">
     {
       page === "home" && 
        <button className="btn btn-lg show_more_btn" onClick={() => setShowMore(showMore > 8 ? 8 : productData.length)}>{showMore > 8 ? "Show Less" : "Show More"} </button>
     }
     {
     page === "shop" &&
        <Paginations  
            totalPosts = {productData && productData.length} 
            postsPerPage = {postsPerPage}
            setCurrentPage= {setCurrentPage}
            currentPage={currentPage}
            
            />
        } 
      </div>
    </div>
  );
};

export default Products;
