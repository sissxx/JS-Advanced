function search() {
   let towns = document.querySelectorAll('#towns li');
   let searchInputElement = document.getElementById('searchText').value;

   let result = document.getElementById('result');
   let counter = 0;
   let arrOfTowns = Array.from(towns);

   for (let town of arrOfTowns) {

      if (town.textContent.includes(searchInputElement) && searchInputElement !== '') {

         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }

   }
   result.textContent = `${counter} matches found`

}