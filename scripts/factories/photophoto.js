function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const header = document.querySelector(".photograph-header");
        const likenprice = document.querySelector(".like-n-price")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const h2 = document.createElement( 'h2' );
        h2.textContent = city + ", " + country;
        const h3 = document.createElement( 'h3' );
        h3.textContent = tagline;
        header.appendChild(img)
        header.appendChild(h1);
        header.appendChild(h2);
        header.appendChild(h3);
        const pricey = document.createElement( 'h2');
        const likey = document.createElement('h2');
        const likeicon = document.createElement('img');
        likeicon.setAttribute("src", "assets/icons/likes.svg");
        likeicon.setAttribute("alt", "Likes");
        pricey.textContent = price + "€ / jour";
        pricey.setAttribute("class","prices")
        likey.setAttribute("class","likes")
        likey.textContent = totalLike;
        likenprice.appendChild(pricey);
        likenprice.appendChild(likey);       
        const pageTitle = document.getElementsByTagName("title")[0];
        pageTitle.textContent = "Fisheye - " + name;
        likenprice.appendChild(likeicon);
        return (header);
    }
    return { getUserCardDOM }
}