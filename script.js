/* al iniciar disparo la funcion cargarAnimales */
cargarAnimales()

function cargarAnimales() {
    /* Selecciono mi contenedor raiz */
    const contendorPricipal = document.querySelector('.raiz');
    /* Creo un componente de tipo div  */
    const componenteCarro = document.createElement('div');
    componenteCarro.className = "carousel slide m-auto p-0";
    componenteCarro.id = "carouselExampleControls";
    componenteCarro.setAttribute("data-bs-ride","carousel");
    /* declaro mi variable carousel */
    const carousel = document.createElement('div');
    carousel.className = "carousel-inner m-0 p-0";
    /* Uitlizo Fetch para traer la informacion del json*/
    fetch('animales.json')
        /* esta linea no se bien que hace pero entiendo que responde con un json*/
        .then(response => response.json())
        /* ahora si en esta linea comienso el trabajo con el objeto json/array de Objetos */
        .then(animales => {
            /* uso un foreach porque voy a necesitar que repitan la creacion de cada componente */
            animales.forEach((animal, index) => {
                /* comienso a crear por cada animal un elementoCarousel de tipo DIV */
                const itemCarousel = document.createElement('div');
                /* a este div le añadio la clase carousel-item que requiere boostrap para identificarlo como un 
                item de carousel , y el active solo se usa en la primer imagen por eso utilizo una ternaria para asignar esto 1 sola ves. */
                (index == 0) ? itemCarousel.className = "carousel-item active" : itemCarousel.className = "carousel-item";
                /* tambien voy a crear una itemCard, que esto de tipo DIV el cual va a contener el HTML para la imagen y las descripciones*/
                const itemCard = document.createElement('div');
                /* al <div> creado le añadio clases de boostrap para manejar los elementos al orden que yo quiero y no que se muestren como una simple card */
                itemCard.className = "card d-flex flex-row";

                /*CREO EL CONTENIDO DINAMICO */
                /* dentro de itemCard le ingreso el HTML solo cambiando las partes cambiantes con ${} */
                itemCard.innerHTML = `<div class="card">
                <div class="contenedor-imagen">
                    <div class="text-center vResponsive">
                        <h5 class="card-title">${animal.nombre}</h5>
                    </div>
                <img src="${animal.img}" class="card-img" alt="imagen-default">
                </div>
                <div class="card-body">
                    <div class="text-center ctitulo">
                        <h5 class="card-title">${animal.nombre}</h5>
                    </div>
                    <div class="info">
                        <ul class="card-text">
                        <li><strong>Edad : </strong>${animal.edad}</li>
                        <li><strong>Raza : </strong>${animal.raza}</li>
                        <li><strong>Sexo : </strong>${animal.sexo}</li>
                        <li><strong>Pelaje : </strong>${animal.pelaje}</li>
                        <li><strong>Vacunas : </strong>${(animal.vacunado) ? "Todas las vacunas" : "Sin vacunas"}</li>
                        <li><strong>Desparasitado : </strong>${(animal.desparasitado) ? "Si" : "No"}</li>
                        <li><strong>Castrado : </strong>${(animal.castrado) ? "Si" : "No"}</li>
                        <li><strong>Tamaño : </strong>${animal.tamaño}</li>
                        <li><strong>Caracteristicas : </strong></li>
                        <li>${animal.caracteristicas}</li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <a href="#" class="btn">¡Adoptar!</a>
                    </div>
                </div>
                </div>`;
                /* agrego el itemcard al item carousel */
                itemCarousel.appendChild(itemCard);
                /* agrego el itemCarousel al carousel */
                carousel.appendChild(itemCarousel);

                componenteCarro.appendChild(carousel);
                contendorPricipal.appendChild(componenteCarro);
                /* nota : para boostrapt necesariamente tenia que crear itemCarousel ya que es un nodo necesario para su funcionamiento. */
            });
            /*fix : agrego los botones al contenedor principal DESPUES DE AGREGAR LOS ITEMS de carousell*/

            document.querySelector('.raiz').innerHTML += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>`;
        });
};
