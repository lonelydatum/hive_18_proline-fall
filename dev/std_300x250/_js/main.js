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



setTimeout(()=>{    
    start()
}, 100)


function start(){
    do_arrow_green()    
}


function do_arrow_green(){
    TweenMax.set('#arrow_green_1', {opacity:1})
    do_super1()
    // hand(arrow_green_1, "arrow_green_1", {brushsize:2, speed:7}).then(do_super2)
}

function do_super1(){
    TweenMax.set('#super1', {opacity:1})
    hand(hand_super1, "super1", {brushSize:8, speed:6}).then(do_super2)
}

function do_super2(){
    TweenMax.set('#super2', {opacity:1})
    hand(hand_super2, "super2", {brushSize:5, speed:6}).then(do_super3)
}

function do_super3(){
    TweenMax.set('#super3', {opacity:1})
    hand(hand_super3, "super3", {brushSize:5, speed:6}).then(do_arrow_yellow_1)
}

function do_arrow_yellow_1(){
    
    TweenLite.delayedCall(1, ()=>{
        TweenMax.to('.pan', 2, {x:-300})    
        TweenMax.set('#arrow_yellow_1', {opacity:1})
        hand(arrow_yellow_1, "arrow_yellow_1", {brushsize:5, speed:5}).then(do_arrow_green_2a)
    }); 
}


function do_arrow_green_2a(){
    // TweenMax.set('#arrow_green_2a', {opacity:1})
    TweenMax.set(".masker", {opacity:1})

    const tl = new TimelineMax({
        onComplete: do_cta
    })
    const {arrow_green_2a, arrow_green_2b, arrow_green_2c, arrow_green_2d, arrow_green_2e} = masker()
    
    tl.from(arrow_green_2a, .5, {clip:`${arrow_green_2a.height}px, ${arrow_green_2a.width}px, ${arrow_green_2a.height}px, ${0}px`})
    tl.from(arrow_green_2b, .5, {clip:`${arrow_green_2b.height}px, ${arrow_green_2b.width}px, ${arrow_green_2b.height}px, ${0}px`}, "-=.4")
    tl.from(arrow_green_2c, .5, {clip:`${arrow_green_2c.height}px, ${arrow_green_2c.width}px, ${arrow_green_2c.height}px, ${arrow_green_2c.width}px`}, "-=.4")
    tl.from(arrow_green_2d, .5, {clip:`${0}px, ${arrow_green_2d.width}px, ${0}px, ${0}px`}, "-=.4")
    
    tl.add("end", "+=.5")
    tl.to('.pan', 2, {x:-600}, "end")
    tl.from(arrow_green_2e, .5, {clip:`${0}px, ${arrow_green_2e.width}px, ${0}px, ${0}px`}, "end+=.5")

    tl.set(".frame2", {opacity:1})
    tl.from("#logo_pro", .3, {opacity:0})
    tl.from("#cta", .3, {opacity:0})
    tl.from("#footer", .3, {opacity:0})



    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}


function do_cta(){    
    // TweenMax.to(".frame1", 1, {x:-600})
    TweenMax.set('#cta_circle', {opacity:1})
    hand(cta_circle, "cta_circle", {brushsize:8, speed:1, cleanFromBehind:false}).then(()=>{
        console.log('sldkfjskldfj')
    })
}
