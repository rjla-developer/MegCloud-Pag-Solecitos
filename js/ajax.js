const seccCategories =document.querySelector('seccCategories');

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

/* async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
} */

postData('/temp/categories/categories.json', { answer: 42 })
.then((data) => {
    // JSON data parsed by `data.json()` call
    let backDecs=true;
    data.categories.map((item)=>{
        const categorie= document.createElement('div');
        categorie.className = "fs-gagalin categorie col-12 col-sm-4 m-0 text-center";
        if (backDecs) {
          categorie.classList.add("bg_cat1")
        }else{
          categorie.classList.add("bg_cat2")
        }

        const enlaceCat= document.createElement('a');
        enlaceCat.className="text-decoration-none"
        enlaceCat.href="/temp/categories/index.php"
        enlaceCat.onclick= ()=>{
          localStorage.setItem('itemSelect', (item.id).toString());
        }

        const divVacio= document.createElement('div');
        divVacio.className = "p-5";

        const divVacioTxt= document.createElement('div');
        divVacioTxt.className = "d-flex justify-content-center";

        const titulo= document.createElement('p')
        titulo.className="txt-size-2 text-shadow-orange mt-4 text-white position-absolute"
        titulo.textContent = item.title;

        const divVacioImg= document.createElement('div');
        divVacioImg.className = "d-flex justify-content-center";

        const img =document.createElement('img')
        img.className="img-fluid col-12"
        img.src = item.image_url;

        divVacioImg.append(img);
        divVacioTxt.append(titulo)
        divVacio.append(divVacioTxt, divVacioImg);
        enlaceCat.append(divVacio);
        categorie.append(enlaceCat);
        seccCategories.append(categorie);
        backDecs= !backDecs;
    })
});

