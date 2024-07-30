function selectRecipe(recipe, calcium) {
    const selectedRecipeDiv = document.getElementById('selected-recipe');
    selectedRecipeDiv.innerText = `Receta seleccionada: ${recipe} (${calcium} mg de calcio)`;
}