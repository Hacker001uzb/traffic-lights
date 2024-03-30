let elbox1 = document.querySelector('.box1')
let elbox2 = document.querySelector('.box2')
let elbox3 = document.querySelector('.box3')

let ellights1 = document.querySelector('.lights1')
let ellights2 = document.querySelector('.lights2')
let a = 0
setInterval(() => {
    a = a + 1
    if (a <= 3) {
        elbox1.classList.add('q')
        elbox2.classList.remove('s')
        elbox3.classList.remove('y')
    }else if (a == 4 || a == 8) {
        elbox2.classList.add('s')
        elbox1.classList.remove('q')
        elbox3.classList.remove('y')
    }else if (a >= 5 && a <= 7 ) {
        elbox3.classList.add('y')
        elbox1.classList.remove('q')
        elbox2.classList.remove('s')
    }

    if(a >= 5 && a <= 7){
        ellights1.classList.add('q1')
        ellights2.classList.remove('y2')
    }else if(a <= 3){
        ellights2.classList.add('y2')
        ellights1.classList.remove('q1')
    }
    if (a == 8) {
        a = 0
    }
} ,1000)