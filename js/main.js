//door mechanic
document.querySelector("#entrance").addEventListener("click", changeScene);

function changeScene(){
    //make display to none for old scene
    document.querySelector("#scenes").innerHTML = "";
    console.log("hi");

    //show new scene
    //set innerHTML for new scene
    document.querySelector("#scenes").innerHTML =
        "<div id=\"level\">\n" +
        "   <div id=\"level1-screen\" class=\"container\">\n" +
        "       <div><button id=\"not-scary-at-all\" class=\"door\"></button></div>\n" +
        "       <div><button id=\"scary\" class=\"door\"></button></div>\n" +
        "       <div><button id=\"very-scary\" class=\"door\"></button></div>\n" +
        "   </div>\n" +
        "</div>";
}

//make on hover function for all doors to know that there is a clickable element