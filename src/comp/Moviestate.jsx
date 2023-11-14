import React from "react";
import athelet from"./img/athlete-small.png";
import goodtimes from"./img/goodtimes-small.png";
import goodtimes2 from"./img/pexels-gabriel-bastelli-1759823.jpg";
import racer from"./img/theracer-small.png";
import racer2 from"./img/Racer-big.jpg";
import ath2 from"./img/athlete2.png";

export const Moviestate=()=>{
    return[{
        title:"The Athlete",
        mainImg:athelet,
        secImg:ath2,
        url:"/Ourwork/the-athlete",
        awards:[{
            title: "Truely a MasterPiece",
            description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`
        },{title: "Fresh look on brutal sport",
        description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`},{title: "Its Okay lmao",
        description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`}]
    },
    {
        title:"The Racer",
        mainImg:racer,
        secImg:racer2,
        url:"/Ourwork/the-racer",
        awards:[{
            title: "Truely a MasterPiece",
            description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`
        },{title: "Fresh look on brutal sport",
        description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`},{title: "Its Okay lmao",
        description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`}]
    },
    {
        title:"Good times",
        mainImg:goodtimes,
        secImg:goodtimes2,
        url:"/Ourwork/good-times",
        awards:[{
            title: "Truely a MasterPiece",
            description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`
        },{title: "Fresh look on brutal sport",
        description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`},{title: "Its Okay lmao",
        description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus"`}]
    }

]
}
