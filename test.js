function func(num){
    let i  = 0
    let p = 0
    while (num > 0) {
        if(num % 2 == 0){
            p++
        } else{
            i++
        }
        num = num-1

        
    }
    console.log('impar: ',i);
    console.log('par: ',p);

    
    
}


func(25)