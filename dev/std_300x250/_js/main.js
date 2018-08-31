import { writer, masker, arrayClean, hand } from "../../_common/js/proline";

import Handwrite from 'handwrite';
import { hand_super1 } from "./super1";
import { hand_super2 } from "./super2";
import { hand_super3 } from "./super3";
import { arrow_yellow_1 } from "./arrow_yellow_1";
import { arrow_green_2a } from "./arrow_green_2a";

console.log(arrayClean(arrow_green_2a, 2))



setTimeout(()=>{    
    start()
}, 500)


function start(){
    do_arrow_green_2a()

    
}

function do_super1(){
    TweenMax.set('#super1', {opacity:1})
    hand(hand_super1, "super1", {brushsize:8, speed:7}).then(do_super2)
}

function do_super2(){
    TweenMax.set('#super2', {opacity:1})
    hand(hand_super2, "super2", {brushsize:5, speed:5}).then(do_super3)
}

function do_super3(){
    TweenMax.set('#super3', {opacity:1})
    hand(hand_super3, "super3", {brushsize:5, speed:7}).then(do_arrow_yellow_1)
}

function do_arrow_yellow_1(){
    TweenMax.set('#arrow_yellow_1', {opacity:1})
    hand(arrow_yellow_1, "arrow_yellow_1", {brushsize:5, speed:7})
}


function do_arrow_green_2a(){
    // TweenMax.set('#arrow_green_2a', {opacity:1})

    const tl = new TimelineMax()
    const {arrow_green_2a} = masker()
    console.log(arrow_green_2a)
    tl.from(arrow_green_2a, 5, {clip:`${0}px, ${arrow_green_2a.width}px, ${0}px, ${arrow_green_2a.width}px`})


    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}