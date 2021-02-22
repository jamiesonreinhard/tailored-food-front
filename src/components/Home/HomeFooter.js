import react from 'react';

const HomeFooter = () => {
  return(
    <div className="home-footer-box py-5">  
      <div className="home-footer-details">
        <img src="/images/tailored_food_logo.svg" alt="logo" className="mb-3" />
        <p>
        Tailored Food is a lean social enterprise consultancy that partners with food entrepreneurs, farmers, and market vendors to ensure nutritious delicious low-cost food is available to families suffering from malnutrition.
        <br /><br />
        We are building a grassroots movement to <span style={{textDecorationLine: 'underline', fontWeight: 'bolder'}}>end hunger by 2030.</span>
        </p>
      </div> 
     
      <div className="text-center">
        <img src="/images/ceo-taylor.jpg" alt="CEO" class="rounded-circle mb-2 home-footer-image" style={{height: "200px", width: "200px"}} />
        <div><strong>TAYLOR QUINN</strong></div>
        <small><strong>CEO</strong></small>
      </div>
    </div>   
  )
}

export default HomeFooter;