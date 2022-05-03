console.log(snapCrackle())
console.log(snapCracklePrime())

function snapCrackle(maxValue){
    let String = []
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 == 1 && i % 5 != 0){
            String.push("Snap")
        }else if(i % 2 == 0 && i % 5 == 0){
            String.push("Crackle")
        }else if(i % 2 == 1 && i % 5 == 0){
            String.push("SnapCrackle")
        }else if(i % 2 == 0 && i % 5 != 0){
            String.push(i)
        }
    }
    return String.join(", ")
}


function snapCracklePrime(maxValue){
    let String = []
    for(let i = 1; i <= maxValue; i++){
        let aux = 0
        if(i % 2 == 1 && i % 5 != 0){
            String.push("Snap")
        }else if(i % 2 == 0 && i % 5 == 0){
            String.push("Crackle")
        }else if(i % 2 == 1 && i % 5 == 0){
            String.push("SnapCrackle")
        }else if(i % 2 == 0 && i % 5 != 0 && i != 2){
            String.push(i)
        }else if(i == 2){
            String.push("Prime")
        }
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                aux++
            }
        }
        if(aux == 2 && i != 2){
            String[i-1] += "Prime"
        }
    }
    return String.join(", ")
}