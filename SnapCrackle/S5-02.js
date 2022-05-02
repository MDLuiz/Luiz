
function snapCrackle(maxValue){
    let String = " "
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 == 1 && i % 5 != 0){
            if(i == maxValue){
                String += "Snap"
            }else{
                String += "Snap, "
            }
        }else if(i % 2 == 0 && i % 5 == 0){
            if(i == maxValue){
                String += "Crackle"
            }else{
                String += "Crackle, "
            }
        }else if(i % 2 == 1 && i % 5 == 0){
            if(i == maxValue){
                String += "SnapCrackle"
            }else{
                String += "SnapCrackle, "
            }
        }else if(i % 2 == 0 && i % 5 != 0){
            if(i == maxValue){
                
            }else{
                
            }
        }
    }
    return String
}