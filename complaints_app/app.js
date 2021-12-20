const buttons = document.querySelectorAll(".borough")
let complain = document.getElementById("complain-type")
let complain_description = document.getElementById("description")

//set limit for data
let limit = 10;


  
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
            let startDiv =`<div class = "map-grid">` 
            //get raw and extract complain type from the data
            complainType.map(function(complaint){
                
                    

                return startDiv +=`<div class="complaint-is"><img src="images/list.png" style="width:17px">${complaint.descriptor} </div><div><button
                 type="submit" 
                class="what-do-police">WHAT DID THE POLICE DO</button></div><div class="resolve" style="display:none">${ complaint.resolution_description}</div>` 

            }).join('') ;
            startDiv += `</div>`
            complain.innerHTML = startDiv
            let resolvepage = document.getElementsByClassName("resolve")
let buttonClick = document.getElementsByClassName("what-do-police")
            for(let i=0; i<resolvepage.length; i++){
                buttonClick[i].onclick = function(){
                    if(resolvepage[i].style.display ="block"){
                        buttonClick[i].onclick = function(){
                            resolvepage[i].style.display ="none"
                        }
                        }else if(resolvepage[i].style.display ="none"){
                            buttonClick[i].onclick =function(){
                                resolvepage[i].style.display ="block"

                            }
                      

                    }
                    
                }

            }

    
        })
        .catch((error)=>{
            console.log(error)
        })
    })
} )       