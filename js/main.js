// ===================================== START =======================================
//Start to level 1
document.querySelector("#entrance").addEventListener("click", changeSceneLevel1);

// ===================================== LEVEL 1 =====================================
//Level 1 to Death Screen
document.querySelector("#not-scary-at-all").addEventListener("click", death);
document.querySelector("#scary").addEventListener("click", death);

//Level 1 to next room
document.querySelector("#very-scary").addEventListener("click", changeSceneLevel2);

// ===================================== LEVEL 2 =====================================
// document.getElementById("#stair1").addEventListener("click", win);
//Win to start
document.querySelector(".win-to-start").addEventListener("click", changeSceneStart);

// ===================================== DEATH =======================================
//If either "Back to start" or "Quick Restart" was selected
document.querySelector(".back-to-start").addEventListener("click", changeSceneStart);
document.querySelector(".quick-restart").addEventListener("click", changeSceneLevel1);
//FUNCTIONS
function changeSceneLevel1(){

    //Hide start screen
    document.querySelector("#start").style.display = "none"
    document.querySelector("#start").style.height = "0%"
    document.querySelector("#start").style.width = "0%"

    //Hide death screen
    document.querySelector("#death-display").style.display = "none"
    document.querySelector("#death-display").style.height = "0%"
    document.querySelector("#death-display").style.width = "0%"

    //Show level 1
    document.querySelector("#level1-screen").style.display = "block"
    document.querySelector("#level1-screen").style.height = "100%"
    document.querySelector("#level1-screen").style.width = "100%"
}

function changeSceneLevel2(){

    //Hide start screen
    document.querySelector("#level1-screen").style.display = "none"
    document.querySelector("#level1-screen").style.height = "0%"
    document.querySelector("#level1-screen").style.width = "0%"

    //Show level 1
    document.querySelector("#level2-screen").style.display = "block"
    document.querySelector("#level2-screen").style.height = "100%"
    document.querySelector("#level2-screen").style.width = "100%"
}

function death(){

    //Hide level 1
    document.querySelector("#level1-screen").style.display = "none"
    document.querySelector("#level1-screen").style.height = "0%"
    document.querySelector("#level1-screen").style.width = "0%"

    //Show death
    document.querySelector("#death-display").style.display = "block"
    document.querySelector("#death-display").style.height = "100%"
    document.querySelector("#death-display").style.width = "100%"
}

function changeSceneStart(){
    //Hide death screen
    document.querySelector("#death-display").style.display = "none"
    document.querySelector("#death-display").style.height = "0%"
    document.querySelector("#death-display").style.width = "0%"

    //Hide win screen
    document.querySelector("#win").style.display = "none"
    document.querySelector("#win").style.height = "0%"
    document.querySelector("#win").style.width = "0%"

    //Show start screen
    document.querySelector("#start").style.display = "block"
    document.querySelector("#start").style.height = "100%"
    document.querySelector("#start").style.width = "100%"
    console.log("hey")
}

function win(){
    //Hide death screen
    document.querySelector("#level1-screen").style.display = "none"
    document.querySelector("#level1-screen").style.height = "0%"
    document.querySelector("#level1-screen").style.width = "0%"

    //Show start screen
    document.querySelector("#win").style.display = "block"
    document.querySelector("#win").style.height = "100%"
    document.querySelector("#win").style.width = "100%"
}
//make on hover function for all doors to know that there is a clickable element