
            //function for player Attacks
            function playerAttacks(){
                let playerAttack =  player.attack()
                if(playerAttack < playerAccuracyScore){
                    enemyHullScore = enemyHullScore - playerFirepowerScore
                    if (enemyHullScore <=0){
                        enemiesRemaining--
                        if(enemiesRemaining == 0){
                            alert("You won")

                        }
                    }else{
                        playerAttacks()
                    }

                }else{
                    enemyAttacks()

                }
            }



     //function for enemy Atacks
            function enemyAttacks(){
                alert("You missed. Its the enemies turn")
                let enemyAttack = enemyArray[i].attack()
                if(enemyAttack <enemyAccuracyScore){
                    alert("You got hit")
                    playerHullScore = playerHullScore -enemyFirepowerScore
                    if(playerHullScore <=0){
                        alert("you lost")

                    }else{
                        enemyAttacks()
                    }
                
                }else{
                    playerAttacks()
                }

            }






            function startGame (){
                for(let i=0; i<enemyArray.length;i++){
                    let enemyHullScore = enemyArray[i].hull
            let enemyFirepowerScore = enemyArray[i].firepower
            let enemyAccuracyScore = enemyArray[i].accuracy
        
            //putting player score in dom
            enemyHullDom.innerHTML =enemyHullScore
            enemyFirePowerDom.innerHTML = enemyFirepowerScore
            enemyAccuracyDom.innerHTML = enemyAccuracyScore
        
                    let playerChoice =  prompt(`[Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                    if(playerChoice && playerChoice.toLocaleLowerCase() == "attack"){
                        let playerAttack =  player.attack()
                        if(playerAttack < playerAccuracyScore){
                            enemyHullScore = enemyHullScore - playerFirepowerScore
                            if(enemyHullScore<=0){
                                enemiesRemaining--
                                if(enemiesRemaining ==0){
                                    alert("You won")
                                    
                                }
                            }else{
                                alert("Their Ship is almost Destroyed Continue Attack")
                                playerChoice =  prompt(`[Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                                playerAttack
                                if(playerAttack < playerAccuracyScore){
                                    enemyHullScore = enemyHullScore - playerFirepowerScore
                                    if(enemyHullScore <=0){
                                        enemiesRemaining--
                                        if(enemiesRemaining==0){
                                            alert("You won")
                                        }
                                    }
                                    
        
                                }else{
                                    alert("You missed. Its the enemies turn")
                                    let enemyAttack = enemyArray[i].attack()
                                    //console.log(enemyAttack)
                                    if(enemyAttack <enemyAccuracyScore){
                                        // while( playerHullScore<=0){
                                        //     if(k<=0){
                                        //         alert("You Got destroyed by the enemy. Sorry to see you loose")
                
                                        //     }else{
                                        //         alert("The enemy is attacking")
                                        //         enemyAttack
                                                
                                        //     }
                                        //     playerHullScore-enemyFirepowerScore
                                        // }
                
                
                
                
                                        
                                       alert("You got hit")
                                       playerHullScore = playerHullScore -enemyFirepowerScore
                                       
                                       if((playerHullScore >0)){
                                        
                                         alert("Enemy is Attacking")
                                         enemyAttack
                                         if(enemyAttack <enemyAccuracyScore){
                                            alert("You got hit")
                                            playerHullScore = playerHullScore -enemyFirepowerScore
                                            if(playerHullScore <=0){
                                                alert("Sorry You Got Destroyed By the Alien. You loose")
                
                                            }else{
                                                alert("Enemy attacking")
                                                enemyAttack
                                                if(enemyAttack < enemyAccuracyScore){
                                                    alert("you got hit")
                                                    playerHullScore = playerHullScore-enemyFirepowerScore
                                                }
                                            }
                                         }else if(enemyAttack> enemyAccuracyScore){
                                            
                                            playerChoice= prompt(`The enemy missed is your turn to attack [Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                                            playerAttack
                                         }
                
                                       }else if(playerHullScore <=0){
                                           
                                           
                                           alert("Sorry You Got Destroyed By the Alien. You loose")}
                
                                    } else {
                                       playerChoice=prompt(`The enemy missed is your turn to attack [Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                
                                        playerAttack
                                        if(playerAttack< playerAccuracyScore){
                                            enemyHullScore = enemyHullScore - playerFirepowerScore
                                            if(enemyHullScore<=0){
                                                enemiesRemaining--
                                                if(enemiesRemaining ==0){
                                                    alert("You won")
                                                    
                                                }
                                            }else{
                                                alert("Their Ship is almost Destroyed Continue Attack")
                                                playerChoice =  prompt(`[Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                                                playerAttack
                                                if(playerAttack < playerAccuracyScore){
                                                    enemyHullScore = enemyHullScore - playerFirepowerScore
                                                    if(enemyHullScore <=0){
                                                        enemiesRemaining--
                                                        if(enemiesRemaining==0){
                                                            alert("You won")
                                                        }
                                                    }
                                                    
                        
                                                }
                                            }
                                        }
                                    } 
                                }
                            }
                        }else {
                            alert("You missed. Its the enemies turn")
                            let enemyAttack = enemyArray[i].attack()
                            //console.log(enemyAttack)
                            if(enemyAttack <enemyAccuracyScore){
                                // while( playerHullScore<=0){
                                //     if(k<=0){
                                //         alert("You Got destroyed by the enemy. Sorry to see you loose")
        
                                //     }else{
                                //         alert("The enemy is attacking")
                                //         enemyAttack
                                        
                                //     }
                                //     playerHullScore-enemyFirepowerScore
                                // }
        
        
        
        
                                
                               alert("You got hit")
                               playerHullScore = playerHullScore -enemyFirepowerScore
                               
                               if((playerHullScore >0)){
                                
                                 alert("Enemy is Attacking")
                                 enemyAttack
                                 if(enemyAttack <enemyAccuracyScore){
                                    alert("You got hit")
                                    playerHullScore = playerHullScore -enemyFirepowerScore
                                    if(playerHullScore <=0){
                                        alert("Sorry You Got Destroyed By the Alien. You loose")
        
                                    }else{
                                        alert("Enemy attacking")
                                        enemyAttack
                                        if(enemyAttack < enemyAccuracyScore){
                                            alert("you got hit")
                                            playerHullScore = playerHullScore-enemyFirepowerScore
                                        }
                                    }
                                 }else if(enemyAttack> enemyAccuracyScore){
                                     playerAttack
                                    playerChoice= prompt(`The enemy missed is your turn to attack [Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                                 }
        
                               }else if(playerHullScore <=0){
                                   
                                   
                                   alert("Sorry You Got Destroyed By the Alien. You loose")}
        
                            } else {
                               playerChoice=prompt(`The enemy missed is your turn to attack [Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
        
                                playerAttack
                                if(playerAttack< playerAccuracyScore){
                                    enemyHullScore = enemyHullScore - playerFirepowerScore
                                    if(enemyHullScore<=0){
                                        enemiesRemaining--
                                        if(enemiesRemaining ==0){
                                            alert("You won")
                                            
                                        }
                                    }else{
                                        alert("Their Ship is almost Destroyed Continue Attack")
                                        playerChoice =  prompt(`[Current Health:${playerHullScore}] [Target's Health: ${enemyHullScore}] [Enemies Remaining: ${enemiesRemaining}]`, `attack/retreat`)
                                        playerAttack
                                        if(playerAttack < playerAccuracyScore){
                                            enemyHullScore = enemyHullScore - playerFirepowerScore
                                            if(enemyHullScore <=0){
                                                enemiesRemaining--
                                                if(enemiesRemaining==0){
                                                    alert("You won")
                                                }
                                            }
                                            
                
                                        }
                                    }
                                }
                            }
                        }
                        
        
                    }else{
                        alert ("BYE BYE. Have A nice Day")
                        
                    }
        
                }
            }
        