window.onload = run_calculation();

function time_calc(pace, distance) {
    var pace_minutes = Math.floor(pace);
    var pace_seconds = Math.round((pace % 1) * 100);

    if (seconds > 59){
        return null;
    } 

    var inter = pace_seconds * distance;
    var seconds = inter % 60;
    var minutes = (pace_minutes * distance) + Math.floor(inter / 60);
    
    return minutes + (seconds / 100);
}

function run_calculation() {
    var pace = document.getElementById("pace_input").value; 
    var dist = document.getElementById("dist_input").value; 

    console.log(pace + dist)
    var time = time_calc(pace, dist);

    var result_element = document.getElementById("result"); 

    result_element.innerHTML = time + " min";
}


