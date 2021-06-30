function minNum(samDaily, kellyDaily, difference) {
    let days = 1
    samsolved = 0
    kellysolved = 0


    samDaily =+ difference

    while (kellyDaily < samDaily ) {
        samsolved += samDaily + difference
        kellysolved += kellyDaily
        days++
        
    }

    console.log(days);
    

}



minNum(3,5,3)