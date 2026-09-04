
// Holds the states of each item
var gameState = {
    skin = 0,
};

// Very simple state-swticher function -- make this more scalable
function nextSkin() {
    console.log("inside function nextSkin");
    var skin=document.getElementById("skin");
    console.log("current state: ", state.skin);

    if (gameState.skin===0) {
        // change variable names eg olive-skin
        skin.setAttribute("class", "skin1");
        state.skin++;
        console.log(state.skin);
    } else if (gameState.skin===1) {
        // change variable names eg olive-skin
        skin.setAttribute("class", "skin2");
        state.skin++;
        console.log(state.skin);
    } else if (gameState.skin===2) {
        // change variable names eg olive-skin
        skin.setAttribute("class", "skin3");
        state.skin=0;
        console.log(state.skin);
    }
}

// default vals on load
function init () {
    console.log("window loaded");
    skin=0;
}

window.onload=init;