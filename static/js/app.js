// from data.js
var tableData = data;
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

  console.log(filteredData);

  var datetime = filteredData.map(UFO => UFO.datetime);
  var city = filteredData.map(UFO => UFO.city);
  var state = filteredData.map(UFO => UFO.state);
  var country = filteredData.map(UFO => UFO.country);
  var shape = filteredData.map(UFO => UFO.city);
  var durationMinutes = filteredData.map(UFO => UFO.durationMinutes);
  var comments = filteredData.map(UFO => UFO.comments);
  
  d3.select("tbody")
  .selectAll("tr")
  .html("")
  .data(filteredData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td>
    <td>${d.city}</td>
    <td>${d.state}</td>
    <td>${d.country}</td>
    <td>${d.shape}</td>
    <td>${d.durationMinutes}</td>
    <td>${d.comments}</td>
    `;
  })
});
