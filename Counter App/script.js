
const countvalue = document.getElementById("count");
const Increase_value = document.getElementById("increase");
const Decrease_value = document.getElementById("decrease");
const Reset_value = document.getElementById("reset");

function updatecolor()
{
    if(count > 0)
    {
        countvalue.style.color = "green";
    }
    else if(count < 0)
    {
        countvalue.style.color = "red";
    }
    else
    {
        countvalue.style.color = "black";
    }
}

let count =0;

Increase_value.addEventListener("click", () => {
    count++;
    countvalue.textContent = count;
    updatecolor();
});

Decrease_value.addEventListener("click", () => {
    count--;
    countvalue.textContent = count;
    updatecolor();
});

Reset_value.addEventListener("click", () => {
    count = 0;
    countvalue.textContent = count;
    updatecolor();
});