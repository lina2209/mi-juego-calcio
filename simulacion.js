const selectedFoods = [];
let totalCalcium = 0;

function addFood(food, calcium) {
    selectedFoods.push({ food, calcium });
    totalCalcium += calcium;
    updateSelectedFoods();
    updateTotalCalcium();
}

function updateSelectedFoods() {
    const selectedFoodsDiv = document.getElementById('selected-foods');
    selectedFoodsDiv.innerHTML = '';
    selectedFoods.forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerText = `${item.food} (${item.calcium} mg de calcio)`;
        selectedFoodsDiv.appendChild(div);
    });
}

function updateTotalCalcium() {
    document.getElementById('total-calcium').innerText = `Total Calcio: ${totalCalcium} mg`;
}