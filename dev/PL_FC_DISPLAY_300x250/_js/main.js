import { writer, masker, arrayClean, hand } from "../../_common/js/proline";

import Handwrite from 'handwrite';
import { arrow_green_1 } from "./arrow_green_1";
import { hand_super1 } from "./super1";
import { hand_super2 } from "./super2";
import { hand_super3 } from "./super3";
import { arrow_yellow_1 } from "./arrow_yellow_1";
import { arrow_green_2a } from "./arrow_green_2a";
import { cta_circle } from "./cta_circle";

console.log(arrayClean(hand_super3, 3))





setTimeout(()=>{    
    start()
}, 100)


function start(){
    do_arrow_green()    
    // do_super3()    
}


function do_arrow_green(){
    const {arrow_green_1, arrow_green_1b, arrow_green_1c} = masker()

    TweenMax.set([arrow_green_1, arrow_green_1b, arrow_green_1c], {opacity:1})
    
    TweenMax.set(arrow_green_1, {opacity:1, clip:`${0}px, ${0}px, ${arrow_green_1.height}px, ${0}px`})
    TweenMax.to(arrow_green_1, .3, {clip:`${0}px, ${92}px, ${arrow_green_1.height}px, ${0}px`, onComplete:()=>{
        
    }})

    TweenMax.from(arrow_green_1b, .5, {delay:1.2, clip:`${arrow_green_1b.height}px, ${arrow_green_1b.width}px, ${arrow_green_1b.height}px, ${0}px`})
    TweenMax.from(arrow_green_1c, .5, {delay:1.2, clip:`${arrow_green_1c.height}px, ${arrow_green_1c.width}px, ${arrow_green_1c.height}px, ${0}px`})
    do_super1()    
    

    
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
        TweenMax.to(['#panner', '#panBg'], 4, {x:-600, ease:Power1.easeOut})    
        TweenMax.set('#arrow_yellow_1', {opacity:1})
        hand(arrow_yellow_1, "arrow_yellow_1", {brushsize:5, speed:8}).then()
        do_arrow_green_2a()
    }); 
}


function do_arrow_green_2a(){
    // TweenMax.set('#arrow_green_2a', {opacity:1})
    TweenMax.set(".masker", {opacity:1})

    const tl = new TimelineMax({
        onComplete: do_cta
    })
    const {arrow_green_1b, arrow_green_1c, arrow_green_2a, arrow_green_2b, arrow_green_2c, arrow_green_2d, arrow_green_2e, arrow_green_2f, arrow_yellow_2} = masker()
    
    

    tl.from(arrow_green_2a, .5, {clip:`${arrow_green_2a.height}px, ${arrow_green_2a.width}px, ${arrow_green_2a.height}px, ${0}px`}, '+=.7')
    tl.from(arrow_green_2b, .5, {clip:`${arrow_green_2b.height}px, ${arrow_green_2b.width}px, ${arrow_green_2b.height}px, ${0}px`}, "-=.3")
    tl.from(arrow_green_2c, .5, {clip:`${arrow_green_2c.height}px, ${arrow_green_2c.width}px, ${arrow_green_2c.height}px, ${arrow_green_2c.width}px`}, "-=.3")
    tl.from(arrow_green_2d, .5, {clip:`${0}px, ${arrow_green_2d.width}px, ${0}px, ${0}px`}, "-=.3")
    

    
    
    
    // tl.set(".frame2", {opacity:1})

    tl.add("end", "+=.2")
    tl.to("#logo_proSmall", .6, {opacity:0})
    // tl.to('.pan', 1.2, {x:-600}, "end")
    // tl.from(arrow_yellow_2, .5, {clip:`${0}px, ${0}px, ${arrow_yellow_2.height}px, ${0}px`}, "end+=.7")
    tl.from(arrow_green_2e, .5, {clip:`${0}px, ${0}px, ${arrow_green_2e.height}px, ${0}px`}, "end+=.7")
    tl.from(arrow_green_2f, .5, {clip:`${arrow_green_2f.height}px, ${arrow_green_2f.width}px, ${arrow_green_2f.height}px, ${0}px`}, "end+=.9")

    
    tl.from(["#logo_pro", "#cta", "#footer"], .6, {opacity:0}, '-=.2')
    // tl.from("#cta", .3, {opacity:0})
    // tl.from("#footer", .3, {opacity:0})



    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}


function do_cta(){    
    TweenLite.delayedCall(1, ()=>{
        TweenMax.set('#cta_circle', {opacity:1})
        hand(cta_circle, "cta_circle", {brushsize:8, speed:1, cleanFromBehind:false, cleanUpWhenDone:false}).then(()=>{
            
        })
    })
    
}
