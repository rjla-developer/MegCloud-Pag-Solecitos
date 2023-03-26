const product = document.querySelector('product')

const productSelect= JSON.parse(localStorage.getItem('productSelect'));

const isMobile = window.matchMedia("(max-width: 992px)").matches;

if (productSelect!="") {
    /* console.log(JSON.parse(localStorage.getItem('productSelect'))); */
    const container= document.createElement('div');
    container.className="container"
  
    const row = document.createElement('div');
    row.className="row d-flex justify-content-center"
  
    const col = document.createElement('div');
    col.className="rounded-2rem col-auto border border-secondary position-absolute mt-0 bg-white"
  
    const title = document.createElement('p');
    title.className="fs-gagalin txt-size-2 color-orange text-center m-0 p-2"
    title.textContent = productSelect.title;

    const col2 = document.createElement('div');
    col2.className="fs-inter col-12 rounded-2rem border border-secondary p-5 mt-4 mt-lg-5"

    const rowInfoProduct = document.createElement('div');
    rowInfoProduct.className="row mt-1 mt-lg-5"

    const colVideo = document.createElement('div');
    colVideo.className="col-12 col-lg-6 p-0 p-lg-5 mb-4 mb-lg-0"

    /* console.log(productSelect.video) */
    const video =document.createElement('iframe');
    video.title="YouTube video player";
    video.frameborder="0";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    video.allowfullscreen=true
    video.src = productSelect.video;
    video.controls= true;
    video.width="100%";
    video.height="100%";

    const colDesc = document.createElement('div');
    colDesc.className="col"

    const desc = document.createElement('p');
    desc.className="fs-6 mb-4 mb-lg-3 text-start"
    desc.textContent = productSelect.description;

    const containerProps = document.createElement('div');
    containerProps.className="row text-start"

    const col1Props = document.createElement('div');
    col1Props.className="col-6"

    const contDiv = document.createElement('div');
    contDiv.className="mb-5"

    const contDiv_1 = document.createElement('div');
    contDiv_1.className="row mb-3 d-flex align-items-center"

    const contDiv_11 = document.createElement('div');
    contDiv_11.className="col-2 px-0 me-2 "

    const imgIcon =document.createElement('img')
    imgIcon.className="img-fluid m-0"
    imgIcon.src = "/images/template/li.png";

    const contDiv_12 = document.createElement('div');
    contDiv_12.className="col-auto px-0"

    const span1 = document.createElement('p');
    span1.className="color-orange txt-size-5 fw-bold text-start mb-0"
    span1.textContent="Motores"

    const descEngine = document.createElement('span');
    descEngine.textContent=productSelect.engine;

    const contDiv2 = document.createElement('div');

    const contDiv2_1 = document.createElement('div');
    contDiv2_1.className="row mb-3 d-flex align-items-center"

    const contDiv2_11 = document.createElement('div');
    contDiv2_11.className="col-2 px-0 me-2"

    const imgIcon2 =document.createElement('img')
    imgIcon2.className="img-fluid m-0"
    imgIcon2.src = "/images/template/li.png";

    const contDiv2_12 = document.createElement('div');
    contDiv2_12.className="col-4 px-0"

    const span2 = document.createElement('span');
    span2.className="text-warning txt-size-5 fw-bold text-start mb-0"
    span2.textContent="Dimensiones"

    const descDimension = document.createElement('p');
    descDimension.textContent=productSelect.size;

    const col2Props = document.createElement('div');
    col2Props.className="col-6"

    const contDiv3 = document.createElement('div');

    const contDiv3_1 = document.createElement('div');
    contDiv3_1.className="row mb-3 d-flex align-items-center"

    const contDiv3_11 = document.createElement('div');
    contDiv3_11.className="col-2 px-0 me-2"

    const imgIcon3 =document.createElement('img')
    imgIcon3.className="img-fluid m-0"
    imgIcon3.src = "/images/template/li.png";

    const contDiv3_12 = document.createElement('div');
    contDiv3_12.className="col-4 px-0"

    const span3 = document.createElement('span');
    span3.className="text-warning txt-size-5 fw-bold text-start mb-0"
    span3.textContent="Participantes"

    const descPartic = document.createElement('p');
    descPartic.textContent= "De " + productSelect.min_upper_limit + " hasta " + productSelect.max_upper_limit

    const descAgelimit = document.createElement('p');
    descAgelimit.textContent= productSelect.age_to_enter

    const contDiv4 = document.createElement('div');

    const contDiv4_1 = document.createElement('div');
    contDiv4_1.className="row mb-3 d-flex align-items-center"

    const contDiv4_11 = document.createElement('div');
    contDiv4_11.className="col-2 px-0 me-2"

    const imgIcon4 =document.createElement('img')
    imgIcon4.className="img-fluid m-0"
    imgIcon4.src = "/images/template/li.png";

    /* const svg4= document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg4.setAttribute("viewBox", "0 0 16 16");
    const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path4.setAttribute("d", "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z");
    svg4.appendChild(path4);
    svg4.className="bi bi-brightness-high"
    svg4.setAttribute("fill", "currentColor")
    svg4.setAttribute("width", "16") */

    const contDiv4_12 = document.createElement('div');
    contDiv4_12.className="col-4 px-0"

    const span4 = document.createElement('span');
    span4.className="color-orange txt-size-5 fw-bold text-start mb-0"
    span4.textContent="STAFF"

    const descStaff = document.createElement('p');
    descStaff.textContent=productSelect.staff;
    /* descStaff.className="fs-5" */

    const carousel = document.createElement('div');
    carousel.className="row mt-5"

    const carouselCol = document.createElement('div');
    carouselCol.className="col"

    const carouselExampleControls = document.createElement('div');
    carouselExampleControls.id="carouselExampleControls"
    carouselExampleControls.classList.add('carousel', 'slide');
    carouselExampleControls.setAttribute("data-bs-ride", "carousel")

    const carousel_inner = document.createElement('div');
    carousel_inner.classList.add("carousel-inner")

    var cantidadItems=5;
    if (isMobile) {
        console.log("La pantalla está en modo celular");
        cantidadItems=2
    } else {
        console.log("La pantalla no está en modo celular");
    }
    for (let i = 0; i < productSelect.images.length; i= i+5) {
        const carousel_item = document.createElement('div');
        carousel_item.classList.add("carousel-item")
        
        if (i<cantidadItems) {
            carousel_item.classList.add("active")
        } 
            
        const carousel_itemRow = document.createElement('div');
        carousel_itemRow.className="row mx-5"


        for (let j = i; j < i + cantidadItems; j++) {
            const carousel_itemCol = document.createElement('div');
            carousel_itemCol.className="col"

            const imgCarousel =document.createElement('img')
            imgCarousel.className="img-fluid rounded-1rem"
            imgCarousel.src = productSelect.images[j];

            carousel_itemCol.append(imgCarousel);
            carousel_itemRow.append(carousel_itemCol);
        }
        carousel_item.append(carousel_itemRow)
        carousel_inner.append(carousel_item)
    }
    

    const btn_prev = document.createElement('button');
    btn_prev.className="carousel-control-prev"
    btn_prev.type="button"
    btn_prev.setAttribute('data-bs-target', '#carouselExampleControls')
    btn_prev.setAttribute('data-bs-slide', 'prev')

    const divBtnPrev = document.createElement('div');
    divBtnPrev.className="btnNextPrev rounded-2rem pt-1"

    const spanPrev1 = document.createElement('span');
    spanPrev1.className="carousel-control-prev-icon text-info"
    spanPrev1.setAttribute("aria-hidden", "true")

    const spanPrev2 = document.createElement('span');
    spanPrev2.className="visually-hidden"
    spanPrev2.textContent="Previous"

    divBtnPrev.append(spanPrev1, spanPrev2)
    btn_prev.append(divBtnPrev)



    const btn_next = document.createElement('button');
    btn_next.classList.add("carousel-control-next")
    btn_next.type="button"
    btn_next.setAttribute("data-bs-target", "#carouselExampleControls")
    btn_next.setAttribute("data-bs-slide", "next")
    btn_next.onclick=()=>{console.log(JSON.stringify(carouselExampleControls.id))}

    const divBtnNext = document.createElement('div');
    divBtnNext.className="btnNextPrev rounded-2rem pt-1"

    const spanNext1 = document.createElement('span');
    spanNext1.className="carousel-control-next-icon"
    spanNext1.setAttribute("aria-hidden", "true")

    const spanNext2 = document.createElement('span');
    spanNext2.className="visually-hidden"
    spanNext2.textContent="Next"

    divBtnNext.append(spanNext1, spanNext2)
    btn_next.append(divBtnNext)

    
    
    carouselExampleControls.append(carousel_inner, btn_prev, btn_next)
    carouselCol.append(carouselExampleControls)
    carousel.append(carouselCol)

    contDiv4_11.append(imgIcon4)
    contDiv4_12.append(span4)
    contDiv4_1.append(contDiv4_11, contDiv4_12)
    contDiv4.append(contDiv4_1, descStaff)

    contDiv3_11.append(imgIcon3)
    contDiv3_12.append(span3)
    contDiv3_1.append(contDiv3_11, contDiv3_12)
    contDiv3.append(contDiv3_1, descPartic, descAgelimit)
    
    contDiv2_11.append(imgIcon2)
    contDiv2_12.append(span2)
    contDiv2_1.append(contDiv2_11, contDiv2_12)
    contDiv2.append(contDiv2_1, descDimension)

    contDiv_11.append(imgIcon)
    contDiv_12.append(span1)
    contDiv_1.append(contDiv_11, contDiv_12)
    contDiv.append(contDiv_1, descEngine)

    col2Props.append(contDiv3, contDiv4)
    col1Props.append(contDiv, contDiv2)
    containerProps.append(col1Props, col2Props)

    colDesc.append(desc, containerProps)
    colVideo.append(video)

    rowInfoProduct.append(productSelect.video != "" ? (colVideo) : "", colDesc )
    
    col2.append(rowInfoProduct, carousel)
    col.append(title);
    row.append(col, col2);
    container.append(row);
    product.append(container);
}
  
