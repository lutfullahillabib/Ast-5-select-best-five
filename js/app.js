const orderList = document.getElementById("ol");

function addCart(name, this_btn) {

    const playerName = getIDInnerText(name);


    // const length = orderList.childElementCount; // 0 theke start hoy
    const length = orderList.children.length; // 0 theke start hoy
    // const length = orderList.childNodes.length; // 1 theke start hoy

    if (length < 5) {
        const li = document.createElement('li');
        li.innerText = playerName;
        orderList.appendChild(li);
        this_btn.disabled = true;

        setTextValue("count", length + 1);
    }
    else {
        alert("You Can't Add More than 5 Players");
    }
}



const playerExpenses = getIDInnerText('player-expenses');
const playerExpensesValue = makeFloat(playerExpenses);

const manager = getIDValue('manager');
const manaerValue = makeFloat(manager);

const coach = getIDValue('coach');
const coachValue = makeFloat(coach);

const total = getIDInnerText('total');
const totalValue = makeFloat(total);

const calculateTotal = document.getElementById('calculate-total');


function calculate() {

    const length = orderList.children.length;

    const perPlayer = getIDValue('per-player');
    const perPlayerValue = makeFloat(perPlayer);

    if (isNaN(perPlayerValue)) {
        alert("Enter Amount for Per-Player");
    }

    else if (perPlayerValue < 0) {
        alert(`${perPlayerValue} = Amount can't be Negative`);
    }

    else if (length == 0) {
        alert("Please Select some Players");
    }

    else {
        const expenses = length * perPlayerValue;

        setTextValue("player-expenses", expenses);
    }
}


