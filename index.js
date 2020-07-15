// https://www.asos.com/ru/asos-tall/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/prd/10264367?clr=odnotonnyj-chernyj&colourwayid=15106387&SearchQuery=&cid=3630
// задание https://docs.google.com/document/d/1pB8VZbXwmEVzyLoFrchDCxIYkeqwRi21yIucSuEDTAc/edit
// копируете код в консоль и исполняете.
const result = {};
let allImg = document.getElementsByTagName('img');
let allImgesLinks = [];
for (var i = 0; i < allImg.length; i++) {
  let link = allImg[i].getAttribute('src');
  if (link) allImgesLinks.push(link);
}
result.allImagesLinks = allImgesLinks;
result.title = document.querySelector('.product-hero h1').innerText;
result.actualPrice = document.querySelector(
  '.product-hero span[data-id="current-price"]'
).innerText;
result.oldPrice = document.querySelector(
  '.product-hero span[data-id="previous-price"]'
).innerText;
result.mainImage = document
  .querySelector('.fullImageContainer img')
  .getAttribute('src');
console.log(result);
