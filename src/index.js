console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('dog-image-container');
    fetch(imgUrl)
        .then(res => res.json())
        .then(res => {
            res.message.forEach((imgSrc) => {
                const img = document.createElement('img');
                img.src = imgSrc;
                div.appendChild(img);
            })
        });
});
<div id="dog-image-container">
     
    </div>