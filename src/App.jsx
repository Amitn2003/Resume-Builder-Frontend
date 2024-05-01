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














  const redirectToWebsite = (name, phone, address, district, pincode, email, bio, obj, techSkills, softSkills, lang, hobbies, seacom, edu, course, clgStart, clgEnd, board, stream, edu2, course2, clgStart2, clgEnd2, board2) => {
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
      clgEnd2: clgEnd2,
      board2: board2,
      course: course,
      clgStart: clgStart,
      clgEnd: clgEnd,
      board: board,
      stream: stream,
    });
    console.log(queryParams.toString())
    const url = 'https://resume-builder-backend-6uuy.onrender.com/generate?' + queryParams.toString();

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
      edu2 = e.target.edu2.value;
      course2 = e.target.course2.value;
      clgStart2 = e.target.clgStart2.value;
      clgEnd2 = e.target.clgEnd2.value;
      board2 = e.target.board2.value;
    }
    catch {
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
      e.target.reading.checked,
      e.target.cooking.checked,
      e.target.gardening.checked,
      e.target.exercising.checked,
      e.target.painting.checked,
      e.target.music.checked,
      e.target.outdoorAct.checked,
      e.target.diy.checked,
      e.target.gaming.checked,
      e.target.fashion.checked,
    ]
    // console.log(techSkills, softSkills, hobbies)


    redirectToWebsite(name, phone, address, district, pincode, email, bio, obj, techSkills, softSkills, lang, hobbies, seacom, edu, course, clgStart, clgEnd, board, stream, edu2, course2, clgStart2, clgEnd2, board2)

  }










  return (
    <>
      <div>
        <div className="container">



          <br />

        </div>
      </div>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl mb-4">Welcome to Resume Builder!!</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="border border-blue-700 rounded-md p-2" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" name="phone" id="phone" className="border border-blue-700 rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address" className="border border-blue-700 rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="dict">District:</label>
            <input type="text" name="dict" id="dict" className="border border-blue-700 rounded-md p-2" placeholder="Ex: Howrah" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pin">Pin Code:</label>
            <input type="number" name="pin" id="pin" className="border border-blue-700 rounded-md p-2" placeholder="765 432" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" className="border border-blue-700 rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bio">Bio:</label>
            <input type="text" name="bio" id="bio" className="border border-blue-700 rounded-md p-2" placeholder='Leave it blank' />
          </div>

          <div className="flex flex-col">
            <label htmlFor="obj">Career Objective:</label>
            <input type="text" name="obj" id="obj" className="border border-blue-700 rounded-md p-2 " placeholder="Leave it blank to auto generate" />
          </div>

          <div className="flex flex-col">
            <h4 className='text-xl'>Education</h4>
            <div>
            <label htmlFor="seacom">Seacom College (BCA)?</label>
            <input type="checkbox" name="seacom" id="seacom" className="border border-blue-700 rounded-md p-2 ml-3" /> 
            </div>
            <br />

            <Education eduNeed={eduNeed} />
            {moreEdu == false && (
              <button onClick={(e) => {
                e.preventDefault()
                console.log(eduNeed)
                setEduNeed(eduNeed + 1);
                setMoreEdu(true)
              }} className="border border-blue-700 rounded-md p-2">Add More Education</button>
            )}
            {moreEdu && (
              <>
                <Education2 />
                <br />
                <br />
              </>
            )}
            <p className='text-xl'>Your stream :</p>
            <div>
            <input type="radio" id="arts" name="stream" value="Arts" className='border border-blue-700 rounded-md p-2 mr-2' />
            <label htmlFor="arts">Arts</label><br />
            </div>
            <div>
            <input type="radio" id="commu" name="stream" value="Commerce" className='border border-blue-700 rounded-md p-2 mr-2' />
            <label htmlFor="commu">Commerce</label><br />
            </div>
            <div>
            <input type="radio" id="scie" name="stream" value="Science" className='border border-blue-700 rounded-md p-2 mr-2' />
            <label htmlFor="scie">Science</label><br />
            </div>
          </div>

          <div className="flex flex-col">
          <p className='text-xl'>Technical Skills</p>
            <div className="space-y-1">
              <input type="checkbox" name="c" id="c" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="c" className=''>C</label> <br></br>

              <input type="checkbox" name="cpp" id="cpp" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="cpp">C++</label> <br></br>

              <input type="checkbox" name="java" id="java" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="java">Java</label> <br></br>

              <input type="checkbox" name="python" id="python" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="python">Python</label> <br></br>

              <input type="checkbox" name="sql" id="sql" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="sql">SQL</label> <br></br>

              <input type="checkbox" name="html" id="html" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="html">HTML</label> <br></br>

              <input type="checkbox" name="css" id="css" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="css">CSS</label> <br></br>

              <input type="checkbox" name="office" id="office" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="office">MS Office</label> <br></br>

              <input type="checkbox" name="js" id="js" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="js">JavaScript</label> <br></br>

              <input type="checkbox" name="react" id="react" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="react">React</label> <br></br>

              <input type="checkbox" name="node" id="node" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="node">Node JS</label> <br></br>

              <input type="checkbox" name="mongo" id="mongo" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="mongo">Mongo DB</label> <br></br>

              <input type="checkbox" name="cloud" id="cloud" className="border border-blue-700 rounded-md p-2 mr-2" />
              <label htmlFor="cloud">Cloud Computing</label> <br></br>



              {/* Add other technical skills checkboxes similarly */}
            </div>
            <div className="flex flex-col">
              <label className="mt-2 mb-2 text-xl">Soft Skills:</label>
              <div className="space-y-1">
                <div className="flex items-center">
                  <input type="checkbox" name="comm" id="comm" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="comm">Communication</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="problemSolving" id="problemSolving" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="problemSolving">Problem Solving</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="team" id="team" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="team">Team Work</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="adap" id="adap" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="adap">Adaptibility</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="creative" id="creative" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="creative">Creativity</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="eq" id="eq" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="eq">Emotional Intelligent</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="decision" id="decision" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="decision">Decision Making</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="timeMgmt" id="timeMgmt" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="timeMgmt">Time Management</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="leadership" id="leadership" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="leadership">Leadership Skill</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="conflictResolution" id="conflictResolution" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="conflictResolution">Conflict Resolution</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="criticalThinking" id="criticalThinking" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="criticalThinking">Critical Thinking</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="attentionDetails" id="attentionDetails" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="attentionDetails">Attention to Detail</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="resilience" id="resilience" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="resilience">Resilience</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="networking" id="networking" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="networking">Networking</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="interpersonal" id="interpersonal" className="border border-blue-700 rounded-md p-2 mr-2" />
                  <label htmlFor="interpersonal">Interpersonal Skills</label>
                </div>
              </div>
            </div>

          </div>

          <br />
          <div>
          <p className='text-xl'>Languages</p>
            
            <input type="checkbox" name="beng" id="beng" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="beng">Bengali</label>
            <br />
            <input type="checkbox" name="hindi" id="hindi" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="hindi">Hindi</label>
            <br />
            <input type="checkbox" name="eng" id="eng" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="eng">English</label>
          </div>


          <br />
          <div>
            <p className='text-xl'> Hobbies & Interests  </p>
            <input type="checkbox" name="dance" id="dance" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="dance">Dance</label>
            <br />
            <input type="checkbox" name="movie" id="movie" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="movie">Watching Movies & WebSeries</label>
            <br />
            <input type="checkbox" name="travel" id="travel" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="travel">Travelling</label>
            <br />
            <input type="checkbox" name="photography" id="photography" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="photography">Photography</label>
            <br />
            <input type="checkbox" name="reading" id="reading" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="reading">Reading</label>
            <br />
            <input type="checkbox" name="cooking" id="cooking" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="cooking">Cooking</label>
            <br />
            <input type="checkbox" name="gardening" id="gardening" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="gardening">Gardening</label>
            <br />
            <input type="checkbox" name="exercising" id="exercising" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="exercising">Exercising</label>
            <br />
            <input type="checkbox" name="painting" id="painting" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="painting">Painting</label>
            <br />
            <input type="checkbox" name="music" id="music" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="music">Playing Musical Instruments</label>
            <br />
            <input type="checkbox" name="outdoorAct" id="outdoorAct" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="outdoorAct">Hiking/Outdoor Activities</label>
            <br />
            <input type="checkbox" name="diy" id="diy" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="diy">DIY Crafts</label>
            <br />
            <input type="checkbox" name="gaming" id="gaming" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="gaming">Gaming</label>
            <br />
            <input type="checkbox" name="fashion" id="fashion" className='border-blue-700 border-2 p-2 mr-2' />
            <label htmlFor="fashion">Fashion</label>
            <br />



          </div>

          {/* Repeat the above pattern for Soft Skills, Languages, and Hobbies & Interests */}

          <div className="flex justify-center">
            <input className="border border-blue-700 rounded-md p-3" type="submit" value="Download" onClick={() => {
              handleSubmit()
            }} />
          </div>















        </form>

        <div className="mt-8">
          {data && (
            <div>
              <button onClick={handleDownload} className="border border-blue-700 rounded-md p-2">Download Data</button>
              {/* Render fetched data */}
            </div>
          )}
        </div>

      </div>



    </>
  )
}

export default App
