import './Consult.css'
import { useState } from "react";


const Consult = () => {
    const [consultdate, setDatePosted] = useState('');
    const [consultservices, setJobCategory] = useState('');
    const [consultemail, setCustomerEmail] = useState('');
    const [body, setBody] = useState('');

return( 
    <div className="consulting">
      <h2>Consultation Form</h2>
      <form>
      <label>What are you consulting about:</label>
        <select
          value={consultservices}
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
        
        <label>Date</label>
        <input 
          type="text" 
          value={consultdate}
          onChange={(e) => setDatePosted(e.target.value)}

        />

        <label>Contact email address</label>
        <input 
          type="text" 
          value={consultemail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
        
        
        <label>Reference:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        
        

        
        <div>
          <button><b>Submit</b></button>
        </div>

      </form>
    </div>
  );
}

export default Consult;