const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images.map((image) => `<li><img class="gallery__image" src=${image.url} alt:${image.alt} width = "300" height = "300"></li>`).join("");
document.querySelector(".gallery").insertAdjacentHTML("afterbegin", markup);
console.log(markup);

document.querySelector(".gallery").style.cssText = `
  display: grid;
  list-style: none;
  justify-content: center;
  grid-template-columns: repeat(3, 0.2fr)
  `;