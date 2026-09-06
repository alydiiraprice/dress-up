
// Holds the states of each item
var state = {
    skin : 0,
    makeup : 0,
    eyes : 0,
    hair : 0,
    shirts : 0,
    pants: 0,
    accessories : 0,
    background : 0
};

// Very simple state-swticher function
function nextSkin() {
    console.log("inside function nextSkin");
    console.log(state.skin);
    var skinColor=document.getElementById("skin");
    
    if (state.skin===0) {
        skinColor.setAttribute("class", "olive-skin");
        state.skin++;
        console.log(state.skin);
    } else if (state.skin===1) {
        skinColor.setAttribute("class", "purple-skin");
        state.skin++;
        console.log(state.skin);
    } else if (state.skin===2) {
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
        makeupColor.setAttribute("class", "purple-makeup");
        state.makeup++;
        console.log(state.makeup);
    } else if (state.makeup===1) {
        makeupColor.setAttribute("class", "fancy-makeup");
        state.makeup++;
        console.log(state.makeup);
    } else if (state.makeup===2) {
        makeupColor.setAttribute("class", "simple-makeup");
        state.makeup=0;
        console.log(state.makeup);
    }
}

function nextEyes() {
    console.log("inside function nextEyes");
    var eyeColor=document.getElementById("eyes");
    
    if (state.eyes===0) {
        eyeColor.setAttribute("class", "blue-eyes");
        state.eyes++;
    } else if (state.eyes===1) {
        eyeColor.setAttribute("class", "green-eyes");
        state.eyes++;
    } else if (state.eyes===2) {
        eyeColor.setAttribute("class", "black-eyes");
        state.eyes=0;
    }
}

function nextHair() {
    console.log("inside function nextHair");
    var hairColor=document.getElementById("hair");
    
    if (state.hair===0) {
        hairColor.setAttribute("class", "brown-hair");
        state.hair++;
        console.log(state.hair);
    } else if (state.hair===1) {
        hairColor.setAttribute("class", "orange-hair");
        state.hair++;
        console.log(state.hair);
    } else if (state.hair===2) {
        hairColor.setAttribute("class", "black-hair");
        state.hair++;
        console.log(state.hair);
    } else if (state.hair===3) {
        hairColor.setAttribute("class", "red-hair");
        state.hair++;
        console.log(state.hair);
    }  else if (state.hair===4) {
        hairColor.setAttribute("class", "blonde-hair");
        state.hair = 0;
        console.log(state.hair);
    }
}

function nextShirt() {
    console.log("inside function nextShirt");
    console.log(state.shirts);
    var shirtsType=document.getElementById("shirts");

    if (state.shirts===0) {
        shirtsType.setAttribute("class", "leopard-shirt");
        state.shirts++;
    } else if (state.shirts===1) {
        shirtsType.setAttribute("class", "black-shirt");
        state.shirts=0;
    }
}

function nextPant() {
    console.log("inside function nextPant");
    console.log(state.pants);
    var pantsType=document.getElementById("pants");

    if (state.pants===0) {
        pantsType.setAttribute("class", "purple-skirt");
        state.pants++;
    } else if (state.pants===1) {
        pantsType.setAttribute("class", "red-skirt");
        state.pants=0;
    }
}

function nextAccessories() {
    console.log("inside function nextAccessories");
    console.log(state.accessories);
    var accessoriesColor=document.getElementById("accessories");

    if (state.accessories===0) {
        accessoriesColor.setAttribute("class", "silver-accessories");
        state.accessories++;
    } else if (state.accessories===1) {
        accessoriesColor.setAttribute("class", "gold-accessories");
        state.accessories=0;
    }
}

function nextScene() {
    console.log("inside function nextScene");
    console.log(state.background);
    var backgroundColor=document.getElementById("scene-bg");
    
    if (state.background===0) {
        backgroundColor.setAttribute("class", "red-bg");
        state.background++;
    } else if (state.background===1) {
        backgroundColor.setAttribute("class", "purple-bg");
        state.background=0;
    }
}

// default vals on load
window.onload=init;
function init () {
    console.log("window loaded");
    document.getElementById("skin").className="light-skin";
    document.getElementById("makeup").className="simple-makeup";
    document.getElementById("eyes").className="black-eyes";
    document.getElementById("hair").className="blonde-hair";
    document.getElementById("shirts").className="black-shirt";
    document.getElementById("pants").className="red-skirt";
    document.getElementById("accessories").className="gold-accessories";
    document.getElementById("scene-bg").className="purple-bg";
}

