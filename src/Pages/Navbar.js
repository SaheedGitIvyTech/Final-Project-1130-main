import {Link} from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    return ( 
        <nav className="nav">
           
            <div className="links btn btn-group" role="group">
                <a href="/"><button className="btn btn-warning">Home</button></a>
                <a href="/create"><button className="btn btn-warning">CreateAccount</button></a>
                <a href="/myjobs"><button className="btn btn-warning">My Jobs</button></a>
                <a href="/login"><button className="btn btn-warning">Login</button></a>
                <a href="/ourservices" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn dropdown-toggle btn-warning dropdown">OurServices</button></a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="/interior">Interior Design</a></li>
                    <li><a class="dropdown-item" href="/Flooring">Flooring</a></li>
                    <li><a class="dropdown-item" href="/Plumbing">Plumbing</a></li>
                    <li><a class="dropdown-item" href="/house">Housekeeping</a></li>
                    <li><a class="dropdown-item" href="/land">Landscaping</a></li>
                    <li><a class="dropdown-item" href="/Mounting">Mounting</a></li>
                    <li><a class="dropdown-item" href="/Pool">Pool Maintenance</a></li>
                    <li><a class="dropdown-item" href="/security">Home Security</a></li>
               </ul> 
            </div>   
        </nav>
   
    
    );
}
 
export default Navbar;

