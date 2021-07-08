// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const numOfBloackFromHQ = Math.abs(42 - someValue);
    return numOfBloackFromHQ;
}
function distanceFromHqInFeet(someValue){
    const distInFeet = distanceFromHqInBlocks(someValue)* 264;
    return distInFeet;
}
function distanceTravelledInFeet(start, destination){
    const distTravelled = Math.abs(start - destination)*264;

    return distTravelled;
}
function calculatesFarePrice(start, destination){
    const distTravelled = distanceTravelledInFeet(start ,destination);
    if (distTravelled<= 400){
        return 0;
    } 
    else if (distTravelled > 400 && distTravelled < 2000){
        return  (distTravelled - 400)* 0.02;
    } 
    else if (distTravelled > 2000 && distTravelled < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far";
    }

}