// Add a click event listener to the "Recipes" button
document.querySelector("#recipesButton").addEventListener("click", function() {
    // Toggle the visibility of the "recipes" div
    document.querySelector("#recipes").classList.toggle("hidden");
  });
  
  // Add a click event listener to each recipe card
  document.querySelectorAll(".recipeCard").forEach(function(recipeCard) {
    recipeCard.addEventListener("click", function() {
      // Navigate to the recipe page for the current recipe
      window.location.href = recipeCard.querySelector("a").getAttribute("href");
    });
  });
  