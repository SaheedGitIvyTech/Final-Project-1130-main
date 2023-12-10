import './AddJob.css'
import { useState } from "react";


const PostJob = () => {
    const [servicerequest, setServiceRequest] = useState('');
    const [desc, setJobDescription] = useState('');
    const [dateposted, setDatePosted] = useState('');
    const [dateneeded, setDateNeeded] = useState('');
    const [jobservicecat, setJobCategory] = useState('');
    const [expectedtime, setTimeSlot] = useState('');
    const [custemail, setCustomerEmail] = useState('');

return( 
    <div className="createJobs">
      <h2>Post a Job</h2>
      <form>
      <label>Our Services:</label>
        <select
          value={jobservicecat}
          onChange={(e) => setJobCategory(e.target.value)}
        >
          <option value="option">Select from drop down...</option>
          <option value="Flooring">Flooring</option>
          <option value="HomeSecurity">HomeSecurity</option>
          <option value="HouseKeeping">HouseKeeping</option>
          <option value="InteriorDesign">InteriorDesign</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Mounting">Mounting</option>
          <option value="Plumbering">Plumbering</option>
          <option value="PoolMaintenance">PoolMaintenance</option>
        </select>
        <label>Service Request</label>
        <input 
          type="text" 
          //required 
          value={servicerequest}
          onChange={(e) => setServiceRequest(e.target.value)}
        />
        <label>Job Description</label>
        <input 
          type="text" 
          //required 
          value={desc}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <label>Job Posted Date</label>
        <input 
          type="text" 
          //required 
          value={dateposted}
          onChange={(e) => setDatePosted(e.target.value)}
        />
        
        
        <label>Service Needed Date</label>
        <input 
          type="text" 
          //required 
          value={dateneeded}
          onChange={(e) => setDateNeeded(e.target.value)}

        />
        <label>Service Time Slot</label>
        <input 
          type="text" 
          //required 
          value={expectedtime}
          onChange={(e) => setTimeSlot(e.target.value)}
        />
        <label>Email address</label>
        <input 
          type="text" 
          //required 
          value={custemail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />

        
        <div>
          <button><b>Submit Job</b></button>
          <p></p>
          <button><b>Home Page</b></button>
        </div>

      </form>
    </div>
  );
}

export default PostJob;