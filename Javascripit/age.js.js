function lifeInWeek(age) {

    let lifeAge = 90;

    let diff = lifeAge-age 
    console.log(diff)

    let days = diff * 365;
    let weeks = diff * 52;
    let months = diff * 12;

    console.log('You have '+days +' days, '+weeks+' weeks, and '+months+' left.')

    
    
}


lifeInWeek(56)