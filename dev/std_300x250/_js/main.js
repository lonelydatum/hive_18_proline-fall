import { writer, masker, arrayClean, hand } from "../../_common/js/proline";

import Handwrite from 'handwrite';
import { hand_super1 } from "./super1";





setTimeout(()=>{    
    start()
}, 500)


function start(){
    hand(hand_super1, "super1", {brushsize:8, speed:8}).then(()=>{
        TweenMax.to('.frame1', 2, {x:-300})
    })
}