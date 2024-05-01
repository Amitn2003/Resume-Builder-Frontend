import React from 'react'

const Education2 = ({ eduNeed }) => {
    console.log(eduNeed)

    return (
        <>
        <div class=" border-blue-700 rounded-md p-2 mb-2">
            <label htmlFor="edu2" class="block text-sm font-medium text-gray-700">Other School or College Name:</label>
            <input type="text" name="edu2" id="edu2" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="School or other college" />
        </div>
            <div class="border-blue-700 rounded-md p-2 mb-2">
                <label htmlFor="course2" class="block text-sm font-medium text-gray-700">Course/Degree name:</label>
                <input type="text" name="course2" id="course2" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="H.S. / Madhyamik / Other" />
            </div>
            <div class="border-blue-700 rounded-md p-2 mb-2 flex justify-between gap-4">
                <div>
                    <label htmlFor="clgStart2" class="block text-sm font-medium text-gray-700">Starting (Year):</label>
                    <input type="number" name="clgStart2" id="clgStart2" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="Ex: 2022" />
                </div>
                <div>
                    <label htmlFor="clgEnd2" class="block text-sm font-medium text-gray-700">Ending Year:</label>
                    <input type="number" name="clgEnd2" id="clgEnd2" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="Leave blank if not completed yet" />
                </div>
            </div>
            <div class="border-blue-700 rounded-md p-2 mb-2">
                <label htmlFor="board2" class="block text-sm font-medium text-gray-700">Board/University name:</label>
                <input type="text" name="board2" id="board2" class="border border-blue-700 rounded-md p-2 mb-2" placeholder="WBBSE / University" />
            </div>



        </>
    )
}

export default Education2
