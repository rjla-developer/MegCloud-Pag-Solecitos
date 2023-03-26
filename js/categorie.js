const seccCategorie =document.querySelector('seccCategorie');
/* let itemSelect = sessionStorage.getItem('itemSelect'); */

const itemSelect= localStorage.getItem('itemSelect');

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    
    return response.json(); // parses JSON response into native JavaScript objects
}


if (itemSelect!="") {
    postData('/temp/categories/' + itemSelect + '.json', { answer: 42 })
    .then((data) => {
      // JSON data parsed by `data.json()` call
    
      const containerSecc= document.createElement('div');
      containerSecc.className="container"
    
      const row1Categorie = document.createElement('div');
      row1Categorie.className="row"
    
      const col1categorie = document.createElement('div');
      col1categorie.className="col"
    
      const title = document.createElement('p');
      title.className="fs-gagalin txt-size-2 mb-4 mb-lg-5 text-center color-orange"
      title.textContent = data.category_label;
    
      const row2Categorie = document.createElement('div');
      row2Categorie.className="row"
    
      data.items.map((item)=>{
        const col2categorie = document.createElement('div');
        col2categorie.className="col-6 col-lg-3 mb-5"
    
        const enlaceProduct= document.createElement('a');
        enlaceProduct.className="text-decoration-none"
        enlaceProduct.href="/temp/categories/product.php"
        enlaceProduct.onclick= ()=>{
          localStorage.setItem('productSelect', JSON.stringify(item));
        }
    
        const containerItem = document.createElement('div');
        containerItem.className="rounded-2rem border border-dark"
    
        const img =document.createElement('img')
        img.className="img-fluid rounded-2rem-top"
        img.src = item.images[0];
    
        const name= document.createElement('p')
        name.className="fs-inter fs-6 text-uppercase text-center color-blue mt-3 fw-bold"
        name.textContent = item.title;
    
        containerItem.append(img, name);
        enlaceProduct.append(containerItem)
        col1categorie.append(title);
        col2categorie.append(enlaceProduct);
        row1Categorie.append(col1categorie);   
        row2Categorie.append(col2categorie);
        containerSecc.append(row1Categorie, row2Categorie);
        seccCategorie.append(containerSecc);
      })
    });
    /* sessionStorage.setItem('itemSelect', " "); */
  }
  