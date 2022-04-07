// btns

const btns = document.querySelectorAll('.btn')
const bill = document.querySelector('.bill_val')
const people = document.querySelector('.input_people')
const totalTip = document.querySelector('.total_tip_value')
const tipPerson = document.querySelector('.person_tip')
const reset = document.querySelector('.reset')

btns.forEach(btn => btn.addEventListener(('click'), function(){
    btns.forEach(btn => btn.classList.remove('btnPressed'))
    this.classList.toggle('btnPressed')
    const tip = bill.value*Number.parseInt(this.textContent || this.value)/100
    totalTip.textContent = `$${tip}`
    const tipEach = tip / Number(people.value)
    tipPerson.textContent = `$${tipEach.toFixed(1)}`
})
)

reset.addEventListener('click',function(){
    bill.value = 0
    people.value = 0
    btns.forEach(btn => btn.classList.remove('btnPressed'))
    totalTip.textContent =  tipPerson.textContent = '$0.00'
})
