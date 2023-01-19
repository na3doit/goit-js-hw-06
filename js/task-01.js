const ulElem = document.querySelector('#categories');
console.log('Number of categories:', ulElem.children.length);
[...ulElem.children].forEach(elem => {
  console.log('Category:', elem.querySelector('h2').textContent);
  console.log('Elements:', elem.querySelectorAll('li').length);
});
