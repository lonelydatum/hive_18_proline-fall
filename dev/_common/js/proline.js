import Handwrite from 'handwrite'
TweenLite.defaultEase = Power3.easeInOut

        
function writer(points){
    const image = document.getElementById("cta_O")
    const canvas = document.getElementById("canvas")
    
    canvas.width = image.width
    canvas.height = image.height
    const handwrite = new Handwrite(canvas, image)

    const options = {
        speed: 5,
        brushSize: 5,
        repeat: 0,
        cleanUpWhenDone: false,
        callback:()=>{
            // console.log('sdlkfjs')
        },
        cleanFromBehind:false
    }
    handwrite.draw(points, options)
}

function masker(){
    const maskerList = { }
    const maskerListDOM =  document.querySelectorAll(".masker")
    for(let item of maskerListDOM.entries()){
        const image = item[1]
        maskerList[image.id] = image

        maskerItem(image)
    }

    return maskerList
}


function maskerItem(image){
    
    const {width, height} = image
    const top = 0
    const right = width
    const bottom = height
    const left = 0
    TweenMax.set(image, {clip:`${top}px, ${right}px, ${bottom}px, ${left}px`})
}

function arrayClean(points, amount){
    const pointsClean = []
    points.forEach((item, i)=>{
        if(i%amount===0){
            pointsClean.push(item)
        }
    })

    return pointsClean
}



function hand(points, div, opt){
    return new Promise( (good, bad)=>{
        const myCanvas = document.querySelector(`#${div} canvas`);
        const myImg = document.querySelector(`#${div} img`);
        const options = {
            
            brushsize:8,
            speed:8,
            repeat:0,
            cleanFromBehind:true,
            cleanUpWhenDone:true,
            ...opt,
            callback: ()=>{
                good()
            }
        }

        console.log(myCanvas)
        myCanvas.width = myImg.width
        myCanvas.height = myImg.height

        const handwrite = new Handwrite(myCanvas, myImg);
        handwrite.draw(points, options);

        TweenLite.set(myImg, {opacity:0})
        
    } )
    
}



export {writer, masker, arrayClean, hand}