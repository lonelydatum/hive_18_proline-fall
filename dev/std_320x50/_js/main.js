import { writer, masker, arrayClean, hand } from "../../_common/js/proline";

import Handwrite from 'handwrite';
import { arrow_green_1 } from "./arrow_green_1";
import { hand_super1 } from "./super1";
import { hand_super2 } from "./super2";
import { hand_super3 } from "./super3";
import { arrow_yellow_1 } from "./arrow_yellow_1";
import { arrow_green_2a } from "./arrow_green_2a";
import { cta_circle } from "./cta_circle";

// console.log(arrayClean(cta_circle, 3))


TweenLite.defaultEase = Power2.easeOut

start()


function start(){
    const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1}, '+=.3')
    tl.from('#t1', .3, {opacity:0})
    tl.from('#phoneMain', .5, {y:90}, "+=.5")

    
    tl.to('#t1', .3, {opacity:0}, '+=1.5')
    tl.from('#t2', .3, {opacity:0})
    // tl.from('#t3', .3, {opacity:0}, "+=.6")
    tl.from('#footer', .3, {opacity:0}, "+=.5")
}
