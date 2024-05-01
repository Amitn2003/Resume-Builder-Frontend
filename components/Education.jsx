import React from 'react'

const Education = ({ eduNeed }) => {
    console.log(eduNeed)
    
    return (
        <>
            
            <div>
  <label htmlFor="edu" class="block">Other School or College Name:</label>
  <input type="text" name="edu" id="edu" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="School or other college" />
  <br />

  <label htmlFor="course" class="block">Course/Degree name:</label>
  <input type="text" name="course" id="course" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="H.S. / Madhyamik / Other" />
<br />
  <label htmlFor="clgStart" class="block">Starting (Year):</label>
  <input type="number" name="clgStart" id="clgStart" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="Ex: 2022" />

  <label htmlFor="clgEnd" class="block">Ending Year:</label>
  <input type="number" name="clgEnd" id="clgEnd" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="Leave blank if not completed yet" />

  <label htmlFor="board" class="block">Board/University name:</label>
  <input type="text" name="board" id="board" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="WBBSE / University" />
</div>

        </>
    )
}

export default Education
