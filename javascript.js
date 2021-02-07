const searchBtn = document.getElementById("search-btn");
const clickedItemSec = document.getElementById("clicked-item-section")
searchBtn.addEventListener("click", function () {
    const mealItem = document.getElementById("input-meal").value.slice(0, 1);
    console.log(mealItem);
                clickedItemSec.innerText = '';


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealItem}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let divs = "";
            let itemIngre = [];
            let itemList = [];
            let i = 0;
            data.meals.map(meal => {
                i++;
                // console.log(meal.strMeal);
                // console.log(meal.strMealThumb);
                // console.log(meal.idMeal);

                
               const ingreList = `<div class="mt-5 ">
               <h3>Ingredients</h3>
               <ul>
                   <li>${meal.strIngredient1}</li>
                   <li>${meal.strIngredient2}</li>
                   <li>${meal.strIngredient3}</li>
                   <li>${meal.strIngredient4}</li>
                   <li>${meal.strIngredient5}</li>
                   <li>${meal.strIngredient6}</li>
                   <li>${meal.strIngredient7}</li>
                   <li>${meal.strIngredient8}</li>
                   <li>${meal.strIngredient9}</li>
               </ul></div>
           `
           itemIngre.push(ingreList);
           console.log(itemIngre);


                


                const div = `<div class="col-md-3 card m-5 shadow-lg" style="width: 18rem;">
                              <img id = "${i}"  src="${meal.strMealThumb}" class="card-img-top" style = " marging-top = 20px; border-radius: 10px;" alt="...">
                              <div class="card-body">
                                   <p class="text-center fw-bold">${meal.strMeal}</p>
                              </div>
                           </div>`;

                console.log(div);
                itemList.push(div);
                divs += div;

            })
            const itemsSection = document.getElementById("items-section");
            itemsSection.innerHTML = divs;

            // for (let i = 0; i < array.length; i++) {
            //     const element = array[i];
            //     console.log(i + 1, element);
            //     1
            // }

            const itemSection = document.getElementById("items-section");
            itemSection.addEventListener("click", event => {

                const clickedImgID = event.target.id;
                console.log(clickedImgID);

                const clickedItem = itemList[clickedImgID-1];
                const clickedItemIngre = itemIngre[clickedImgID-1];;
                clickedItemSec.innerHTML = clickedItem + clickedItemIngre;

            });


        })
})