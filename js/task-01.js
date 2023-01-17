const getSumCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${getSumCategories.length}`);

const getCategory = [];
document.querySelectorAll('.item h2').forEach(title => {
  getCategory.push(title.textContent);
});

const getElements = [];
document.querySelectorAll('.item ul').forEach(element => {
  getElements.push(element.children.length);
});

for (let i = 0; i < getSumCategories.length; i += 1) {
  console.log(`Category: ${getCategory[i]}`);
  console.log(`Elements: ${getElements[i]}`);
}
