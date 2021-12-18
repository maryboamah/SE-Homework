const buttons = document.querySelectorAll("button")
let complain = document.getElementById("complain-type")
let complain_description = document.getElementById("description")
let resolvepage = document.getElementById("resolve")
//set limit for data
let limit = 10;
//function
// function getResolve() {
//     document.getElementById("resolve").style.display = "YOU CLICKED ME!";
//   }

  
//get borough from button

buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click',()=>{
        const borough = currentBtn.value;
        let userLimit = document.getElementById("borough-search").value
        
        userLimit?limit=userLimit : limit=10
        //limit = userLimit
        //get borough from button
       //get data from NYC open data and getinformation from New York Police  department and from the boroughs
        const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&$offset=5&borough=${borough}&agency=NYPD`
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            let complainType = data;
            
            //get raw and extract complain type from the data
            complain.innerHTML =complainType.map(function(complaint){
                
                    

                return `<div class = "map-grid"><div class="complaint-is">${complaint.complaint_type} <div id="resolve" style="display:none">${ complaint.resolution_description}</div></div><div><button
                ${onclick = function getResolve(){let press = document.getElementById("resolve")
                

                if(press.style.display==="none"){press.style.display="block"}else{press.style.display="none"}}} type="button" 
                class="what-do-police">WHAT DID THE POLICE DO</button></div> </div>` 

            }).join('') ;

    
        })
        .catch((error)=>{
            console.log(error)
        })
    })
} )       