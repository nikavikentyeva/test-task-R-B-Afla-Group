const items = document.querySelectorAll(".license__item");
let select = document.getElementById("select");
let currentItem = document.querySelector(".license__item:first-child");

function calculate(item) {
    let price = item.querySelector(".license__price");
    let priceAttribute = price.getAttribute("data-price");
    let selectValue = select.value;
    let total = document.getElementById("total");
    let mult = Number(priceAttribute) * Number(selectValue);
    total.textContent = String(mult);
}

for (let item of items) {
    item.addEventListener("click", function () {
        let input = item.querySelector("input");
        input.click();

        let plan = document.getElementById("selected-plan");
        plan.textContent = input.getAttribute("data-plan");

        calculate(item);
        currentItem = item;
    });
}

select.addEventListener("change",function () {
    calculate(currentItem);
});

window.addEventListener("load", function () {
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
        document.querySelector("input:checked").click();
    } else {
        document.querySelector("input").click();
    }
});

