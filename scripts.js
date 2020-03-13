function init(){
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const landButton = document.getElementById("landing")
    const abortButton = document.getElementById("missionAbort");
    const directions = document.getElementsByTagName(button)
    takeOffButton.addEventListener("click", function (event){
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        let flightStatus = document.getElementById("flightStatus");
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        if (confirm){
            flightStatus.innerHTML = "Shuttle in Flight";
            let shuttleBackground = document.querySelector("#shuttleBackground");
            shuttleBackground.style.background = "blue";
            shuttleHeight.innerHTML = "10,000"
        }
    });
    landButton.addEventListener("click", function (event){
        confirm = window.confirm("The shuttle is landing. Landing gear engaged");
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        event.stopPropagation()
        if (confirm){
            flightStatus.innerHTML = "The shuttle has landed";
            shuttleBackground = document.querySelector("#shuttleBackground");
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0"
        }
    });
    abortButton.addEventListener("click", function (event){
        confirm = window.confirm("Confirm that you want to abort the mission");
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        event.stopPropagation()
        if (confirm){
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground = document.querySelector("#shuttleBackground");
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0"
        }
    });
    directions.addEventListener("click", function (event){
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        event.stopPropagation()
        
    });

}

