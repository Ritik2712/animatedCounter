const counters = document.querySelectorAll('.counter')
const speed = 200

counters.forEach(counter => {
    const updatecounter = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText;

        const inc = target / speed;



        if (count < target) {
            counter.innerText = count + inc
            setTimeout(updatecounter, 1)
        } else {
            count.innerText = target
        }
    }


    updatecounter();
})
