// https://fakestoreapi.com/products

fetch('https://fakestoreapi.com/products').then((Response) => {
    return Response.json()
}).then((data) => {
    console.log('data', data);
    console.log(data[0].image);
    document.getElementById('sectioncontainer').innerHTML = ''
    console.log(data[0].category);
    
    for (let i = 1; i < 4; i++) {
        
        document.getElementById('sectioncontainer').innerHTML += `
                        <figure>
                            <div class="con">
                                <img src="${data[i].image}" alt="${data[i].category}" title='${data[i].category}'>
                                <div class="icons">
                                    <div class="guest">Guest favorite</div>
                                    <i class="fa-solid fa-heart i1"></i>
                                </div>
                            </div>
                            <figcaption>
                                <h3>${data[i].title.slice(0,17)}...</h3>
                                <p>${data[i].price}pkr for 2 nights • ★ <span>${data[i].rating.rate}</span></p>
                            </figcaption>
                        </figure>
                        `
    }

    document.getElementById('sectioncontainer2').innerHTML = ''
    for (let i = data.length - 6; i < data.length; i++) {
    document.getElementById('sectioncontainer2').innerHTML += `
        <figure>
            <div class="con">
                                <img src="${data[i].image}" alt="${data[i].category}" title='${data[i].category}'>
                <div class="icons">
                    <div class="guest">Guest favorite</div>
                    <i class="fa-solid fa-heart i1"></i>
                </div>
            </div>
            <figcaption>
                <h3>${data[i].title.slice(0,17)}...</h3>
                <p>${data[i].price}pkr for 2 nights • ★ <span>${data[i].rating.rate}</span></p>
            </figcaption>
        </figure>
    `;
}

 document.getElementById('sectioncontainer3').innerHTML = ''
    for (let i = 4; i < 8; i++) {
    document.getElementById('sectioncontainer3').innerHTML += `
        <figure>
            <div class="con">
                                <img src="${data[i].image}" alt="${data[i].category}" title='${data[i].category}'>
                <div class="icons">
                    <div class="guest">Guest favorite</div>
                    <i class="fa-solid fa-heart i1"></i>
                </div>
            </div>
            <figcaption>
                <h3>${data[i].title.slice(0,17)}...</h3>
                <p>${data[i].price}pkr for 2 nights • ★ <span>${data[i].rating.rate}</span></p>
            </figcaption>
        </figure>
    `;

    document.getElementById('sectioncontainer4').innerHTML = ''
    for (let i = 8; i < 14; i++) {
    document.getElementById('sectioncontainer4').innerHTML += `
        <figure>
            <div class="con">
                                <img src="${data[i].image}" alt="${data[i].category}" title='${data[i].category}'>
                <div class="icons">
                    <div class="guest">Guest favorite</div>
                    <i class="fa-solid fa-heart i1"></i>
                </div>
            </div>
            <figcaption>
                <h3>${data[i].title.slice(0,17)}...</h3>
                <p>${data[i].price}pkr for 2 nights • ★ <span>${data[i].rating.rate}</span></p>
            </figcaption>
        </figure>
    `;
}
}
}).catch((error) => {
    console.log('Error in Dummy Api');
})