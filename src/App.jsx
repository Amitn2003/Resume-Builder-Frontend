import { useState } from 'react'
import './App.css'
import Education from '../components/Education';
import Education2 from '../components/Education2';

function App() {
  // const [name, setName] = useState("")
  const [data, setData] = useState(null);
  const [eduNeed, setEduNeed] = useState(0);
  const [moreEdu, setMoreEdu] = useState(false);

  // const getDataFromApi = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/generate');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     console.log(response)
  //     const fetchedData = await response.text(); // Adjust this based on the response type
  //     setData(fetchedData);
  //     // handleDownload()
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // const handleDownload = () => {
  //   if (!data) return;

  //   // Create Blob
  //   const blob = new Blob([data], { type: 'application/pdf' }); // Adjust the MIME type as per your data

  //   // Create download link
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', `${Math.floor(Math.random() * 999999)}_data.pdf`); // Change the filename and extension as per your data type

  //   // Trigger download
  //   document.body.appendChild(link);
  //   link.click();

  //   // Cleanup
  //   document.body.removeChild(link);
  //   window.URL.revokeObjectURL(url);
  // };














  const redirectToWebsite = (name, phone, address, district, pincode, email, bio, obj, techSkills, softSkills, lang, hobbies, seacom, edu, course, clgStart, clgEnd, board, stream , edu2, course2, clgStart2, clgEnd2, board2) => {
    // Construct the URL with query parameters

    const queryParams = new URLSearchParams({
      name: name,
      email: email,
      phone: phone,
      bio: bio,
      obj: obj,
      address: address,
      district: district,
      pincode: pincode,
      tech: techSkills,
      soft: softSkills,
      lang: lang,
      hobbies: hobbies,
      seacom: seacom,
      edu: edu,
      edu2: edu2,
      course2: course2,
      clgStart2: clgStart2,
      clgEnd2 : clgEnd2,
      board2 : board2,
      course: course,
      clgStart: clgStart,
      clgEnd: clgEnd,
      board: board,
      stream: stream,
    });
    console.log(queryParams.toString())
    const url = 'http://localhost:8000/generate?' + queryParams.toString();

    // Redirect the user
    window.location.href = url;
    // Alternatively, you can use window.location.replace(url) for a similar effect
  };



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.phone.value)
    // console.log(e.target.c.checked)
    // console.log(e.target.cpp.checked)
    // getDataFromApi();
    let name = e.target.name.value
    let phone = e.target.phone.value
    let address = e.target.address.value
    let district = e.target.dict.value
    let pincode = e.target.pin.value
    let email = e.target.email.value
    let bio = e.target.bio.value
    let obj = e.target.obj.value;
    let seacom = e.target.seacom.checked;
    let edu = e.target.edu.value;
    let course = e.target.course.value;
    let clgStart = e.target.clgStart.value;
    let clgEnd = e.target.clgEnd.value;
    let board = e.target.board.value;
    let edu2 = "";
    let course2 = "";
    let clgStart2 = "";
    let clgEnd2 = "";
    let board2 = "";
    try {
      edu2 = e.target.edu2.value ;
      course2 = e.target.course2.value;
      clgStart2 = e.target.clgStart2.value;
      clgEnd2 = e.target.clgEnd2.value;
      board2 = e.target.board2.value;
    }
    catch{
      console.log(edu2, " is not there")
    }
    let stream = e.target.stream.value
    let techSkills = [
      e.target.c.checked,
      e.target.cpp.checked,
      e.target.java.checked,
      e.target.python.checked,
      e.target.sql.checked,
      e.target.office.checked,
      e.target.html.checked,
      e.target.css.checked,
      e.target.js.checked,
      e.target.react.checked,
      e.target.node.checked,
      e.target.mongo.checked,
      e.target.cloud.checked,
    ]
    let softSkills = [
      e.target.comm.checked,
      e.target.problemSolving.checked,
      e.target.team.checked,
      e.target.adap.checked,
      e.target.creative.checked,
      e.target.eq.checked,
      e.target.decision.checked,
      e.target.timeMgmt.checked,
      e.target.leadership.checked,
      e.target.conflictResolution.checked,
      e.target.criticalThinking.checked,
      e.target.attentionDetails.checked,
      e.target.resilience.checked,
      e.target.networking.checked,
      e.target.interpersonal.checked,
    ]

    let lang = [
      e.target.beng.checked,
      e.target.hindi.checked,
      e.target.eng.checked,
    ]

    let hobbies = [
      e.target.dance.checked,
      e.target.movie.checked,
      e.target.travel.checked,
      e.target.photography.checked,
    ]
    // console.log(techSkills, softSkills, hobbies)


    redirectToWebsite(name, phone, address, district, pincode, email, bio, obj, techSkills, softSkills, lang, hobbies, seacom, edu, course, clgStart, clgEnd, board, stream , edu2, course2, clgStart2, clgEnd2, board2)

  }










  return (
    <>
      <div>
        <div className="container">
          <h2 className='text-3xl'>Welcome to Resume Builder!!</h2>

          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="name">Name : </label>
              <input type="text" name="name" id="name" className='border-blue-700 border-2' />
            </div>
            <br />
            <div>
              <label htmlFor="phone">Phone Number : </label>
              <input type="number" name="phone" id="phone" className='border-blue-700 border-2' />
            </div>

            <br />
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" className='border-blue-700 border-2' />
            </div>

            <br />

            <div>
              <label htmlFor="dict">District</label>
              <input type="text" name="dict" id="dict" className='border-blue-700 border-2' placeholder='Ex: Howrah' />
            </div>
            <div>
              <label htmlFor="pin">Pin Code</label>
              <input type="number" name="pin" id="pin" className='border-blue-700 border-2' placeholder='765 432' />
            </div>

            <br />

            <br />

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className='border-blue-700 border-2' />
            </div>

            <br />

            <div>
              <label htmlFor="bio">Bio</label>
              <input type="text" name="bio" id="bio" className='border-blue-700 border-2' />
            </div>

            <br />
            <div>
              <label htmlFor="obj">Career Objective</label>
              <input type="text" name="obj" id="obj" className='border-blue-700 border-2
               w-[50vw]' placeholder='Leave it blank to auto generate' />
            </div>
            <br />
            <div>
              <h4>Education</h4>
              <label htmlFor="seacom">Seacom College (BCA)? </label>
              <input type="checkbox" name="seacom" id="seacom" className='border-blue-700 border-2' /> <br />

              <Education eduNeed={eduNeed} />
              {moreEdu == false && <button onClick={(e) => {
                e.preventDefault()
                console.log(eduNeed)
                setEduNeed(eduNeed + 1);
                setMoreEdu(true)
              }}>Add More Education</button>}
              {moreEdu?<> <br/> <br/><Education2/></>:""}
              <p>Your stream :</p>
              <input type="radio" id="arts" name="stream" value="Arts" />
              <label htmlFor="arts">Arts</label><br />
              <input type="radio" id="commu" name="stream" value="Commerce" />
              <label htmlFor="commu">Commerce</label><br />
              <input type="radio" id="scie" name="stream" value="Science" />
              <label htmlFor="scie">Science</label><br />




            </div>
            <br />
            <div>
              Technical Skills <br />
              <label htmlFor="c">C</label>
              <input type="checkbox" name="c" id="c" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="cpp">C++</label>
              <input type="checkbox" name="cpp" id="cpp" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="java">Java</label>
              <input type="checkbox" name="java" id="java" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="python">Python</label>
              <input type="checkbox" name="python" id="python" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="sql">SQL</label>
              <input type="checkbox" name="sql" id="sql" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="html">HTML</label>
              <input type="checkbox" name="html" id="html" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="css">CSS</label>
              <input type="checkbox" name="css" id="css" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="office">MS Office</label>
              <input type="checkbox" name="office" id="office" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="js">JavaScript</label>
              <input type="checkbox" name="js" id="js" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="react">React JS</label>
              <input type="checkbox" name="react" id="react" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="node">Node JS</label>
              <input type="checkbox" name="node" id="node" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="mongo">MongoDB</label>
              <input type="checkbox" name="mongo" id="mongo" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="cloud">Cloud Computing</label>
              <input type="checkbox" name="cloud" id="cloud" className='border-blue-700 border-2' />

            </div>
            <br />
            <div>
              Soft Skills <br />
              <label htmlFor="comm">Communication</label>
              <input type="checkbox" name="comm" id="comm" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="problemSolving">Problem Solving</label>
              <input type="checkbox" name="problemSolving" id="problemSolving" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="team">Team Work</label>
              <input type="checkbox" name="team" id="team" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="adap">Adaptibility</label>
              <input type="checkbox" name="adap" id="adap" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="creative">Creativity</label>
              <input type="checkbox" name="creative" id="creative" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="eq">Emotional Intelligent</label>
              <input type="checkbox" name="eq" id="eq" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="decision">Decision Making</label>
              <input type="checkbox" name="decision" id="decision" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="timeMgmt">Time Management</label>
              <input type="checkbox" name="timeMgmt" id="timeMgmt" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="leadership">Leadership Skill</label>
              <input type="checkbox" name="leadership" id="leadership" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="conflictResolution">Conflict Resolution</label>
              <input type="checkbox" name="conflictResolution" id="conflictResolution" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="criticalThinking">Critical Thinking</label>
              <input type="checkbox" name="criticalThinking" id="criticalThinking" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="attentionDetails">Attention to Detail</label>
              <input type="checkbox" name="attentionDetails" id="attentionDetails" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="resilience">Resilience</label>
              <input type="checkbox" name="resilience" id="resilience" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="networking">Networking</label>
              <input type="checkbox" name="networking" id="networking" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="interpersonal">Interpersonal Skills</label>
              <input type="checkbox" name="interpersonal" id="interpersonal" className='border-blue-700 border-2' />
            </div>
            <br />
            <div>
              Languages <br />
              <label htmlFor="beng">Bengali</label>
              <input type="checkbox" name="beng" id="beng" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="hindi">Hindi</label>
              <input type="checkbox" name="hindi" id="hindi" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="eng">English</label>
              <input type="checkbox" name="eng" id="eng" className='border-blue-700 border-2' />
            </div>
            <br />
            <div>
              Hobbies & Interests  <br />
              <label htmlFor="dance">Dance</label>
              <input type="checkbox" name="dance" id="dance" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="movie">Watching Movies & WebSeries</label>
              <input type="checkbox" name="movie" id="movie" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="travel">Travelling</label>
              <input type="checkbox" name="travel" id="travel" className='border-blue-700 border-2' />
              <br />
              <label htmlFor="photography">Photography</label>
              <input type="checkbox" name="photography" id="photography" className='border-blue-700 border-2' />
              <br />



            </div>

            <br />
            <br />


            <input className='border-2 p-3' type="submit" value="Submit" onClick={() => {
              handleSubmit()
            }} />
          </form>

          <br />
          <br />
          <br />
          {
            data && (
              <div>
                <button onClick={handleDownload}>Download Data</button>
                {/* Render fetched data */}
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
