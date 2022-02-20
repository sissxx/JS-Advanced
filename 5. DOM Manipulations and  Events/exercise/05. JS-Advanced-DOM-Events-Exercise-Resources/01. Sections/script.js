function create(input) {
   let perentDivElement = document.getElementById('content');

   for (let word of input) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;

      div.appendChild(p);
      p.style.display = 'none';
      div.addEventListener('click', (e) => {
         console.log(e.target.children[0].style.display = 'block');
      })

      perentDivElement.appendChild(div);

   }

}