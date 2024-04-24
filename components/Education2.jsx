import React from 'react'

const Education2 = ({ eduNeed }) => {
    console.log(eduNeed)

    return (
        <>

            <div>
                <label htmlFor="edu2">Other School or College Name:</label>
                <input type="text" name="edu2" id="edu2" className='border-blue-700 border-2' placeholder='School or other college' />
                <br />

                <label htmlFor="course2">Course/Degree name:</label>
                <input type="text" name="course2" id="course2" className='border-blue-700 border-2 ' placeholder='H.S. / Madhyamik / Other' />

                <label htmlFor="clgStart2">Starting (Year) :</label>
                <input type="number" name="clgStart2" id="clgStart2" className='border-blue-700 border-2' placeholder='Ex: 2022' />
                <label htmlFor="clgEnd2">Ending Year:</label>
                <input type="number" name="clgEnd2" id="clgEnd2" className='border-blue-700 border-2 ' placeholder='Leave blank if not completed yet' />
                <label htmlFor="board2">Board/Univercity name:</label>
                <input type="text" name="board2" id="board2" className='border-blue-700 border-2 ' placeholder='WBBSE / Univercity ' />

            </div>
        </>
    )
}

export default Education2
