const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);

        if (e.target.id === 'green') {
            document.body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id
        } else if (e.target.id === 'red') {
            document.body.style.backgroundColor = e.target.id
        } else if (e.target.id === 'yellow') {
            document.body.style.backgroundColor = e.target.id
        }

    });



})


