// ===================================== START =======================================
//Start to level 1
document.querySelector("#entrance").addEventListener("click", () => {
    changeSceneLevel1();
    pauseBGM();
    playDoorOpen();
});
document.querySelector("#click-to-begin").addEventListener("click", () => {
    playStartBGM();
    playPinpad();
    swal({
        title: "WARNING!!!!",
        text:
            "Deadline is best played on a 13inch screen\n" +
            "If you have a bigger screen, after leaving this popup, Pull the bottom right corner of your browser in " +
            "until the corner meets the background image perfectly.\n" +
            "If you have a smaller screen, that's honestly not my problem.\n" +
            "This game contains loud sounds.\n" +
            "Now is your chance to adjust the volume. Headphones are recommended\n" +
            "You have been warned, do not SUE me.\n" +
            "To begin the game, click on the school's entrance to enter.\n" +
            "Player's discretion is advised.",
        buttons: {
            cancel: "Imma sue you anyway",
            confirm: "Fine I won't sue"
        }
    }).then( value => {
        if(value) {
            swal({
                title: "Thanks for not suing me!",
                text: "Enjoy the game :)",
                icon: "success"
            })
        }
    })
});
// ===================================== LEVEL 1 =====================================
//Level 1 to Death Screen
document.querySelector("#not-scary-at-all").addEventListener("click", () => {
    death();
    playDeathAudio();
});
document.querySelector("#scary").addEventListener("click", () => {
    death();
    playDeathAudio();
});

//Level 1 to next room
document.querySelector("#very-scary").addEventListener("click", () => {
    changeSceneLevel2();
    playDoorOpen();
});

// ===================================== LEVEL 2 =====================================
document.querySelector("#atlas").addEventListener("click", () => {
    changeSceneLevel3();
    playKey();
});

// ===================================== LEVEL 3 =====================================
document.querySelector("#black-face").addEventListener("click", () => {
    changeSceneLevel4();
    playGiggle();
});

// ===================================== LEVEL 4 =====================================
document.querySelector("#level4-exit").addEventListener("click", () => {
    changeSceneLevel5();
    playPinpad();
});
document.querySelector("#stair1").addEventListener("click", () => {
    death();
    playDeathAudio();
});
document.querySelector("#middle-door").addEventListener("click", () => {
    death();
    playDeathAudio();
});
document.querySelector("#stair2").addEventListener("click", () => {
    death();
    playDeathAudio();
});

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
document.querySelector(".back-to-start").addEventListener("click", () => {
    changeSceneStart();
    playPinpad();
});
document.querySelector(".quick-restart").addEventListener("click", () => {
    changeSceneLevel1();
    playPinpad();
});

// ===================================== WIN PAGE ====================================
// document.getElementById("#stair1").addEventListener("click", win);
//Win to start
document.querySelector("#win-to-start").addEventListener("click", () => {
    changeSceneStart();
    pauseBGM();
});


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
    playPinpad();
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
    playPinpad();
    document.querySelector("#dp6").style.backgroundColor = "yellowgreen";
    document.querySelector("#dp7").disabled = false;
}

function sevenClicked(){
    playPinpad();
    document.querySelector("#dp7").style.backgroundColor = "yellowgreen";
    document.querySelector("#dp2").disabled = false;
}

function twoClicked(){
    playPinpad();
    playWiiSports();
    disableButtons();
    document.querySelector("#dp2").disabled = true;
    win();
}

function disableButtons(){
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
}

function oneClicked(){
    disableButtons();
    playDeathAudio();
}

function threeClicked(){
    disableButtons();
    playDeathAudio();
}

function fourClicked(){
    disableButtons();
    playDeathAudio();
}

function fiveClicked(){
    disableButtons();
    playDeathAudio();
}

function eightClicked(){
    disableButtons();
    playDeathAudio();
}

function nineClicked(){
    disableButtons();
    playDeathAudio();
}

//============================ AUDIO FUNCTIONS =======================================
const startBGM = document.querySelector("#dead-silence");
const doorOpen = document.querySelector("#door-open");
const thunderRain = document.querySelector("#thunder-rain");
const giggle = document.querySelector("#giggle");
const deathNoise = document.querySelector("#death-noise");
const evilLaugh = document.querySelector("#evil-laugh");
const jumpScare = document.querySelector("#jump-scare");
const keyPickUp = document.querySelector("#key-pickup");
const pinpad = document.querySelector("#pinpad");
const wiiSports = document.querySelector("#wii-sports");

function pauseBGM(){
    startBGM.pause();
    thunderRain.pause();
    wiiSports.pause();
}

function playStartBGM(){
    startBGM.currentTime = 0;
    thunderRain.currentTime = 0;
    startBGM.play();
    thunderRain.play();
    startBGM.volume = 0.1;
    thunderRain.volume = 0.1;
}

function playDoorOpen(){
    doorOpen.currentTime = 0;
    doorOpen.play();
    doorOpen.playbackRate = 1.9;
}

function playDeathAudio(){
    deathNoise.currentTime = 0;
    evilLaugh.currentTime = 0;
    jumpScare.currentTime = 0;
    deathNoise.play();
    evilLaugh.play();
    jumpScare.play();
    deathNoise.volume = 0.2;
    deathNoise.playbackRate = 2;
    evilLaugh.volume = 0.2;
    jumpScare.volume = 0.3;
}

function playKey(){
    keyPickUp.currentTime = 0;
    keyPickUp.play();
    keyPickUp.volume = 0.5;
    keyPickUp.playbackRate = 3;
}

function playGiggle(){
    giggle.currentTime = 0;
    giggle.play();
    giggle.volume = 0.2;
    giggle.playbackRate = 1.4;
}

function playPinpad(){
    pinpad.currentTime = 0;
    pinpad.play();
    pinpad.volume = 0.5;
    pinpad.playbackRate = 2;
}

function playWiiSports(){
    wiiSports.currentTime = 0;
    wiiSports.play();
    wiiSports.volume = 0.3;
}