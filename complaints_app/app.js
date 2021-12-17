const buttons = document.querySelectorAll("button")
let complain = document.getElementById("complain-type")

//set limit for data
let limit = 10;
//get borough from button

buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click',()=>{
        const borough = currentBtn.value;
        let userLimit = document.getElementById("borough-search").value
        console.log(userLimit)
        userLimit?limit=userLimit : limit=10
        //limit = userLimit
        //get borough from button
        console.log(borough)
        const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&$offset=5&borough=${borough}&agency=NYPD`
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            let complainType = data;
            complain.innerHTML =`<ul>`+complainType.map(function(complaint){
                return `<li>${complaint.complaint_type}</li><button type="button" class="what-do-police" style=display:"inline">WHAT DID THE POLICE DO</button>`

            }).join('') + `</ul>`;
    
        })
        .catch((error)=>{
            console.log(error)
        })
    })
} )       