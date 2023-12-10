import Cards from '../Cards/Cards'
import './HomeWebPage.css'
import Nbar from './Nbar';

const HomePage = () => {
    return(
        <>
      
     <div><Nbar/></div>
      
  
         <div className="container fs-2 p-3 fw-bold border border-black text-center">
    Welcome to IndyFIXER</div>
 
    <div className="container p-3 fw-bold text-center">
      <p className="fs-3 p-5 fw-bold">At IndyFixer, our mission is to provide exceptional services to our valued customers and communities. 
      We are dedicated to delivering quality workmanship, reliable solutions, and outstanding customer service. 
      With our team of skilled professionals, we always aim to exceed our customers' expectations, tackling each 
      home improvement and repair project efficiently and effectively. We strive to build lasting relationships with
      our clients, earning trust through our commitment to honesty, integrity, and transparency.  Our ultimate goal is
     to enhance functionality, comfort and aesthetic of homes, and ensure every customer's vision is brought to life.</p>
    
  </div>

  <div className="container border border-black">
    <div className=" text-center row fs-2 p-3"><strong>Overall Services</strong></div>
  </div>

  <div className="container align-items-lg-stretch">
    <div className="container row bg-white-subtle p-4 justify-content-around">
   
      <div className="col-sm col mb-4">
        <div className="card  h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/T1gQbXht/Interior-Design.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Interior Design</h5>
            <p className="card-text"> Luxury, innovative solutions, curated in unique styles to fit your needs. We provide
              support with all phases of the design process.
           
            <a href="/interior" className="btn btn-primary mt-3">Learn More</a> </p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/L6q2rCwN/TV-mount.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Mounting</h5>
            <p className="card-text">Offering fast and accurate mounting services. We can handle basic and custom mounting to beautify and declutter your space.
            <a href="/Mounting" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
   
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/4y7qFMyc/plumbing.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Plumbing</h5>
            <p className="card-text">Offering full service repair and maintenance services. We help you develop the best plan for your plumbing or drainage needs.
            <a href="/Plumbing" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/BZFGpLKV/Landscape.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Landscaping</h5>
            <p className="card-text">From weekly mowing to custom landscapes we are ready to get your project off the ground. Let us enhance your curb appeal.
            <a href="/land" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/bwCMppnn/Housekeeping.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Housekeeping</h5>
            <p className="card-text">Providing solutions for residential and commercial cleaning needs. Give us a try and we'll get the job done right the first time.
            <a href="/house" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
   
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/9Mtrw8CG/Flooring.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Flooring</h5>
            <p className="card-text">Providing solutions for residential and commercial flooring needs. We've got you covered for complete repairs and installs.
            <a href="/floor" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
   
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/brhV3v77/images-1.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Pool Maintenance</h5>
            <p className="card-text">We provide testing and maintenance services to maintain your private spa and keep you swimming as long as the weather allows. 
            <a href="/Pool" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/hvcMV5xg/Home-Security.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Home Security</h5>
            <p className="card-text">We provide initial consulting services to get you the right protection for your home when you need it; then we install it for you.
            <a href="/security" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container border border-black">
    <div className=" text-center row fs-2 p-3"><strong>Reviews</strong></div>
  </div>

  <div className="container pb-5  ">
  <div className="row align-items-center pb-5 fs-3">
    <Cards />
</div></div>

 
{/*  <div className="container border border-black">
    <div className=" text-center row fs-2 p-3"><strong>Frequently Asked Questions</strong></div>
  </div>

  <div className="container accordion accordion-flush  p-5" id="questions">            
    <div className="accordion-item">
      <h2 className="accordion-header">
          <button 
            type="button"
            className="accordion-button collapsed"  
            data-bs-toggle="collapse" 
            data-bs-target="#question-one">
            <strong> What skills are needed to become an IndyFixer?
        </strong> </button>
      </h2>
    <div id="question-one" 
          className="accordion-collapse collapse"  
          data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Being a handyman requires both mental and physical skills such as:<br></br> 
      <br></br>
      Problem-solving: Handymen often have to think of the solution to a home owner's unique problems.<br></br>
Creativity: Being creative helps handymen achieve their client's needs in the most efficient and cost-effective way.<br></br>
Endurance: Many responsibilities of a handyman take several hours, days or weeks, requiring physical stamina and mental endurance.<br></br>
Dexterity: Because handymen work with their hands, they need to be agile and dexterous when handling fragile materials or dangerous repair tools.<br></br>                          
      </div>
    </div>
  </div>



 } <div className="accordion-item">
      <h2 className="accordion-header">
      <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#question-two">
            <strong>Question 2
        </strong> </button>
      </h2>
      <div id="question-two" 
          className="accordion-collapse collapse" 
          data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
        blah blah blah 2<br></br>
        </div>
      </div>
    </div>              
    </div> 

  <div className="container border border-black">
    <div className="text-center row fs-2 p-3"><strong>Our Location</strong></div>
  </div> 

  <div className="container ">
    <div className="row">
      <div className="col-3 p-5">
        <img src="https://i.postimg.cc/wBf3kxrr/Final-Logo-2.png" alt="Logo" width={150} height={100} />
      </div>
      <div className="col-3 p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.2573865243558!2d-86.1415655!3d39.86847220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b53aef939947b%3A0xee7f56bdfba88f71!2s6205%20Winthrop%20Ave%2C%20Indianapolis%2C%20IN%2046220!5e0!3m2!1sen!2sus!4v1701025006094!5m2!1sen!2sus"
          width={540}
          height={405}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="col-3"></div>
      <div className="col p-5">
        <div>
          <strong>IndyFIXER</strong><br></br>        
          6205 Winthrop Avenue<br></br>         
          Indianapolis, IN 46220<br></br>     
          Phone: 317-255-3030<br></br> 
        </div>
      </div>
    </div> */}
   
   <div className="col-sm fs-5 fs-2">           
    <footer className="footer bg-black text-white text-center position-relative">
        <p className="lead pb-5">Copyright &copy; 2023 IndyFIXER</p>
        <div  className="position-fixed bottom-0 end-0">
            </div></footer></div>
    </>
        
    )
}

export default HomePage
