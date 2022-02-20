function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let inputText = JSON.parse(document.querySelector('#inputs textarea').value);
      let averageSallary = 0;
      let total = 0;
      let bestSallary = 0;
      let bestRestaurant = '';
      let output = {};



      for (let list of inputText) {
         let restaurantInfo = list.split(' - ');
         let restaurantName = restaurantInfo.shift(); //  PizzaHut 
         let workerData = restaurantInfo[0].split(', ');

         for (let worker of workerData) {
            let [nameWorker, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][nameWorker] = Number(salary);
            }

         }

      }

      let entries = Object.entries(output);

      for (let entry of entries) {

         let key = entry[0];
         let valuus = Object.entries(entry[1]);

         for (let [name, salary] of valuus) {
            total += salary;

         }
         averageSallary = total / valuus.length;
         if (averageSallary > bestSallary) {
            bestSallary = averageSallary;
            bestRestaurant = key;
            total = 0;
         }
      }
      let result = Object.entries(output[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      let print = '';

      result.forEach(q => print += `Name: ${q[0]} With Salary: ${q[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${bestSallary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)} `;
      document.querySelector('#workers p').textContent = print;
   }
}
//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]


//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]