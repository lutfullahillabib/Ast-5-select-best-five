function addCart(name, this_btn) {

    const playerName = getIDInnerText(name);

    const orderList = document.getElementById("ol");

    // const length = orderList.childElementCount; // 0 theke start hoy
    const length = orderList.children.length; // 0 theke start hoy
    // const length = orderList.childNodes.length; // 1 theke start hoy

    if (length < 5) {
        const li = document.createElement('li');
        li.innerText = playerName;
        orderList.appendChild(li);
        this_btn.disabled = true;

        const count = document.getElementById('count');
        count.innerText = length + 1;
    }
    else {
        alert("You Can't Add More than 5 Players");
    }
}

const perPlayer = document.getElementById('per-player');
const playerExpenses = document.getElementById('player-expenses');
const manager = document.getElementById('manager');
const coach = document.getElementById('coach');
const total = document.getElementById('total');

const calculateTotal = document.getElementById('calculate-total');

function calculate() {

}


