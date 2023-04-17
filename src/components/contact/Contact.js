import React from 'react';
import './Contact';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Contact() {
  return (
    <>
    <Header></Header>
    <div className='container contact'>

 {/* row 1 */}
  <div className='row'>

  <div className='col-md-2'></div>
<div className='col-md-6'>
    <div className='section-headers'>
            <h1 className='section-title'>Contact Us</h1>
        </div>
        <div className='category_title'>
            <p class="card-texts">We always dreamt of walking into a bakery where the aroma of freshly baked.      
            </p>
        </div>
      
</div>
<div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/panini.png' width="100%" alt='Img'/>
    </div>
</div>
</div>

{/* row 2 */}

<div className='row'>
<div className='section-headers'>
          <h3 className='section-title'>General</h3>
      </div>
      <br></br>

<div className='col-md-2 con'>
    <div className='con'>Chennai</div></div>
<div className='col-md-2 '>
    (91)9632587412
    <hr></hr>
    ombcdaily@ombc.in
</div>
<div className='col-md-2 con'>
    Bangalore
</div>
<div className='col-md-2'>
(91)9632587417
<hr></hr>
ombcdaily@ombc.in
</div>
<div className='col-md-2 con'>
    Hyderabad
</div>
<div className='col-md-2'>
(91)9632587415
<hr></hr>
ombcdaily@ombc.in
</div>  
</div>

<div className='row'>
  <div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/baguette.png' width="100%" height="100%" alt='Img'/>
    </div>
</div>

<div className='col-md-8'>
    <div className='section-header-faq'>
            <h1 className='section-title'>Get In Touch</h1>
             
        </div>
        <p className="sub">visit our brand store!</p>
        <div className='category_title'>
            <p className="card-texts">Walk into one of our bakeries in your neighbourhood. Try our spongy brioches or buttery croissants, nutritious cereal bread, warm and fresh Danish pastries, or even gluten-free bread. Everything that comes out of our kitchen is made with as much care and love, as if it were baked for our families.       
            </p>
        </div>
        <br></br>

        <form>

    <div class="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"></input>
</div>
<div className="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email ID"></input>
</div>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your Queries"></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>

        </form>
        
</div>
</div>

    </div>
    <Footer></Footer>
    </>
  );
}

export default Contact;