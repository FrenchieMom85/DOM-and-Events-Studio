window.addEventListener('load', function(){
    // commands
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    // rocket
    const rocket = document.getElementById("rocket");
    // move controls
    const directions = document.getElementsByTagName(button)

    const shuttleBackground = document.getElementById("shuttleBackground")
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("shuttleHeight");
    takeOffButton.addEventListener("click", function (event){
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirm){
            flightStatus.innerHTML = "Shuttle in Flight";
            shuttleBackground.style.background = "blue";
            shuttleHeight.innerHTML = "10,000"
        }
    });
    landButton.addEventListener("click", function (event){
        confirm = window.confirm("The shuttle is landing. Landing gear engaged");
        if (confirm){
            flightStatus.innerHTML = "The shuttle has landed";
            shuttleBackground = document.querySelector("#shuttleBackground");
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0"
        }
    });
    abortButton.addEventListener("click", function (event){
        confirm = window.confirm("Confirm that you want to abort the mission");
        if (confirm){
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground = document.querySelector("#shuttleBackground");
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0"
        }
    });
    // directions.addEventListener("click", function (event){
        
        
    // });

}

