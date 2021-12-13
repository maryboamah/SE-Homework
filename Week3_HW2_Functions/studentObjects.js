const students =[{
    fname:"Mansa",
    schoolActivity:"boxing",
    gender:"female"},
    {
        firstname:"Jason",
        schoolActivity:"Dancing",
        gender:"male"},
        {
            fname:"Dennis",
            schoolActivity:"singing",
            gender:"Male"},
            {
                fname:"Nancy",
                schoolActivity:"Singing",
                gender:"female"},
                {
                    fname:"Juliet",
                    schoolActivity:"Swimming",
                    gender:"Female"}
            
]


function getout1(){
    
    let searchword = document.getElementById("searchword").value
    let activity = document.getElementById("selectoptions").value
    const filterStudent = students.filter((student)=>(student[activity]).toLowerCase()==searchword.toLowerCase())

    if (filterStudent == false) {
        return document.getElementById("student").innerText = "Sorry Your search did not match any student"

    }else{
    return document.getElementById("student").innerText = `These are the results of your search: ${JSON.stringify(filterStudent)}`
}

}

