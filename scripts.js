function init(){
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    takeOffButton.addEventListener("click", function (event){
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        let flightStatus = document.getElementById("flightStatus");
        if (confirm){
            flightStatus.innerHTML = "Shuttle in Flight";
            let shuttleBackground = document.querySelector("#shuttleBackground");
            shuttleBackground.style.background = "blue";
        }
    });

}

