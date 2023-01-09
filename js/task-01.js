const getSumCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${getSumCategories.length}`);

const getTitle = [];
document.querySelectorAll('.item h2').forEach(function (title) {
  getTitle.push(title.textContent);
});

console.log(getTitle);
