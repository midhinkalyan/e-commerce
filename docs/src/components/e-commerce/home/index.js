import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const Home = () => {
  return (
    <div className="main">
      <div className="heade">
        <img className="first" src="/logo2.png" alt="Logo" />
        <ul className="nav_clas">
        <li><Link to="/offerzone">Offerzone</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Help</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
  <Link to="/offerzone">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
        <div>
          <img src="/carousel1.png" alt="Slide 1" />
          <p className="legend">New Arrivals</p>
        </div>
        <div>
          <img src="/carousel2.png" alt="Slide 2" />
          <p className="legend">Vintage Styles</p>
        </div>
        <div>
          <img src="/carousel3.png" alt="Slide 3" />
          <p className="legend">Season Sale</p>
        </div>
      </Carousel>
      </Link>
      <div className="discount-banner">
  <p>🔥 Get 50% Discount on All Vintage Products! 🔥</p>
</div>

      <div className="diff-cate">
       <Link to="/offerzone">
       <h2>SUMMER WEAR</h2>
       <img  src="/summer.png" alt="summer wear"/>
       </Link>
       <Link to="/products">
       <h2>WINTER WEAR</h2>
       <img  src="/winter.jpg" alt="winter wear"/>
       </Link>
       <Link to="/offerzone">
       <h2>TRADITIONAL WEAR</h2>
       <img  src="/traditional.jpeg" alt="traditional"/>
       </Link>
       <Link to="/offerzone">
       <h2>TRENDY WEAR</h2>
       <img  src="/trendy.jpg" alt="trendy"/>
       </Link>
       <Link to="/offerzone">
       <h2>FORMAL WEAR</h2>
       <img  src="/formal.jpg" alt="formal wear"/>
       </Link>
       <Link to="/offerzone">
       <h2>ETHNIC WEAR</h2>
       <img  src="/ethnic.jpg" alt="ethnic wear"/>
       </Link>
      </div>
      <div className="vinta">
      <Link to="/offerzone">
       <img src="/Vintage.png" alt="Vintage fashion"/> 
       </Link>
   <p>VINTAGE STORE </p>
      </div>
      <div className="discount-banner2">
  <p>🔥 Get 50% Discount on All Vintage Products! 🔥</p>
</div>
      <div>
      <footer style={{
  backgroundColor: '#111',
  color: '#fff',
  padding: '30px 20px',
  marginTop: '40px'
}}>
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px'
    }}>
      <img src="/logo2.png" alt="Logo" style={{ height: '130px', width: 'auto' ,paddingRight:"40px;"}} />
      <p>StyleHub &copy; {new Date().getFullYear()}</p>
    </div>
    <div>
      <img src="/socialmedia.png"  alt="insta" style={{height:"200px",width:"150px"}}/>
    </div>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      padding: '0',
      margin: '0'
    }}>
      <li><Link to="/offerzone" style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '500'
      }}>Offerzone</Link></li>
      <li><Link to="/products" style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '500'
      }}>Products</Link></li>
      <li><Link to="/contact" style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '500'
      }}>Help</Link></li>
      <li style={{ fontWeight: '500'}}>
        Address: Marikavalasa ,
        <b></b>
        visakhapatnam pin:530048
      </li>
    </ul>
    <ul style={{ listStyle: 'none',
        fontWeight:'500'
      }}>
      <li>
        FOUNDER : MR.MIDHIN KALYAN
      </li>
      <b></b>
      <li >
      CEO:MISS VENKY
      </li>
    </ul>
  </div>
</footer>      </div>
     
    </div>
  );
};

export default Home;
