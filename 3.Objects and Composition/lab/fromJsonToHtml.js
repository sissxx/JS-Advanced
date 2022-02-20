function fromJSONToHTMLTable(json) {
   let arr = JSON.parse(json);

   let outputArr = ['<table>'];
   outputArr.push(makeKeyRow(arr));
   arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
   outputArr.push('</table>');

   console.log(outputArr.join('\n'));

   function makeKeyRow(arr) {
      let result = '  <tr>';
      Object.keys(arr[0]).forEach(key => {
         result += `<th>${escapeHtml(key)}</th>`;
      });
      result += '</tr>';
      return result;
   }

   function makeValueRow(obj) {
      let result = '  <tr>';
      Object.values(obj).forEach(value => {
         result += `<td>${escapeHtml(value)}</td>`;
      });
      result += '</tr>';
      return result;
   }

   function escapeHtml(value) {
      return value
         .toString()
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#039;');
   }
}
jsonToHtml(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)

{
   /* <table>
      <tr><th>Name</th><th>Score</th></tr>
      <tr><td>Stamat</td><td>5.5</td></tr>
      <tr><td>Rumen</td><td>6</td></tr>
   </table> */
}