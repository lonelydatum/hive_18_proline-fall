import { writer, masker, arrayClean, hand } from "../../_common/js/proline";

import Handwrite from 'handwrite';
import { hand_super1 } from "./super1";
import { hand_super2 } from "./super2";
import { hand_super3 } from "./super2";

console.log(arrayClean(hand_super2, 2))



setTimeout(()=>{    
    start()
}, 500)


function start(){
    TweenMax.set('#super1', {opacity:1})
    const p1 = hand(hand_super1, "super1", {brushsize:8, speed:7}).then(()=>{
        TweenMax.set('#super2', {opacity:1})
        hand(hand_super2, "super2", {brushsize:5, speed:5})        
    }).then(()=>{
        TweenMax.set('#super3', {opacity:1})
        hand(hand_super3, "super3", {brushsize:5, speed:5})        
    })

    
}