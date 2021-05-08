//door mechanic

//start to level 1
document.querySelector("#entrance").addEventListener("click", changeSceneLevel1);

function changeSceneLevel1(){

    //show new scene//
    //start to hide
    document.querySelector("#start").style.display = "none"
    document.querySelector("#start").style.height = "0%"
    document.querySelector("#start").style.width = "0%"

    //death to hide
    document.querySelector("#death-display").style.display = "none"
    document.querySelector("#death-display").style.height = "0%"
    document.querySelector("#death-display").style.width = "0%"

    //level 1 to show
    document.querySelector("#level1-screen").style.display = "block"
    document.querySelector("#level1-screen").style.height = "100%"
    document.querySelector("#level1-screen").style.width = "100%"

    // document.querySelector("#scenes").innerHTML =
    //     "<div id=\"level\">\n" +
    //     "   <div id=\"level1-screen\" class=\"container\">\n" +
    //     "       <div><button id=\"not-scary-at-all\" class=\"door\"></button></div>\n" +
    //     "       <div><button id=\"scary\" class=\"door\"></button></div>\n" +
    //     "       <div><button id=\"very-scary\" class=\"door\"></button></div>\n" +
    //     "   </div>\n" +
    //     "</div>";
}

//Level 1 to death
document.querySelector("#not-scary-at-all").addEventListener("click", death);
document.querySelector("#scary").addEventListener("click", death);

function death(){

    //level 1 to hide
    document.querySelector("#level1-screen").style.display = "none"
    document.querySelector("#level1-screen").style.height = "0%"
    document.querySelector("#level1-screen").style.width = "0%"

    //death to show
    document.querySelector("#death-display").style.display = "block"
    document.querySelector("#death-display").style.height = "100%"
    document.querySelector("#death-display").style.width = "100%"


    // document.querySelector("#scenes").innerHTML =
    //     "<div id=\"death\" class=\"container\">\n" +
    //     "        <div id=\"death-text\">\n" +
    //     "            <h1>You've met the deadline...</h1>\n" +
    //     "        </div>\n" +
    //     "\n" +
    //     "        <div class=\"head-container\">\n" +
    //     "            <div id=\"head\">\n" +
    //     "                <div class=\"eye\" id=\"left\"></div>\n" +
    //     "                <div class=\"eye\" id=\"right\"></div>\n" +
    //     "                <div id=\"nose\"></div>\n" +
    //     "                <div id=\"mouth\"></div>\n" +
    //     "            </div>\n" +
    //     "        </div>\n" +
    //     "\n" +
    //     "        <div id=\"button-container\">\n" +
    //     "            <button id=\"back-to-start\">Back to Start</button>\n" +
    //     "            <button id=\"quick-restart\">Quick Restart</button>\n" +
    //     "        </div>\n" +
    //     "    </div>";
}

//death to start or level 1
document.querySelector("#back-to-start").addEventListener("click", changeSceneStart);
document.querySelector("#quick-restart").addEventListener("click", changeSceneLevel1);

function changeSceneStart(){
    //death to hide
    document.querySelector("#death-display").style.display = "none"
    document.querySelector("#death-display").style.height = "0%"
    document.querySelector("#death-display").style.width = "0%"

    //start to show
    document.querySelector("#start").style.display = "block"
    document.querySelector("#start").style.height = "100%"
    document.querySelector("#start").style.width = "100%"
}

//make on hover function for all doors to know that there is a clickable element