let categories = ['A', 'B', 'C', 'D'];

let colorScale = d3.scaleOrdinal()
    .domain(categories)
    .range(['red', 'blue', 'green', 'orange']);

// Example usage:
console.log(colorScale('A')); // Output: 'red'
