import React from 'react';
import './Faq.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Copy from '../copyRight/copyRight';



function Faq() {
  return (
    <>
    <Header></Header>
    <div className='container faq'>
{/* row 1 */}
  <div className='row'>
  <div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/choc-chip-cake.png' width="100%" alt='Img'/>
    </div>
</div>

<div className='col-md-6'>
    <div className='section-header-faq'>
            <h1 className='section-title'>FAQ</h1>
        </div>
        <div className='category_title'>
            <p class="card-texts">We always dreamt of walking into a bakery where the aroma of freshly baked.      
            </p>
        </div>
        <div className='col-md-2'></div>
</div>
</div>

{/* row 2 */}
<div className='row'>
<div className='col-md-7'>
 
        <div className='category_title'>
            <p class="card-texts"><b>W</b>e always dreamt of walking into a bakery where the aroma of freshly baked bread is wafting through the air. The smell and warmth of a freshly baked loaf of bread is a visceral experience. Unable to find the bakery of our dreams close to us we opened our own. We didn’t want to recreate European bakeries but, create something uniquely local and uniquely Madras. Thus began the journey of The Old Madras Baking Company.

Established in 2014, our goal is to make preservative-free, freshly baked bread available to everyone. We cater to both the health conscious and the indulgent gourmand. Following the philosophy of artisanal baking, our bread is carefully handcrafted using traditional methods - be it a simple loaf of bread or a carefully constructed croissant.

Typically, most brown breads are made from all-purpose flour (maida) and get their colour from the generous amounts of treacle or colouring agents added to it. These breads also contain preservatives required to keep them fresh from the factories to supermarket shelves. The ingredients that go into our baked products, on the other hand, are ones that are derived from all natural sources and certified “clean label". We bring to you wholesome, all-natural bread, every single day. Oh! We almost forgot to mention that our whole wheat bread and our cereal bread are 100% whole wheat.
            </p>
        </div>
<br></br>
        <div className="card faqs">                    
            <div className="card-body">                         
                <h5 className="card-title  product_faq">WHAT IS OMBC DAILY?</h5>
                           <p class="card-text faqq">Walk into one of our bakeries in your neighbourhood. Try our spongy brioches or buttery croissants, nutritious cereal bread, warm and fresh Danish pastries, or even gluten-free bread. Everything that comes out of our kitchen is made with as much care and love, as if it were baked for our families.  </p>
                           <div className="topright">_</div>
                           </div>
                       </div>

            <div className="card faqss">                    
            <div className="card-body">                         
                <h5 className="card-title  product_faq">WHAT HAPPINESS TO MY SUBSCRIPTION WHEN I AM OUT OF TOWN?</h5>
                <div className="topright">+</div>
                </div>
                </div>

            <div className="card faqss">                    
            <div className="card-body">                         
                <h5 className="card-title  product_faq">ARE THE INGREDIENTS 100% NATURAL?</h5>
                <div className="topright">+</div>
                </div>
                </div>

                <div className="card faqss">                    
            <div className="card-body">                         
                <h5 className="card-title  product_faq">WHAT IS THE ORDER POLICY?</h5>
                <div className="topright">+</div>
                </div>
                </div>

                <div className="card faqss">                    
            <div className="card-body">                         
                <h5 className="card-title  product_faq">HOW CAN I ORDER BREAD?</h5>
                <div className="topright">+</div>
                </div>
                </div>
                           
       
</div>
<div className='col-md-1'></div>
<div className='col-md-4'>
<img src='https://klaraslife.com/wp-content/uploads/2018/02/DSC00460-1.jpg' width="100%" height="100%" alt='Img'/>
</div>
</div>

{/* row 3 */}

<div className='row'>

<div className='col-md-6'>
    <div className='section-header-faq'>
            <h1 className='section-title'>Check Out Our Instagram</h1>
        </div>
        <br></br>
        <div className='category_title'>
            <p class="card-texts">Walk into one of our bakeries in your neighbourhood. Try our spongy brioches or buttery croissants, nutritious cereal bread, warm and fresh Danish pastries, or even gluten-free bread. Everything that comes out of our kitchen is made with as much care and love, as if it were baked for our families.     
            </p>
        </div>
</div>

<div className='col-md-4'>

</div>

</div>

{/* row 4 */}

<div className='row'>

<div className='col-md-3 pic'>
<img src='https://www.ombc.in/blog/wp-content/uploads/2018/10/OMBC-Blog.jpg' width="100%" alt='Img'/>
</div>

<div className='col-md-3 pic'>
<img src='	https://www.ombc.in/blog/wp-content/uploads/2018/09/OMBC-Blog-1-1.jpg' width="100%" alt='Img'/>
</div>

<div className='col-md-3 pic'>
<img src='https://www.ombc.in/blog/wp-content/uploads/2018/08/OMBC-Blog-2.jpg' width="100%" alt='Img'/>
</div>

<div className='col-md-3 pic'>
<img src='https://www.ombc.in/blog/wp-content/uploads/2018/07/photo_2018-07-06_22-28-50.jpg' width="100%" alt='Img'/>
</div>
</div>

</div>
<Footer></Footer>
    </>
  );
}

export default Faq;