import { useState } from "react";

function Moodtracker(){
    const [mood, setMood] =useState("😊");

    return(
        <div>
            <p>
                Current Mood
            </p>
        </div>
    )
}



export default Moodtracker 