// Sum square difference

function squareDiff(n) {
    sum = 0
    square = 0
    
    for(let i = 1; i <= n; i++) {
        sum += i**2
        square += i
    }
    square **=2
    
    console.log(square - sum)
}

squareDiff(10)