
import React from 'react';
import './Story.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';



function Story() {
  return (
    <>
    <Header></Header>
<div className='container our_story'>
{/* row 1 */}
<div className='row'>
<div className='col-md-8'>
    <div className='section-headers'>
            <h1 className='section-title'>Our Story</h1>
        </div>
        <div className='category_title'>
            <p class="card-texts">We always dreamt of walking into a bakery where the aroma of freshly baked bread is wafting through the air.     
            </p>
        </div>
</div>

<div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/nutella-brioche.png' width="100%" alt='Img' />
    </div>
</div>
</div>

{/* row 2 */}
<div className='row'>
<div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/nutella-danish.png' width="100%" alt='Img' />
    </div>
</div>

<div className='col-md-8'>
    <div className='section-headers'>
            <h1 className='section-title'>Experience our fresh baked goodness.<br></br>BAKED FRESH,EVERYDAY.</h1>
        </div>
        <div className='category_title'>
            <p class="card-texts">We always dreamt of walking into a bakery where the aroma of freshly baked bread is wafting through the air. The smell and warmth of a freshly baked loaf of bread is a visceral experience. Unable to find the bakery of our dreams close to us we opened our own. We didn’t want to recreate European bakeries but, create something uniquely local and uniquely Madras. Thus began the journey of The Old Madras Baking Company.     
            </p>
        </div>
    </div>
</div>

{/* row 3 */}
<div className='row'>
<div className='col-md-8'>
    <div className='section-headers'>
            <h1 className='section-title'>"Our goal is to make preservative-free,<br></br>freshly backed bread available to everyone"</h1>
        </div>
        <div className='category_title'>
            <p class="card-texts">Established in 2014, our goal is to make preservative-free, freshly baked bread available to everyone. We cater to both the health conscious and the indulgent gourmand. Following the philosophy of artisanal baking, our bread is carefully handcrafted using traditional methods - be it a simple loaf of bread or a carefully constructed croissant.     
            </p>
        </div> 
</div>

<div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/blueberry-danish.png' width="100%" alt='Img' />    
    </div>
   </div>
</div>

{/* row 4 */}
<div className='row'>
<div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/Wheat-bread.png' width="100%" alt='Img' />
    </div>
</div>

<div className='col-md-4'>
    <div className='section-headers'>
            <h1 className='section-title'>Bakery Ingredients</h1>
        </div>
        <div className='category_title'>
            <p class="card-texts">Typically, most brown breads are made from all-purpose flour (maida) and get their colour from the generous amounts of treacle or colouring agents added to it. These breads also contain preservatives required to keep them fresh from the factories to supermarket shelves. The ingredients that go into our baked products, on the other hand, are ones that are derived from all natural sources and certified “clean label". We bring to you wholesome, all-natural bread, every single day. Oh! We almost forgot to mention that our whole wheat bread and our cereal bread are 100% whole wheat.
            </p>
        </div>
    </div>
    <div className='col-md-4'>
    <div className='category_image'>
        <img src='https://www.ombc.in/static/customer_dashboard/images/products/Country-Loaf.png' width="100%" alt='Img' />
    </div>
</div>
</div>

</div>
<Footer></Footer>
</>
  );
}

export default Story;