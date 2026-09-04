
// Holds the states of each item
var state = {
    skin : 0,
    makeup : 0,
    eyes : 0,
    hair : 0
};

// Very simple state-swticher function -- make this more scalable
function nextSkin() {
    console.log("inside function nextSkin");
    console.log(state.skin);
    var skinColor=document.getElementById("skin");
    

    if (state.skin===0) {
        // change variable names eg olive-skin
        skinColor.setAttribute("class", "olive-skin");
        state.skin++;
        console.log(state.skin);
    } else if (state.skin===1) {
        // change variable names eg olive-skin
        skinColor.setAttribute("class", "purple-skin");
        state.skin++;
        console.log(state.skin);
    } else if (state.skin===2) {
        // change variable names eg olive-skin
        skinColor.setAttribute("class", "light-skin");
        state.skin=0;
        console.log(state.skin);
    }
}

function nextMakeup() {
    console.log("inside function nextMakeup");
    console.log(state.makeup);
    var makeupColor=document.getElementById("makeup");
    

    if (state.makeup===0) {
        // change variable names eg olive-skin
        makeupColor.setAttribute("class", "purple-makeup");
        state.makeup++;
        console.log(state.makeup);
    } else if (state.makeup===1) {
        // change variable names eg olive-skin
        makeupColor.setAttribute("class", "fancy-makeup");
        state.makeup++;
        console.log(state.makeup);
    } else if (state.makeup===2) {
        // change variable names eg olive-skin
        makeupColor.setAttribute("class", "simple-makeup");
        state.makeup=0;
        console.log(state.makeup);
    }
}

function nextEyes() {
    console.log("inside function nextEyes");
    var eyeColor=document.getElementById("eyes");
    
    if (state.eyes===0) {
        // change variable names eg olive-skin
        eyeColor.setAttribute("class", "blue-eyes");
        state.eyes++;
    } else if (state.eyes===1) {
        // change variable names eg olive-skin
        eyeColor.setAttribute("class", "green-eyes");
        state.eyes++;
    } else if (state.eyes===2) {
        // change variable names eg olive-skin
        eyeColor.setAttribute("class", "black-eyes");
        state.eyes=0;
    }
}

function nextHair() {
    console.log("inside function nextHair");
    var hairColor=document.getElementById("hair");
    
    if (state.hair===0) {
        // change variable names eg olive-skin
        hairColor.setAttribute("class", "brown-hair");
        state.hair++;
    } else if (state.hair===1) {
        // change variable names eg olive-skin
        hairColor.setAttribute("class", "blonde-hair");
        state.hair = 0;
    }
}

// default vals on load
window.onload=init;
function init () {
    console.log("window loaded");
    // state.skin=0;
    document.getElementById("skin").className="light-skin";
    document.getElementById("makeup").className="simple-makeup";
    document.getElementById("eyes").className="black-eyes";
    document.getElementById("hair").className="blonde-hair";
}

