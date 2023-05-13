//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who', 'Queen', 'Anthrax', 'A Tribe Called Quest'];

// Remove articles from the band names
bandNames = bandNames.map(name => name.replace(/^(a|an|the)\s/i, ''));

// Sort the band names in lexicographic order
bandNames.sort();

// Output the sorted band names as an unordered list (ul) with list items (li)
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');

bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

document.body.appendChild(ul);

