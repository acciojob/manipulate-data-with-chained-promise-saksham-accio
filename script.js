const outputInput = document.getElementById("output")

let array = [1, 2, 3, 4];

function newManipulation(array) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res (array)
        } , 3000)
    }).then(array => {
        return new Promise ((res, rej) => {
            setTimeout(() => {
                const evenNumber =array.filter((num) => num % 2 == 0 )
                outputInput.innerText= evenNumber.join(', ')
                res (evenNumber);
            }, 1000);
        })
    }).then(evenNumber => {
        return new Promise ((res, rej)=> {
            setTimeout(()=> {
                const evenMulti = evenNumber.map((num) => num * 2)
                outputInput.innerText= evenMulti.join(', ')
                res(evenMulti);
            }, 2000)
        })
    }).catch(error => {
        console.error('Error', error)
    })
}

newManipulation(array)