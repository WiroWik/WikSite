function alerteuh() {
    alert("Je me chier dessus")
}

var audio = new Audio('Fart.mp3')

function son() {
    audio.play()
}

function sumJul() {
    var element = document.getElementById("imgJul")
    element.classList.toggle("imgJulnot");
    
}

function loginVerif() {
    var identif = document.getElementById("identiBox").value;
    var mdp = document.getElementById("mdpBox").value;

    if (identif === "PD" && mdp === "suce") {
        alert("Vrere");
    } else {
        alert("Sale pute");
    }
    
    
}



