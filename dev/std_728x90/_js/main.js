import { writer, masker, arrayClean, hand } from "../../_common/js/proline";

import Handwrite from 'handwrite';
import { hand_super1 } from "./super1";
import { cta_circle } from "./cta_circle";

TweenLite.defaultEase = Power2.easeOut



setTimeout(()=>{    
    start()
}, 100)


function start(){
    do_super()    
    
}


function do_super(){
    TweenMax.set('#super', {opacity:1})
    hand(hand_super1, "super", {brushSize:4, speed:6}).then(logo)
}


function logo(){
    
    TweenMax.to("#logo_pro", .5, {opacity:1, onComplete: ()=>{
        TweenLite.delayedCall(.3, do_arrow_green_2a); 
        
    }})
}



function do_arrow_green_2a(){
    // TweenMax.set('#arrow_green_2a', {opacity:1})
    TweenMax.set(".masker", {opacity:1})
    

    const tl = new TimelineMax({
        onComplete: do_cta
    })
    const {arrow_yellow_1, arrow_green_1, arrow_green_2, arrow_green_3, arrow_green_4} = masker()
    TweenMax.set(arrow_green_1, {opacity:0})
    

    tl.from(arrow_yellow_1, .5, {clip:`${0}px, ${0}px, ${0}px, ${0}px`}, '+=.2')
    
    tl.from(arrow_green_2, .5, {clip:`${arrow_green_2.height}px, ${arrow_green_2.width}px, ${arrow_green_2.height}px, ${0}px`}, "-=.2")
    tl.from(arrow_green_3, .5, {clip:`${arrow_green_3.height}px, ${arrow_green_3.width}px, ${arrow_green_2.height}px, ${arrow_green_2.width}px`}, "-=.2")
    tl.from(arrow_green_4, .5, {clip:`${0}px, ${arrow_green_4.width}px, ${0}px, ${arrow_green_4.width}px`}, "-=.4")
    
    

    tl.set(".frame2", {opacity:1})
    
    
    

    tl.from(["#cta", "#footer"], .5, {opacity:0, onComplete:()=>{
        TweenMax.set(arrow_green_1, {opacity:1})    
        const clip = {clip:`${arrow_green_1.height}px, ${arrow_green_1.width}px, ${arrow_green_1.height}px, ${0}px`}
        TweenMax.from(arrow_green_1, .5, {...clip, onComplete:()=>{
            TweenMax.set('#cta_circle', {opacity:1})
            hand(cta_circle, "cta_circle", {brushSize:8, speed:1, cleanFromBehind:false, cleanUpWhenDone:false})
        }})
        
    }}, "+=.5")

    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}


function do_cta(){    
    
    const tl = new TimelineMax({
      
    })
    
    
}
