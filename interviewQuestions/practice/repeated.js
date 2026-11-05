//a=['cook','cake','cook','kooc']
//ans=['c','k']
let array = ['cook', 'cake', 'coak', 'kooc']
let first = array[0]
let eachEle = first.split('')
console.log(eachEle)
let repeated = []
let presentInAll = false
for (let e of eachEle) {
    for (let a of array) {
        if (!a.includes(e)) {
            presentInAll = true
            break
        }
        else {
            if (presentInAll && !repeated.includes(e))
                repeated.push(e)
        }
    }
    console.log('14=========>>>>>>>>>>>>>>.', repeated)
} console.log('15==================>>>>>>>>>>>>>>>>', repeated)