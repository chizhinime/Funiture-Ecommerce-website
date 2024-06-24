import quality from "../../assets/images/qualitycup.svg";
import warranty from "../../assets/images/warranty.svg";
import freeshipping from "../../assets/images/freeshipping.svg";
import twofourseven from "../../assets/images/24-7.svg";



const Services = () => {
  return (
	<div className="container-fluid container_services">
		<div className="row p-0 m-0">
			<div className="col-12 col-md-3 service">
					<div className="icon">
						<img src={quality} alt="icons" />
					</div>
					<div className="service_info">
						<h4>High Quality</h4>
						<p>crafted from top materials</p>
					</div>
			</div>
			<div className="col-12 col-md-3 service">
					<div className="icon">
						<img src={warranty} alt="icons" />
					</div>
					<div className="service_info">
						<h4>Warranty Protection</h4>
						<p>Over 2 years</p>
					</div>
			</div>
			<div className="col-12 col-md-3 service">
					<div className="icon">
						<img src={freeshipping} alt="icons" />
					</div>
					<div className="service_info">
						<h4>Free Shipping</h4>
						<p>Order over 150 $</p>
					</div>
			</div>
			<div className="col-12 col-md-3 service">
					<div className="icon">
						<img src={twofourseven} alt="icons" />
					</div>
					<div className="service_info">
						<h4>24 / 7 Support</h4>
						<p>Dedicated support</p>
					</div>
			</div>
		</div>
	</div>
	
  )
}

export default Services