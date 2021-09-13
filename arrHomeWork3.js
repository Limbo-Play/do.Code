
const words = ['Car', 'Mango', 'Table', 'Mouse']
const words2 = ['Hand','Mango','Phone','Mouse']

//make function
function madFunction( array, array2 ){
    const combineArr = [...array, ...array2]

    const filterUniqWord = (array) => array.filter((x, i, a) => a.indexOf(x) == i)

    const uniqArr = filterUniqWord(combineArr)

    const reversArr = uniqArr.map(s => [...s].reverse().join(''))

    for(let i = 0; i < reversArr.length; i++){
        reversArr[i] = reversArr[i].toUpperCase();
    }

    const arrToString = reversArr.join('-') 
    console.log(arrToString)
}

madFunction(words, words2)


/*
//combine array to new array
const combineArr = [...words, ...words2]

//filter array to new array
const filterUniqWord = (array) => array.filter((x, i, a) => a.indexOf(x) == i)
const uniqArr = filterUniqWord(combineArr)

//revers word and change every element toUpperCase  
const reversArr = uniqArr.map(s => [...s].reverse().join(''))
for(let i = 0; i < reversArr.length; i++){
    reversArr[i] = reversArr[i].toUpperCase();
}

//changes array to string
const arrToString = reversArr.join('-')

//check result
console.log(arrToString)
*/
