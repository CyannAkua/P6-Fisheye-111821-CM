function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.querySelector(".photograph-header");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        article.appendChild(img)
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        return (article);
    }
    return { getUserCardDOM }
}