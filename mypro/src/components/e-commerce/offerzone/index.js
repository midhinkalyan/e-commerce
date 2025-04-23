import { Component } from "react";
import ProductBox from "../Productbox";
import Header from "../header"
import {Link} from "react-router-dom";
import Cart from "../cart"
const offerzonelist=[
    {
        img:"/3.avif",
        price:550,
        product:"Multicolour Printed Heavy Rayon Gown Dress",
        description:"Vintage Style Fashion"
    },{
        img:"/product-jpeg.jpg",
        price:550,
        product:"Women Chiffon Long Dress",
        description:"Vintage Style Fashion"
    }
    ,{
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,{
        img:"/images.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,{
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,{
        img:"/ghibili.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,{
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,{
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,{
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    }
    ,
    {
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    },
    {
        img:"/1691412858360.jpg",
        price:550,
        product:"t-shirt",
        description:"Vintage Style Cotton T-Shirt"
    },

]
class Offerzone extends Component {
  

  render() {
    return (
        <div className="offer-page">
            <Header/>
        <div className="offer-zone">
            
            {
                offerzonelist.map((foreach=>
                <ProductBox {...foreach} addToCart={this.addToCart}/>
                ))
                
            }
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
      <img src="/logo2.png" alt="Logo" style={{ height: '50px', width: 'auto' }} />
      <p>StyleHub &copy; {new Date().getFullYear()}</p>
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
    </ul>
  </div>
</footer>      </div>
     

        </div>
    )
  }
}

export default Offerzone;
