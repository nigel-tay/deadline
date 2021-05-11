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
document.querySelector("#atlas").addEventListener("click", changeSceneLevel3);

// ===================================== LEVEL 3 =====================================
document.querySelector("#black-face").addEventListener("click", changeSceneLevel4);

// ===================================== LEVEL 4 =====================================
document.querySelector("#level4-exit").addEventListener("click", changeSceneLevel5);
document.querySelector("#stair1").addEventListener("click", death);
document.querySelector("#middle-door").addEventListener("click", death);
document.querySelector("#stair2").addEventListener("click", death);

// ===================================== LEVEL 5 =====================================
// Password sequence to be 0672
//NUMBER PAD

document.querySelector("#dp1").addEventListener("click", oneClicked);
document.querySelector("#dp2").addEventListener("click", twoClicked);
document.querySelector("#dp3").addEventListener("click", threeClicked);
document.querySelector("#dp4").addEventListener("click", fourClicked);
document.querySelector("#dp5").addEventListener("click", fiveClicked);
document.querySelector("#dp6").addEventListener("click", sixClicked);
document.querySelector("#dp7").addEventListener("click", sevenClicked);
document.querySelector("#dp8").addEventListener("click", eightClicked);
document.querySelector("#dp9").addEventListener("click", nineClicked);
document.querySelector("#dp0").addEventListener("click", zeroClicked);

// ===================================== DEATH =======================================
//If either "Back to start" or "Quick Restart" was selected
document.querySelector(".back-to-start").addEventListener("click", changeSceneStart);
document.querySelector(".quick-restart").addEventListener("click", changeSceneLevel1);

// ===================================== WIN PAGE ====================================
// document.getElementById("#stair1").addEventListener("click", win);
//Win to start
document.querySelector(".win-to-start").addEventListener("click", changeSceneStart);


//================================== FUNCTIONS =======================================
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

    //Hide level 1 screen
    document.querySelector("#level1-screen").style.display = "none"
    document.querySelector("#level1-screen").style.height = "0%"
    document.querySelector("#level1-screen").style.width = "0%"

    //Show level 2
    document.querySelector("#level2-screen").style.display = "block"
    document.querySelector("#level2-screen").style.height = "100%"
    document.querySelector("#level2-screen").style.width = "100%"
}

function changeSceneLevel3(){

    //Hide level 1 screen
    document.querySelector("#level2-screen").style.display = "none"
    document.querySelector("#level2-screen").style.height = "0%"
    document.querySelector("#level2-screen").style.width = "0%"

    //Show level 2
    document.querySelector("#level3-screen").style.display = "block"
    document.querySelector("#level3-screen").style.height = "100%"
    document.querySelector("#level3-screen").style.width = "100%"
}

function changeSceneLevel4(){

    //Hide level 1 screen
    document.querySelector("#level3-screen").style.display = "none"
    document.querySelector("#level3-screen").style.height = "0%"
    document.querySelector("#level3-screen").style.width = "0%"

    //Show level 2
    document.querySelector("#level4-screen").style.display = "block"
    document.querySelector("#level4-screen").style.height = "100%"
    document.querySelector("#level4-screen").style.width = "100%"
}

function changeSceneLevel5(){

    //Hide start screen
    document.querySelector("#level4-screen").style.display = "none"
    document.querySelector("#level4-screen").style.height = "0%"
    document.querySelector("#level4-screen").style.width = "0%"

    //Show level 5
    document.querySelector("#level5-screen").style.display = "block"
    document.querySelector("#level5-screen").style.height = "100%"
    document.querySelector("#level5-screen").style.width = "100%"
}

function death(){

    //Hide level 1
    document.querySelector("#level1-screen").style.display = "none"
    document.querySelector("#level1-screen").style.height = "0%"
    document.querySelector("#level1-screen").style.width = "0%"

    //Hide level 4
    document.querySelector("#level4-screen").style.display = "none"
    document.querySelector("#level4-screen").style.height = "0%"
    document.querySelector("#level4-screen").style.width = "0%"

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

    // Hide win screen
    document.querySelector("#win").style.display = "none"
    document.querySelector("#win").style.height = "0%"
    document.querySelector("#win").style.width = "0%"

    //Show start screen
    document.querySelector("#start").style.display = "block"
    document.querySelector("#start").style.height = "100%"
    document.querySelector("#start").style.width = "100%"
}

function win(){
    //Hide level 5
    document.querySelector("#level5-screen").style.display = "none"
    document.querySelector("#level5-screen").style.height = "0%"
    document.querySelector("#level5-screen").style.width = "0%"

    //Show win screen
    document.querySelector("#win").style.display = "block"
    document.querySelector("#win").style.height = "100%"
    document.querySelector("#win").style.width = "100%"
}

function zeroClicked(){
    document.querySelector("#dp0").style.backgroundColor = "yellowgreen";
    document.querySelector("#dp1").disabled = false;
    document.querySelector("#dp3").disabled = false;
    document.querySelector("#dp4").disabled = false;
    document.querySelector("#dp5").disabled = false;
    document.querySelector("#dp6").disabled = false;
    document.querySelector("#dp8").disabled = false;
    document.querySelector("#dp9").disabled = false;
}

function sixClicked(){
    document.querySelector("#dp6").style.backgroundColor = "yellowgreen";
    document.querySelector("#dp7").disabled = false;
}

function sevenClicked(){
    document.querySelector("#dp7").style.backgroundColor = "yellowgreen";
    document.querySelector("#dp2").disabled = false;
}

function twoClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp2").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
    win();
}

function oneClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
}

function threeClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
}

function fourClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
}

function fiveClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
}

function eightClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
}

function nineClicked(){
    document.querySelector("#dp0").style.backgroundColor = "transparent";
    document.querySelector("#dp6").style.backgroundColor = "transparent";
    document.querySelector("#dp7").style.backgroundColor = "transparent";
    document.querySelector("#dp1").disabled = true;
    document.querySelector("#dp3").disabled = true;
    document.querySelector("#dp4").disabled = true;
    document.querySelector("#dp5").disabled = true;
    document.querySelector("#dp6").disabled = true;
    document.querySelector("#dp7").disabled = true;
    document.querySelector("#dp8").disabled = true;
    document.querySelector("#dp9").disabled = true;
}

//make on hover function for all doors to know that there is a clickable element