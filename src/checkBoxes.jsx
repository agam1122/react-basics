import { useState } from "react";

function CheckBoxes(){

    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        } else {
            setSkills([...skills.filter((item) => item!=event.target.value)])
        }
    }

    const [gender, setGender] = useState("female")
    const [city, setCity] = useState("delhi")

    return(
        <div>
            <h3>Select Your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="php" value="Php"/>
            <label htmlFor="php">PHP</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="java" value="Java"/>
            <label for="java">Java</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="javascript" value="Javascript"/>
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <h4>{skills.toString()}</h4>

            <br /><hr />
            <h1>Handle radio and dropdown</h1>

            <h4>Select Gender</h4>
            <input type="radio" onClick={(event) => setGender(event.target.value)} name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" onClick={(event) => setGender(event.target.value)} name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>

            <h4>Gender: {gender}</h4>
            <br /><br /><br />


            <h4>Select City</h4>
            <select defaultValue={city} onChange={(event) => setCity(event.target.value)}>
                <option value="noida">Noida</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="delhi">Delhi</option>
            </select>
            <h4>City: {city}</h4>



        </div>
    );
}

export default CheckBoxes;