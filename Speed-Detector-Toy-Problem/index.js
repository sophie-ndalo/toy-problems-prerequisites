// toy problems 2
let carSpeed = (speed)=>{
  let points = (speed-70)/5 
    if (speed <70){
        return 'Ok'
    }
    else if (speed>=70 && points<=12){
        return (points)
    }
    else if (points>12){
        return 'license suspended'
    }
}
console.log (carSpeed(180))
