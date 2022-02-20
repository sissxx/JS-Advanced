function focused() {
   let mainDivElement = document.getElementsByTagName('div')[0];
   let divElement = Array.from(mainDivElement.getElementsByTagName('input'));


   divElement.forEach((e) => {
      e.addEventListener('focus', (e) => {
         e.target.parentElement.classList.add('focused');
      })
   });

   divElement.forEach((e) => {
      e.addEventListener('blur', (e) => {
         e.target.parentElement.classList.remove('focused');
      })
   });

}