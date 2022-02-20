function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let studentInfo = document.querySelectorAll('tbody tr');
   let inputElement = document.getElementById('searchField');

   function onClick() {
      for (let row of studentInfo) {

         row.classList.remove('select');
         if (inputElement.value !== '' && row.innerHTML.includes(inputElement.value)) {
            row.className = 'select';
         }
      }
      inputElement.value = '';
   }

}