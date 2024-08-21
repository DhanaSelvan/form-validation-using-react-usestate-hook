import './Form.css'
import { useState } from 'react';

const Form = () => { 
    const [view, setView] = useState(false);
    const [fName, setfName] = useState("");
    const [mName, setmName] = useState("");
    const [lName, setlName] = useState("");
    const [dob, setdob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhNo] = useState("");
    const [gender, setGender] = useState("");
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState("");
    const [job, setJob] = useState("");
    const [team, setTeam] = useState("");
    const [ desi,setDesi] = useState("");
    const [hours, setHours] = useState("");
    const [check, setCheck] = useState(false);

    const handleSubmit = () => {
        if(fName && lName && dob && email && phone && desi) {
            setView(true)
        } else {
            alert ("Check all the required fields are filled")
        }
    }

    return (
        <>
        <section className="wrapper">
            <h1 className='title'>Empolyee Form</h1>
            <form action="">
                <fieldset>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" placeholder="Enter your First Name" id="fName" value={fName} onChange={(e)=> setfName(e.target.value)}/>
                    <p></p>
                </fieldset>
                <fieldset>
                    <label htmlFor="mName">Middle Name</label>
                    <input type="text" placeholder="Enter your Middle Name" id="mName" value={mName} onChange={(e)=> setmName(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" placeholder="Enter your Last Name" id="lname" className='require' value={lName} onChange={(e)=> setlName(e.target.value)}/>
                    {lName.length===0 && <p className='error'>Last Name is Require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="dob">Birth Date</label>
                    <input type="date" placeholder="Enter your Last Name" id="dob" className='require' value={dob} onChange={(e)=> setdob(e.target.value)}/>
                    {dob.length===0 && <p className='error'>Date of Birth is Require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your Email Id" id="email" className='require' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    {email.length===0 && <p className='error'>Email is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="phNo">Phone Number</label>
                    <input type="text" placeholder="Enter your Phone number" id="phNo" className='require' value={phone} onChange={(e)=> setPhNo(e.target.value)}/>
                    {phone.length===0 && <p className="error">Phone number is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="gender">Select Gender</label>
                    <select name="gender" id="gender" className='require' value={gender} onChange={(e)=> setGender(e.target.value)}>
                        <option value="">Choose Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    {gender.length===0 && <p className="error">Gender is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="startDate">Start Time</label>
                    <input type="time" placeholder="Enter your Last Name" id="startDate" className='require' value={startTime} onChange={(e)=> setStartTime(e.target.value)}/>
                    {startTime.length===0 && <p className="error">Start Time is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="endDate">End Time</label>
                    <input type="time" placeholder="Enter your Last Name" id="endDate" className='require' value={endTime} onChange={(e)=> setEndTime(e.target.value)}/>
                    {endTime.length===0 && <p className="error">End Time is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="jobpostion">Job Position</label>
                    <input type="text" placeholder="Enter the job position" id="jobposition" className='require' value={job} onChange={(e)=> setJob(e.target.value)}/>
                    {job.length===0 && <p className="error">Job Position is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="team">Select Team</label>
                    <select name="" id="team" className='require' value={team} onChange={(e)=> setTeam(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="1">Team 1</option>
                        <option value="2">Team 2</option>
                        <option value="3">Team 3</option>
                        <option value="4">Team 4</option>
                        <option value="5">Team 5</option>
                    </select>
                    {team.length===0 && <p className="error">Team is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="desigination">Select Designation</label>
                    <select name="" id="desigination" className='require' value={desi} onChange={(e)=> setDesi(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="Intern">Intern</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="manager">Manager</option>
                        <option value="tl">TL</option>
                    </select>
                    {desi.length===0 && <p className="error">Designation is require</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor="hours">Billable Hours</label>
                    <input type="text" placeholder="Enter the billable houres" id="hours" className='require' value={hours} onChange={(e)=> setHours(e.target.value)}/>
                    {hours.length<0 && <p className="error">Billable Hours must be a positive number</p>}
                    {hours.length===0 && <p className='error'>Billable Hours is Required</p>}
                </fieldset>
                <fieldset className='flex'>
                <input type="checkbox" name="" id="check" value={check} onChange={(e)=>setCheck(e.target.value)}/>
                    <p>Is Billable</p>
                </fieldset>
            </form>
            <button className='btn' onClick={handleSubmit}>Submit</button>
            {view && <section className='details'>
                <h2 className='sub-title'>Employee Details</h2>
                <p>First Name: {fName}</p>
                <p>Last Name: {lName}</p>
                <p>DOB: {dob}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phone}</p>
                <p>Designation: {desi}</p>
            </section>}
        </section>
        </>
    )
}

export default Form;