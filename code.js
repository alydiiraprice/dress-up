
// Holds the states of each item
var state = {
    skin : 0,
    makeup : 0,
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
        console.log(state.skin);
    } else if (state.makeup===2) {
        // change variable names eg olive-skin
        makeupColor.setAttribute("class", "simple-makeup");
        state.makeup=0;
        console.log(state.makeup);
    }
}

// default vals on load
window.onload=init;
function init () {
    console.log("window loaded");
    // state.skin=0;
    document.getElementById("skin").className="light-skin";
    document.getElementById("makeup").className="simple-makeup";
}

