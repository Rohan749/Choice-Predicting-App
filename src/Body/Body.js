import React, { useState } from "react";
import "./Body.css"
import ResultModal from "./ModalBox/ResultModal";
import SingleBlocks from "./SingleBlocks";

let comicSec=0;
let mandalaSec=0;    
let doodleSec=0;
let waterSec=0;
let sketchSec=0;

let comicTimer=0;
let mandalaTimer=0;
let doodleTimer=0;
let waterTimer=0;
let sketchTimer=0

let comicTimeStart = () => {
    comicTimer = setInterval(()=>{comicSec++},50);
}

let comicTimeStop = () => {
    clearInterval(comicTimer);
}

let mandalaTimeStart = () => {
    mandalaTimer = setInterval(()=>{mandalaSec++},50);
}

let mandalaTimeStop = () => {
    clearInterval(mandalaTimer);
}

let doodleTimeStart = () => {
    doodleTimer = setInterval(()=>{doodleSec++},50);
}

let doodleTimeStop = () => {
    clearInterval(doodleTimer);
}

let waterTimeStart = () => {
    waterTimer = setInterval(()=>{waterSec++},50);
}

let waterTimeStop = () => {
    clearInterval(waterTimer);
}

let sketchTimeStart = () => {
    sketchTimer = setInterval(()=>{sketchSec++},50);
}

let sketchTimeStop = () => {
    clearInterval(sketchTimer);
}

const LinkList = [
{ Link: <img onMouseOver={comicTimeStart} onMouseOut={comicTimeStop} className="provided_image comic" src={require("./comic art/c1.jpg")}/>, key: "i1", id: "" },
{ Link: <img onMouseOver={doodleTimeStart} onMouseOut={doodleTimeStop} className="provided_image doodle" src={require("./doodle art/d1.jpg")}/>, key: "i2", id: "" },
{ Link: <img onMouseOver={mandalaTimeStart} onMouseOut={mandalaTimeStop} className="provided_image mandala" src={require("./mandala art/m1.jpg")}/>, key: "i3", id: "" },
{ Link: <img onMouseOver={sketchTimeStart} onMouseOut={sketchTimeStop} className="provided_image sketch" src={require("./sketch art/s1.jpg")}/>, key: "i4", id: "" },
{ Link: <img onMouseOver={comicTimeStart} onMouseOut={comicTimeStop} className="provided_image comic" src={require("./comic art/c3.jpg")}/>, key: "i5", id: "" },
{ Link: <img onMouseOver={sketchTimeStart} onMouseOut={sketchTimeStop} className="provided_image sketch" src={require("./sketch art/s2.jpg")}/>, key: "i6", id: "" },
{ Link: <img onMouseOver={waterTimeStart} onMouseOut={waterTimeStop} className="provided_image water" src={require("./watercolor painting/w4.jpg")}/>, key: "i7", id: "" },
{ Link: <img onMouseOver={mandalaTimeStart} onMouseOut={mandalaTimeStop} className="provided_image mandala" src={require("./mandala art/m4.jpg")}/>, key: "i8", id: "" },
{ Link: <img onMouseOver={comicTimeStart} onMouseOut={comicTimeStop} className="provided_image comic" src={require("./comic art/c2.jpg")}/>, key: "i9", id: "" },
{ Link: <img onMouseOver={mandalaTimeStart} onMouseOut={mandalaTimeStop} className="provided_image mandala" src={require("./mandala art/m2.jpg")}/>, key: "i10", id: "" },
{ Link: <img onMouseOver={sketchTimeStart} onMouseOut={sketchTimeStop} className="provided_image sketch" src={require("./sketch art/s3.jpg")}/>, key: "i11", id: "" },
{ Link: <img onMouseOver={sketchTimeStart} onMouseOut={sketchTimeStop} className="provided_image sketch" src={require("./sketch art/s4.jpg")}/>, key: "i12", id: "" },
{ Link: <img onMouseOver={doodleTimeStart} onMouseOut={doodleTimeStop} className="provided_image doodle" src={require("./doodle art/d2.png")}/>, key: "i13", id: "" },
{ Link: <img onMouseOver={waterTimeStart} onMouseOut={waterTimeStop} className="provided_image water" src={require("./watercolor painting/w1.jpg")}/>, key: "i14", id: "" },
{ Link: <img onMouseOver={waterTimeStart} onMouseOut={waterTimeStop} className="provided_image water" src={require("./watercolor painting/w3.jpg")}/>, key: "i15", id: "" },
{ Link: <img onMouseOver={comicTimeStart} onMouseOut={comicTimeStop} className="provided_image comic" src={require("./comic art/c4.jpg")}/>, key: "i16", id: "" },
{ Link: <img onMouseOver={mandalaTimeStart} onMouseOut={mandalaTimeStop} className="provided_image mandala" src={require("./mandala art/m3.jpg")}/>, key: "i17", id: "" },
{ Link: <img onMouseOver={waterTimeStart} onMouseOut={waterTimeStop} className="provided_image water" src={require("./watercolor painting/w2.jpg")}/>, key: "i18", id: "" },
{ Link: <img onMouseOver={doodleTimeStart} onMouseOut={doodleTimeStop} className="provided_image doodle" src={require("./doodle art/d3.jpg")}/>, key: "i19", id: "" },
{ Link: <img onMouseOver={doodleTimeStart} onMouseOut={doodleTimeStop} className="provided_image doodle" src={require("./doodle art/d4.jpg")}/>, key: "i20", id: "" },
{ Link: <img onMouseOver={comicTimeStart} onMouseOut={comicTimeStop} className="provided_image comic" src={require("./comic art/c5.jpg")}/>, key: "i21", id: "" },
]



const Body = (props) => {

const [value, setValue] = useState();
const [predictedValue, setPredictedValue] = useState();

const IntervalCalc = (val) => {
    console.log("Comic:", comicSec);
    console.log("Doodle:", doodleSec);
    console.log("Mandala:", mandalaSec);
    console.log("Water:", waterSec);
    console.log("Sketch:", sketchSec);

    const predictedTimeSpent=Math.max(comicSec, doodleSec, mandalaSec, waterSec, sketchSec)

    if(predictedTimeSpent === comicSec){
        setPredictedValue("Comic Style")
    }

    else if(predictedTimeSpent === doodleSec){
        setPredictedValue("Doodle Style")
    }

    else if(predictedTimeSpent === mandalaSec){                 
        setPredictedValue("Mandala Style")
    }

    else if(predictedTimeSpent === waterSec){
        setPredictedValue("Water Style")
    }

    else if(predictedTimeSpent === sketchSec){
        setPredictedValue("Sketch Style")
    }

    setValue(val);
    console.log(props.useName)
}


const endClick = (val2) => {
    setValue(val2);
    window.location.reload() 
}
    
    return (
        <div>
        <div className="backbody_div">
            {LinkList.map((list)=><SingleBlocks link = {list.Link} key = {list.key}></SingleBlocks>)}
            </div>
            <div className="button_div">
            <button className="bottom_button" onClick={IntervalCalc}>Ok, Predict my choice!</button>
            </div>
            {value && <ResultModal predictedValue={predictedValue} name_of_user={props.useName} onClick={endClick}/>}
        </div>
    )
};

export default Body;