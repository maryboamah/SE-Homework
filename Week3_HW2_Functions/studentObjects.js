const students =[{
    firstname:"Mansa",
    schoolActivity:"boxing",
    gender:"female"},
    {
        firstname:"Jason",
        schoolActivity:"Dancing",
        gender:"male"},
        {
            firstname:"Dennis",
            schoolActivity:"singing",
            gender:"Male"},
            {
                firstname:"Nancy",
                schoolActivity:"Singing",
                gender:"female"},
                {
                    firstname:"Juliet",
                    schoolActivity:"Swimming",
                    gender:"Female"}
            
]

document.getElementById("allstudents").innerHTML= `<table> <tr><th>Name</th><th>School Activity</th><th>Gender</th</tr> `+students.map(function(user){
    return  `<tr><td>${user.firstname}</td><td>${user.schoolActivity}</td><td>${user.gender}`
    
}).join('') + `</td></tr></table>`

function getout1(){
    
    let searchword = document.getElementById("searchword").value
    let activity = document.getElementById("selectoptions").value
    const filterStudent = students.filter((student)=>(student[activity]).toLowerCase()==searchword.toLowerCase())

    if (filterStudent == false) {
        return document.getElementById("student").innerText = "Sorry Your search did not match any student"

    }else{
     document.getElementById("student").innerHTML = `<h3>Result From search</h3>`+`<table> <tr><th>Name</th><th>School Activity</th><th>Gender</th</tr> `+filterStudent.map(function(user){
        return  `<tr><td>${user.firstname}</td><td>${user.schoolActivity}</td><td>${user.gender}`
        
    }).join('') + `</td></tr></table>`
}

}


