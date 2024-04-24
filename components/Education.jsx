import React from 'react'

const Education = ({ eduNeed }) => {
    console.log(eduNeed)
    
    return (
        <>
            
            <div>
                <label htmlFor="edu">Other School or College Name:</label>
                <input type="text" name="edu" id="edu" className='border-blue-700 border-2' placeholder='School or other college' />
                <br />

                <label htmlFor="course">Course/Degree name:</label>
                <input type="text" name="course" id="course" className='border-blue-700 border-2 ' placeholder='H.S. / Madhyamik / Other' />

                <label htmlFor="clgStart">Starting (Year) :</label>
                <input type="number" name="clgStart" id="clgStart" className='border-blue-700 border-2' placeholder='Ex: 2022' />
                <label htmlFor="clgEnd">Ending Year:</label>
                <input type="number" name="clgEnd" id="clgEnd" className='border-blue-700 border-2 ' placeholder='Leave blank if not completed yet' />
                <label htmlFor="board">Board/Univercity name:</label>
                <input type="text" name="board" id="board" className='border-blue-700 border-2 ' placeholder='WBBSE / Univercity ' />

            </div>
        </>
    )
}

export default Education
