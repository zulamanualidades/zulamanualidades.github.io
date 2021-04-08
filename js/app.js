function loadProductComiditas(){
//https://beautifytools.com/excel-to-json-converter.php excel to json
var arr = [
    {
        "id": "ZULA_017",
        "title": "Helados",
        "description": "✔2 Cucuruchos\r\n✔2 Bochas (crema y Frutilla, Chocolate y Cereza)\r\n✔2 Helados de Agua (Limón y Naranja)\r\n\r\nEstos tipos de juegos didácticos fomentan la capacidad mental y la práctica de conocimientos en forma activa. Para un niño, es más fácil recordar y aprender algo divertido y entretenido😊.\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n\r\nSugeridos para niños mayores a 3 años.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "790.00",
        "image_link": "https://live.staticflickr.com/65535/51004295955_182e01c13a_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_019",
        "title": "Kit de Frutas x3 Unidades",
        "description": "✔ 1 Manzana 🍎\r\n✔ 1 Banana 🍌\r\n✔ 1 Pera 🍐\r\n\r\nEspecificaciones:\r\n✔ Entregado en bolsa de tela\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar lavable.\r\n✔ 100% confeccionadas a mano.\r\n✔ No vienen con el cajón de frutas.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "575.00",
        "image_link": "https://live.staticflickr.com/65535/51072785323_b52cfa74fc_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_020",
        "title": "Kit dulce",
        "description": "✔ 2 Donas\r\n✔ 1 Porción de Pastafrola\r\n✔ 1 Saquito de TE\r\n\r\nEspecificaciones:\r\n✔ Entregado en bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "750.00",
        "image_link": "https://live.staticflickr.com/65535/51072781963_ac4658528e_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_021",
        "title": "Kit Frutas",
        "description": "✔ 1 Manzana 🍎\r\n✔ 1 Banana 🍌\r\n✔ 1 Pera 🍐\r\n✔ Frutillas (x2) 🍓\r\n✔ 1 Naranja 🍊\r\n✔ 1 Sandia\r\n\r\nEspecificaciones:\r\n✔ Entregado en bolsa de tela\r\n✔ No tóxicos\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar lavable.\r\n✔ 100% confeccionadas a mano.\r\n✔ No vienen con el cajón de frutas.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "835.00",
        "image_link": "https://live.staticflickr.com/65535/51073576357_4800dc5c8e_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_022",
        "title": "Kit Hamburguesa",
        "description": "✔ 2 Panes 🍔\r\n✔ 1 Medallón de Carne\r\n✔ 1 Queso Cheddar 🧀\r\n✔ 1 Jamón\r\n✔ 1 Huevo Fito\r\n✔ 1 Rodaje de Tomate 🍅\r\n✔ 1 Hoja de Lechuga\r\n✔ 1 manzana 🍎\r\n\r\nEspecificaciones:\r\n✔ Entregado con bolsa de tela.\r\n✔ No tóxicos\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n✔ El tamaño es como el de una hamburguesa de verdad.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "820.00",
        "image_link": "https://live.staticflickr.com/65535/51004296235_536d3efeec_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_023",
        "title": "Kit Merienda",
        "description": "✔ 2 Donas\r\n✔ 1 Galletita con chip de chocolate\r\n✔ 1 Galletita pepa\r\n✔ 1 Saquito de TE\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado en bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "675.00",
        "image_link": "https://live.staticflickr.com/65535/51073477031_20bb34e33e_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_024",
        "title": "Kit Pasta",
        "description": "✔ 10 Ravioles.\r\n✔ 10 Fideos Moño.\r\n✔ 10 Fideos Mostachol.\r\n✔ 2 Salas Reversibles (salsa de tomate, salsa de tomate con queso, salsa blanca, salsa blanca con queso)\r\n✔ 2 Hojas de Laurel\r\n\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado con bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección",
        "price": "720.00",
        "image_link": "https://live.staticflickr.com/65535/51073578187_9f05635e8c_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_025",
        "title": "Kit Picnic",
        "description": "✔ 2 rodajas de pan 🍞\r\n✔ 1 jamon\r\n✔ 1 queso 🧀\r\n✔ 1 hoja de lechuga\r\n✔ 1 tomate🍅\r\n✔ 1 huevo frito🍳\r\n✔ 1 manzana 🍎\r\n\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado con tarjeta de agradecimiento y bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n✔ El tamaño es como el de un sándwich real.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "820.00",
        "image_link": "https://live.staticflickr.com/65535/51004293430_74ba91214c_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_026",
        "title": "Kit Pizza",
        "description": "✔4 Masas (total de 23 cm de diámetro)\r\n✔4 Jamón\r\n✔4 Queso 🧀\r\n✔4 Salsa de tomate🍅\r\n✔4 Huevo 🍳\r\n✔4 Morrones\r\n✔6 Aceitunas\r\n\r\nDividida en 4 porciones 🍕🍕🍕🍕\r\n\r\nEspecificaciones:\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "1050.00",
        "image_link": "https://live.staticflickr.com/65535/51072779983_6e66fec1af_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_027",
        "title": "Kit Verduleria",
        "description": "✔ 1 Manzana 🍎\r\n✔ 1 Banana 🍌\r\n✔ 1 Calabaza\r\n✔ 1 Pera 🍐\r\n✔ 1 Zanahoria 🥕\r\n✔ 1 Lechuga\r\n✔ 2 Frutillas 🍓\r\n✔ 1 Naranja 🍊\r\n✔ 1 Sandia 🍉\r\n✔ 1 Papa 🥔\r\n✔ 1 Tomate 🍅\r\n✔ 1 Palta 🥑\r\n\r\nEspecificaciones:\r\n✔ Entregado en bolsa de tela\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar lavable.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "1880.00",
        "image_link": "https://live.staticflickr.com/65535/51072778113_7c73e8a5cb_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_028",
        "title": "Kit Verduras",
        "description": "✔ 1 Zanahoria 🥕\r\n✔ 1 Lechuga\r\n✔ 1 Papa 🥔\r\n✔ 1 Tomate 🍅\r\n✔ 1 Calabaza\r\n✔ 1 Palta 🥑\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado con bolsa de tela\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar lavable.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "900.00",
        "image_link": "https://live.staticflickr.com/65535/51073473881_3cf23c9bf1_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_029",
        "title": "Kit Verduras x3 Unidades",
        "description": "✔ 1 Zanahoria 🥕\r\n✔ 1 Lechuga\r\n✔ 1 Tomate 🍅\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado en bolsa de tela\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar lavable.\r\n✔ 100% confeccionadas a mano.\r\n✔ No vienen con el cajón de frutas.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "575.00",
        "image_link": "https://live.staticflickr.com/65535/51073582422_eec271d669_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_030",
        "title": "Macarons x6",
        "description": "Macarons 6 unidades\r\nEspecificaciones:\r\n\r\n✔ Entregado en bolsa de tela\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar lavable.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "710.00",
        "image_link": "https://live.staticflickr.com/65535/51073477321_9056ebb228_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_031",
        "title": "Porciones Dulces",
        "description": "✔ 1 Pasta Frola\r\n✔ 1 Lemon Pie\r\n✔ 1 Tarta de Frutilla\r\n✔ 1 Tarta de Chocolate, crema y merengue\r\n\r\nEspecificaciones:\r\n✔ Entregado en Bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
        "price": "755.00",
        "image_link": "https://live.staticflickr.com/65535/51072779528_0393a20a9d_z.jpg",
        "category": "Comiditas"
    },
    {
        "id": "ZULA_032",
        "title": "Tarta de Manzana",
        "description": "✔ Masa de 17 cm\r\n✔ 6 rodajas de manzana (verde o roja)\r\n✔ Enrejado\r\n\r\nEspecificaciones:\r\n\r\n✔ Entregado con bolsa de tela.\r\n✔ No tóxicos.\r\n✔ No son mordillos.\r\n✔ Rellena de vellón siliconado.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección",
        "price": "700.00",
        "image_link": "https://live.staticflickr.com/65535/51073473536_0f521a30d3_z.jpg",
        "category": "Comiditas"
    }
]

var i = 0;
arrLen = arr.length - 1,
str = "";

// loop through all elements in the array, building a form for each object
for (; i <= arrLen; i++ ) {
    //alert(arr[i].title);

str = str + 

'<div class="col-xs-6 col-md-3">'
+'   <div class="thumbnail" style="border: 0px" >'
+'     <img src="'+ arr[i].image_link+'" class="img-responsive" alt="a" >'
+'     <button class="btn btn-link hidden-sm detail btn-block" data-toggle="modal" data-target="#'+arr[i].id+'"><i class="fa fa-list"></i> Ver Detalle</button>'
+'     <div class="info">'
+'         <h5 class="name_product titleProduct"><span>'+arr[i].title+'</span></h5>'
+'         <div>'
+'             <div class="v"><h5 class="price-text-color">$ </h5></div>'
+'             <div class="vk"><h5 class="price-text-color price-u">'+arr[i].price+'</h5></div>'
+'         </div>'
+'       <button class="btn btn-secondary hidden-sm add btn-block" id-data="'+arr[i].id+'" data-category="'+arr[i].category+'"><i class="fa fa-shopping-cart"></i> Agregar <span id="nbr-check" class="badge">0</span></button>'
+'     </div>'
+'   </div>'
+'   <div class="clearfix"></div>'
+' </div>'

+'<div class="modal fade" id="'+arr[i].id+'" tabindex="-1" role="document" aria-labelledby="basicModal" aria-hidden="true">'
+'        <div class="modal-dialog">'
+'          <div class="modal-content">'
+'            <div class="modal-header">'
+'              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
+'              <h4 class="modal-title" id="myModalLabel">'+arr[i].title+'</h4>'
+'            </div>'
+'            <div class="modal-body">'
+'              <pre>'+arr[i].description
+'              </pre>'
+'            </div>'
+'            <div class="modal-footer">'
+'              <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>'
+'            </div>'
+'          </div>'
+'        </div>'
+'      </div>';
};

var strCatgory = '<h2 style="margin-left: 15px;" id="comiditas">Comiditas de Tela ('+i+')</h2>'

return strCatgory+str;
}

function loadProductJuguetesDidacticos(){
    //https://beautifytools.com/excel-to-json-converter.php excel to json
    var arr = [
        {
            "id": "ZULA_001",
            "title": "Fogata",
            "description": "Set de Fogata es ideal para jugar al aire libre o dentro de tu casa, en pijamadas o a donde te lleve tu imaginación!!\r\n\r\nEl set incluye:\r\n✔ 3 Llamas 🔥\r\n✔ 3 Troncos\r\n✔ 4 Piedras\r\n\r\nEspecificaciones:\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar.\r\n✔ 100% confeccionadas a mano.\r\n✔ Aproximadamente 28 cm de Alto\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "1650.00",
            "image_link": "https://live.staticflickr.com/65535/51004296660_51d775864e_k.jpg",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_002",
            "title": "Bowling",
            "description": "✔ 6 bolos (Altura: 20 cm Aprox)\r\n✔ 1 Pelota\r\n\r\nEl bowling es una de las actividades más entretenidas tanto para los adultos como para los más pequeños. El objetivo del juego es derribar el mayor número bolos lanzando una bola. Es una forma de hacer ejercicio de una manera entretenida y divertida.\r\n\r\nEspecificaciones:\r\n✔Entregado en Bolsa de Tela\r\n✔ No tóxicos.\r\n✔ Rellena de vellón siliconado.\r\n✔ Confeccionado en Tela lavable.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "1150.00",
            "image_link": "https://lh3.googleusercontent.com/pw/ACtC-3fjYmLzLdJTTYbby-tP1NBKrnTVaXJOpcX1HH3cFVeBUa9q9RnVKiLmLytiJcVPQlP-eAhG7YNdm--1eeN8rBa759LdAFAhvOKOPKG_u4muYZwjGwWoGIEBbSMg2maPIpH590Hk9nk7RWt2QFDr5jWmUA=s657-no?authuser=0",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_003",
            "title": "Fogata + Malvaviscos",
            "description": "Set de Fogata + Malvaviscos es ideal para jugar al aire libre o dentro de tu casa, en pijamadas o a donde te lleve tu imaginación!!\r\n\r\nEl set incluye:\r\n✔ 3 Llamas 🔥\r\n✔ 3 Troncos\r\n✔ 4 Piedras\r\n✔ 2 Sándwich de galletita (chocolate y malvaviscos)\r\n✔ 2 Malvaviscos\r\n\r\nEspecificaciones:\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar.\r\n✔ 100% confeccionadas a mano.\r\n✔ Aproximadamente 28 cm de Alto\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "1800.00",
            "image_link": "https://live.staticflickr.com/65535/51072783353_cb1bbbd1c7_k.jpg",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_004",
            "title": "Kit  Malvaviscos",
            "description": "✔ 2 Sándwich de galletita (chocolate y malvaviscos)\r\n✔ 2 Malvaviscos\r\n\r\nEspecificaciones:\r\n✔ Rellena de vellón siliconado.\r\n✔ Elaborada con tela polar.\r\n✔ 100% confeccionadas a mano.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "600.00",
            "image_link": "https://live.staticflickr.com/65535/51073477156_f9f6356eeb_k.jpg",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_005",
            "title": "Kit Medico",
            "description": "✔ 3 Curitas\r\n✔ 1 Tensiómetro\r\n✔ 1 Estetoscopio\r\n✔ 1 Termómetro\r\n✔ 1 Blister de pastillas\r\n\r\nLas curitas y el tensiómetro poseen abrojo, para que los peques puedan usarlas igual que las reales.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "810.00",
            "image_link": "https://live.staticflickr.com/65535/51073477621_0167861b61_k.jpg",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_006",
            "title": "Pelota Gajos Montessori",
            "description": "Una pelota para bebés que podrán manipular desde los 4 meses y con la que podrán jugar durante diferentes etapas del juego hasta los 3 años.\r\n\r\nDiseño ergonómico y bonito, muy fácil de agarrar gracias a los pétalos separados de cada color, lo que ayuda al estimulo y desarrollo de la visión del bebe.\r\n\r\nLa pelota ayuda a estimular la fuerza y coordinación en las manos del bebe, su desarrollo motriz, reconocer distancia y velocidad e interactuar con el espacio/tiempo.\r\n\r\nConfeccionado 100% a mano, en tela de algodón. Relleno de vellon siliconado.\r\nMedidas aprox.: 45 cm de circunferencia.",
            "price": "630.00",
            "image_link": "https://live.staticflickr.com/65535/51072784858_841bceb91f_k.jpg",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_008",
            "title": "Pelota Gajos Colores (20 Cm)",
            "description": "Pelota de gajos de color.\r\nConfeccionado 100% a mano, en tela polar. Relleno de vellón siliconado.\r\nMedidas aprox.: 20 cm diámetro.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "750.00",
            "image_link": "https://live.staticflickr.com/65535/51073577892_19742a4523_z.jpg",
            "category": "Juguetes Didacticos"
        },
        {
            "id": "ZULA_009",
            "title": "Pelota Gajos Colores (30 Cm)",
            "description": "Pelota de gajos de color.\r\nConfeccionado 100% a mano, en tela polar. Relleno de vellón siliconado.\r\nMedidas aprox.: 20 cm diámetro.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
            "price": "1150.00",
            "image_link": "https://live.staticflickr.com/65535/51073577892_19742a4523_z.jpg",
            "category": "Juguetes Didacticos"
        }
    ]
    
    
    var i = 0;
    arrLen = arr.length - 1,
    str = "";
    
    // loop through all elements in the array, building a form for each object
    for (; i <= arrLen; i++ ) {
        //alert(arr[i].title);
  
    str = str + 

    '<div class="col-xs-6 col-md-3">'
   +'   <div class="thumbnail" style="border: 0px" >'
   +'     <img src="'+ arr[i].image_link+'" class="img-responsive" alt="a" >'
   +'     <button class="btn btn-link hidden-sm detail btn-block" data-toggle="modal" data-target="#'+arr[i].id+'"><i class="fa fa-list"></i> Ver Detalle</button>'
   +'     <div class="info">'
   +'         <h5 class="name_product titleProduct"><span>'+arr[i].title+'</span></h5>'
   +'         <div>'
   +'             <div class="v"><h5 class="price-text-color">$ </h5></div>'
   +'             <div class="vk"><h5 class="price-text-color price-u">'+arr[i].price+'</h5></div>'
   +'         </div>'
   +'       <button class="btn btn-secondary hidden-sm add btn-block" id-data="'+arr[i].id+'" data-category="'+arr[i].category+'"><i class="fa fa-shopping-cart"></i> Agregar <span id="nbr-check" class="badge">0</span></button>'
   +'     </div>'
   +'   </div>'
   +'   <div class="clearfix"></div>'
   +' </div>'
  
    +'<div class="modal fade" id="'+arr[i].id+'" tabindex="-1" role="document" aria-labelledby="basicModal" aria-hidden="true">'
    +'        <div class="modal-dialog">'
    +'          <div class="modal-content">'
    +'            <div class="modal-header">'
    +'              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
    +'              <h4 class="modal-title" id="myModalLabel">'+arr[i].title+'</h4>'
    +'            </div>'
    +'            <div class="modal-body">'
    +'              <pre>'+arr[i].description
    +'              </pre>'
    +'            </div>'
    +'            <div class="modal-footer">'
    +'              <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>'
    +'            </div>'
    +'          </div>'
    +'        </div>'
    +'      </div>';
    };
    var strCatgory = '<h2 style="margin-left: 15px;" id="didacticos">Juguetes Didácticos ('+i+')</h2>'
    //$("#products").html(strCatgory+str);
    return strCatgory+str;
    }

function loadProductMuñecos(){
        //https://beautifytools.com/excel-to-json-converter.php excel to json
        var arr = 
        [
            {
                "id": "ZULA_007",
                "title": "Muñeca con Bolso",
                "description": "Podes usarlas para jugar en casa, para llevar tus cositas cuando vas a la casa de los abuelos, ir a hacer los mandados con mamá/papá y nunca despegarte de tu muñeca.\r\nTambién te cuento que las podes personalizar con el color de pelo que mas te guste, y vas a poder elegir el color de ropita también ( Sujeto a disponibilidad de Telas).",
                "price": "950.00",
                "image_link": "https://live.staticflickr.com/65535/51072781518_ae4802e602_k.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_010",
                "title": "Muñeco de Apego BUBU",
                "description": "🐻BUBU 🐻\r\n\r\nIdeal para que acompañe a tu bebe desde que nace hasta cuando el lo desee... Porque es tan dulce que no va a querer dejar de abrazarlo nunca 💗\r\n\r\nSu función principal es acompañar a tu bebe en su aventura de descubrir el mundo que lo rodea, compartiendo sus juegos, logros y frustraciones, ayudándolo a sentirse seguro.\r\n\r\nMuñeco confeccionado 100% a mano, en tela de algodón. Detalle de la cara pintado a mano ( No tóxico), relleno de vellon siliconado.\r\nMedidas aprox.: 26 cm alto.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
                "price": "705.00",
                "image_link": "https://live.staticflickr.com/65535/51072784113_96f7f0e493_z.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_011",
                "title": "Muñeco de Apego LULU",
                "description": "🐰 Ｌｕｌú 🐰\r\nEsta conejita es super dulce, le encanta que la abracen, le gusta dormir siesta y acompañar a los peques donde sea que vayan. ❤️\r\n\r\nSu función principal es acompañar a tu bebe en su aventura de descubrir el mundo que lo rodea, compartiendo sus juegos, logros y frustraciones, ayudándolo a sentirse seguro.\r\n\r\nMuñeco confeccionado 100% a mano, en tela de algodón. Detalle de la cara pintado a mano ( No tóxico), relleno de vellon siliconado.\r\nMedidas aprox.: 26 cm alto.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
                "price": "730.00",
                "image_link": "https://live.staticflickr.com/65535/51004295590_77d8483aa5_z.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_012",
                "title": "Muñeco de Apego PITU",
                "description": "🐰 Pitu 🐰\r\n\r\nEsta gatita es súper inquieta y juguetona 🐈, le encanta que la abracen, le gusta dormir siesta y acompañar a los peques donde sea que vayan. ❤️\r\nSu función principal es acompañar a tu bebe en su aventura de descubrir el mundo que lo rodea, compartiendo sus juegos, logros y frustraciones, ayudándolo a sentirse seguro.\r\n\r\nMuñeco confeccionado 100% a mano, en tela de algodón. Detalle de la cara pintado a mano ( No tóxico), relleno de vellon siliconado.\r\nMedidas aprox.: 40 cm alto.\r\n\r\nLos colores pueden variar según la disponibilidad de materiales en el momento de la confección.",
                "price": "760.00",
                "image_link": "https://live.staticflickr.com/65535/51073475281_6dcbc7dbd0_z.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_013",
                "title": "Muñeco Sensorial ARLO",
                "description": "ARLO (Juguete Sensorial)\r\n\r\nEs ideal para bebes, por su tamaño y porque es blandito para abrazar, apretar, morder.\r\n\r\nMuñeco confeccionado 100% a mano, en tela de algodón. Relleno de vellon siliconado.\r\nMedidas aprox.: 18cm alto x 11cm ancho",
                "price": "600.00",
                "image_link": "https://live.staticflickr.com/65535/51073479861_25a53f338b_z.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_014",
                "title": "Muñeco Sensorial BONI",
                "description": "BONI (Juguete Sensorial)\r\n\r\nEs ideal para bebes, por su tamaño y porque es blandito para abrazar, apretar, morder. Estimula los sentidos al apretarlo, debido a que tiene papel celofán en su interior.\r\n\r\nMuñeco confeccionado 100% a mano, en tela de algodón. Detalle de la cara pintado a mano ( No tóxico), relleno de vellon siliconado.\r\nMedidas aprox.: 22cm alto x 15cm ancho",
                "price": "635.00",
                "image_link": "https://live.staticflickr.com/65535/51073479311_7a62b70136_z.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_015",
                "title": "Muñeco Sensorial MIKU",
                "description": "😻MIKU (Juguete Sensorial) 😻\r\n\r\nEs ideal para bebes, por su tamaño y porque es blandito para abrazar, apretar, morder.\r\nTiene cintas en su carita que permite que las manitos de los bebes exploren distintas texturas.\r\n\r\nMuñeco confeccionado 100% a mano, en tela de algodón. Detalle de bigotes en cinta, relleno de vellon siliconado.\r\nMedidas aprox.: 19cm alto x 10cm ancho",
                "price": "700.00",
                "image_link": "https://live.staticflickr.com/65535/51004294825_fc6212ecec_z.jpg",
                "category": "Muñecos"
            },
            {
                "id": "ZULA_016",
                "title": "Muñeco Sensorial PULPIS",
                "description": "🐙PULPIS 🐙\r\n\r\nIdeal para que acompañe a tu bebe, es muy suavecito, lleno de colores, sus tentáculos son ideales para agarrar, apretar, morder.\r\n\r\nSu función principal es acompañar a tu bebe en su aventura de descubrir el mundo que lo rodea, ayuda a la estimulación visual por sus colores, a la estimulación motriz, a estimular la fuerza y coordinación en las manos del bebe.\r\n\r\nConfeccionado 100% a mano, en tela polar. Relleno de vellon siliconado.\r\nMedidas aprox.: 26 cm de alto",
                "price": "670.00",
                "image_link": "https://live.staticflickr.com/65535/51004292260_d447378972_z.jpg",
                "category": "Muñecos"
            }
        ]
        
        
        var i = 0;
        arrLen = arr.length - 1,
        str = "";
        
        // loop through all elements in the array, building a form for each object
        for (; i <= arrLen; i++ ) {
            //alert(arr[i].title);
        str = str + 

        '<div class="col-xs-6 col-md-3">'
       +'   <div class="thumbnail" style="border: 0px" >'
       +'     <img src="'+ arr[i].image_link+'" class="img-responsive" alt="a" >'
       +'     <button class="btn btn-link hidden-sm detail btn-block" data-toggle="modal" data-target="#'+arr[i].id+'"><i class="fa fa-list"></i> Ver Detalle</button>'
       +'     <div class="info">'
       +'         <h5 class="name_product titleProduct"><span>'+arr[i].title+'</span></h5>'
       +'         <div>'
       +'             <div class="v"><h5 class="price-text-color">$ </h5></div>'
       +'             <div class="vk"><h5 class="price-text-color price-u">'+arr[i].price+'</h5></div>'
       +'         </div>'
       +'       <button class="btn btn-secondary hidden-sm add btn-block" id-data="'+arr[i].id+'" data-category="'+arr[i].category+'"><i class="fa fa-shopping-cart"></i> Agregar <span id="nbr-check" class="badge">0</span></button>'
       +'     </div>'
       +'   </div>'
       +'   <div class="clearfix"></div>'
       +' </div>'
      
        +'<div class="modal fade" id="'+arr[i].id+'" tabindex="-1" role="document" aria-labelledby="basicModal" aria-hidden="true">'
        +'        <div class="modal-dialog">'
        +'          <div class="modal-content">'
        +'            <div class="modal-header">'
        +'              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
        +'              <h4 class="modal-title" id="myModalLabel">'+arr[i].title+'</h4>'
        +'            </div>'
        +'            <div class="modal-body">'
        +'              <pre>'+arr[i].description
        +'              </pre>'
        +'            </div>'
        +'            <div class="modal-footer">'
        +'              <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>'
        +'            </div>'
        +'          </div>'
        +'        </div>'
        +'      </div>';
        };
        var strCatgory = '<h2 style="margin-left: 15px;" id="muñecos">Muñec@s ('+i+')</h2>'
      
        return strCatgory+str;
        }


function loadAll(){
    var strComiditas = loadProductComiditas();
    var strDidacticos= loadProductJuguetesDidacticos();
    var strMuñecos = loadProductMuñecos();
    $("#productsDidacticos").html(strDidacticos);
    $("#productsComiditas").html(strComiditas);
    $("#productsMuñecos").html(strMuñecos);
}

function getData() {
    var str="";
    var total=0;
    
    //document.getElementById('info').innerHTML = "";
        var myTab = document.getElementById('pedido');
       
    if(myTab.rows.length == 1){
        
        return str;
    }

        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (i = 1; i < myTab.rows.length; i++) {
            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;
            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            
            for (var j = 0; j < objCells.length-1; j++) {
                if(j=2){
                  //  info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
                  str = str + '- ' + objCells.item(j).innerHTML;
                }
                if(j=3){
                    //info.innerHTML = info.innerHTML + ' - Cantidad ' + objCells.item(j).innerHTML;
                    str = str + '  → Cantidad ' + objCells.item(j).innerHTML;
                }
                if(j=5){
                    //info.innerHTML = info.innerHTML + ' - Total: $ ' + objCells.item(j).innerHTML;
                    total=total+parseFloat(objCells.item(j).innerHTML);
                    str = str + ' → Total: $ ' + objCells.item(j).innerHTML;
                }
            }
           // info.innerHTML = info.innerHTML + '<br />';     // ADD A BREAK (TAG).
            str=str+"%0a";
        }
        str = str + "%0a Monto Total: $ "+ total;
      
        return str;
}


// Enviar pedido
function sendOrder() {
   //document.getElementById("purchase").innerHTML = "¡Gracias!";
  // Obtengo el número de WhatsApp
  var str= getData();
  if (str==""){
      bootbox.alert("Pedido Vacío");
      return;
  }
  //alert(str);
  wppNumber = '1156697764';
  // Empiezo a crear el string del link
  link =
    "https://api.whatsapp.com/send?phone=549" +
    wppNumber +
    "&text=¡Hola! Te quiero hacer un pedido%0a";
  // Concatenar productos y cantidades
  /*for (let item of order) {
    if (item.cant > 0) {
      link += item.product + "  x" + item.cant + "%0a";
    }
  }*/
  // Concatenar monto total
  link += str;
  // Datos extra
  //link += "%0aMi nombre es %0aMi dirección es ";
  window.open(link);
    
  }


$(document).ready(function () {
    
loadAll();

  /***********************************************************************************/  
  /***********************************************************************************/
  /*================================ Shopping Cart ==================================*/
  /***********************************************************************************/  
  /***********************************************************************************/  
  // Tab_panier array containing the product ids added to the shopping cart 

    var tab_panier=[];     
    //Add new product to shopping cart
    $('.add').on('click', function (e) {
        e.preventDefault();
        var add=$(this);
        // Retrieve the product ID 
        var id_product = add.attr('id-data');
        var category = add.attr('data-category');
        //alert (category);
        //Retrieve the number of times is the selected product
        var checked=add.parent().parent().parent().find('#nbr-check');
        //alert (checked.text());
        //Check if the product is already in the shopping cart
        if($.inArray(id_product,tab_panier)==-1){
            // If the product does not exist in the shopping cart, than add it to the shopping cart
            tab_panier.push(id_product);
           var q=1;
           var tr=
                '<tr id="ligne">' +
                    '<td class="id_produit hidden" id-data="'+ id_product +'" ></td> '+
                    '<td class="id_category hidden" data-category="'+ category +'" ></td> '+
                    '<td class="nom">'+add.parent().parent().parent().find('.name_product').text()+'</td>'+
                    '<td class="quantite hidden" >'+ q +'</td>'+
                    '<td class="qte"><button id="reduce" class="btn btn-info btn-sm plusmoin btn-raised btn-circle"><em class="fa fa-minus"></em></button><span class="quantite"> '+ q +'&nbsp;</span><button id="addQ" class="btn btn-info btn-sm plusmoin btn-raised btn-circle"><em class="fa fa-plus"></em></button> </td>'+
                    '<td class="total">'+add.parent().parent().parent().find('.price-u').text()+'</td>'+
                    '<td class="prix hidden">'+add.parent().parent().parent().find('.price-u').text()+'</td>'+
                    
                   /* '<td><a href="#" id="remove_cart" class="remove_cart"><i class="fa fa-times"></i></a></td>'+*/
                '</tr>';

            $('tbody').prepend(tr)
            $.notify({
                    // Options
                    icon: 'fa fa-check-circle',
                    message: 'El producto se ha agregado correctamente ',

                },
                {
                    // settings
                    type: 'success',
                    offset: {
                        x: 10,
                        y: 60
                    },
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    }
                }
            );

            checked.parent().removeClass('hidden')
            checked.text('1')
        }else{
            //If the product is in the shopping cart, increments the quantity + the price of the product
            $('tbody').find('tr').each(function () {
                if(id_product==$(this).find('.id_produit').attr('id-data')){
                    $newq=parseInt($(this).find('.quantite').html())+1;
                    $newp=parseFloat($(this).find('.prix').html())*$newq;
                    $(this).find('.quantite').text(' '+ $newq +' ');
                    $(this).find('.total').text($newp.toFixed(2))
                    checked.text(parseInt(checked.html())+1);
                }
            })
        }
        //Calculate the total
        var total=0;
        $('tbody').find('tr').each(function () {
            total=total+parseFloat($(this).find('.total').html())
        })
        $('#price').text(total.toFixed(2));
        $('#cant_item').text("$ "+ total.toFixed(2));


    })

    //remove product
    $('table').on('click','.remove_cart', function (e) {
        e.preventDefault();
        var remove=$(this);
        //Retrieve the product ID 
        var id_product_delete_rp=remove.parents('tr').find('.id_produit').attr('id-data');
        //Modal box appears to confirm the removal of the product
        bootbox.confirm("Estas Seguro?",function (result) {       
            if(result){
                //If YES, delete the product from the shopping cart and calculate the new total
                if($.inArray(id_product_delete_rp,tab_panier)>=0){
                    _.remove(tab_panier, function (n) {
                        return n==id_product_delete_rp;
                    })
                    $newtotal_rp=parseFloat($('#price').html())-parseFloat(remove.parent().parent().find('.total').html());
                    $('#price').text($newtotal_rp.toFixed(2));
                    $('#cant_item').text($newtotal_rp.toFixed(2));
                    $('#products').find('.info').each(function () {
                        if(id_product_delete_rp==$(this).find('.add').attr('id-data')){
                            $(this).find('#nbr-check').text('')
                            $(this).find('#checked').addClass('hidden')
                        }
                    })
                    remove.parents('tr').hide('slow', function(){ remove.parents('tr').remove(); });
                }
                else{
                    bootbox.alert("Imposible de remover el Producto!!!")
                }
            }
            else{
                console.log("annulation")
                }          
        })
    })

    //Add quantity
    $('table').on('click','#addQ', function (e) {
        e.preventDefault();
        var add=$(this); 
        //Retrieve the product ID    

        $newtotalproduct=parseFloat(add.parent().parent().find('.total').html())+parseFloat(add.parent().parent().find('.prix').html());
        $newalltotal=parseFloat(add.parent().parent().find('.prix').html())+parseFloat($('#price').html());
        var calculo = parseInt(add.parent().parent().find('.quantite').html())+1;
        add.parent().parent().find('.quantite').text(' '+ calculo +' ');
        add.parent().parent().find('.total').text($newtotalproduct.toFixed(2));
        $('#price').text($newalltotal.toFixed(2));
        $('#cant_item').text("$ "+ $newalltotal.toFixed(2));
        var category = add.parent().parent().find('.id_category').attr('data-category');
        var strId="";
        if (category=='Comiditas'){
            strId="#productsComiditas"
        }
        if (category=='Juguetes Didacticos'){
            strId="#productsDidacticos"
        }
        if (category=='Muñecos'){
            strId="#productsMuñecos"
        }

        $(strId).find('.info').each(function () {
            
            if(add.parent().parent().find('.id_produit').attr('id-data')==$(this).find('.add').attr('id-data')){
                $(this).find('#nbr-check').text(parseInt($(this).find('#nbr-check').html())+1 )
            }
        })

    })
    //reduce quantity
    $('table').on('click','#reduce', function (e) {
        e.preventDefault();
        var reduce=$(this);
        var t=0;
        $total=parseFloat(reduce.parent().parent().find('.total').html());
        $newalltotal=parseFloat(reduce.parent().parent().find('.total').html())-parseFloat(reduce.parent().parent().find('.prix').html());
        //Retrieve the product ID 
        var id_product_delete=reduce.parent().parent().find('.id_produit').attr('id-data');
        var new_quantity=parseInt(reduce.parent().parent().find('.quantite').html())-1;
        var category = reduce.parent().parent().find('.id_category').attr('data-category');
        

        if(new_quantity<=0){
            bootbox.setLocale('es');
            bootbox.confirm("Se quitará el producto, ¿Estás seguro?", function (r) {
               
                if(r){

                    if($.inArray(id_product_delete,tab_panier)>=0){
                        _.remove(tab_panier, function (n) {
                            return n==id_product_delete;
                        })
                        reduce.parents('tr').hide('slow', function(){ reduce.parents('tr').remove(); });

                        $new_total_all_products=parseFloat($('#price').html())-$total;
                        if($new_total_all_products<=0){
                            
                            $('#price').text('0');
                            $('#cant_item').text("$ "+ '0');
                        }else{
                            $('#price').text($new_total_all_products.toFixed(2))
                            $('#cant_item').text("$" + $new_total_all_products.toFixed(2))
                        }

                        var strId="";

                        if (category=='Comiditas'){
                            strId="#productsComiditas"
                        }
                        if (category=='Juguetes Didacticos'){
                            strId="#productsDidacticos"
                        }
                        if (category=='Muñecos'){
                            strId="#productsMuñecos"
                        }

                        $(strId).find('.info').each(function () {
                            if(id_product_delete==$(this).find('.add').attr('id-data')){
                                $(this).find('#nbr-check').text('0')
                                $(this).find('#checked').addClass('hidden')
                            }
                        })
                    }

                }
            })
        }else{
            var strId="";

                        if (category=='Comiditas'){
                            strId="#productsComiditas"
                        }
                        if (category=='Juguetes Didacticos'){
                            strId="#productsDidacticos"
                        }
                        if (category=='Muñecos'){
                            strId="#productsMuñecos"
                        }


            $(strId).find('.info').each(function () {
                if(id_product_delete==$(this).find('.add').attr('id-data')){
                    $(this).find('#nbr-check').text(parseInt($(this).find('#nbr-check').html())-1)
                }
            })
            reduce.parent().parent().find('.total').text($newalltotal.toFixed(2));
            reduce.parent().parent().find('.quantite').text(' '+new_quantity+' ');
            $('tbody').find('tr').each(function () {
                t=t+parseFloat($(this).find('.total').html())
            })
            $('#price').text(t.toFixed(2));
            $('#cant_item').text("$" + t.toFixed(2));
            t=0;
        }
    })
  /***********************************************************************************/  
  /***********************************************************************************/
  /*================================ Search product =================================*/
  /***********************************************************************************/  
  /***********************************************************************************/  
    var content=$('.mas');
    content.masonry({
        // options
        itemSelector: '.col-md-3',
        //columnWidth: '.col-md-4',
        //percentPosition: true
    });    

    $('#search').keyup(function(e) {
        e.preventDefault();
        var val=$(this).val();
        if(val ==''){
            $('.filter span').removeClass('highlighted');
            
        } 
        var regexp='\\b(.*)';
        for(var i in val){
            regexp+='('+val[i]+')(.*)';
        }
        regexp+='\\b';
       
        $('.filter').show();
        content.masonry('reloadItems');
        content.masonry('layout');

        $('.filter').find('h4>span').each(function () {
            var span=$(this);
            var resultat=span.text().match(new RegExp(regexp,'i'));
            if(resultat){
                var string='';
                for(var i in resultat){
                    if(i>0){
                        if(i%2==0){
                            string+='<span class="highlighted">'+resultat[i]+'</span>';
                        }else{
                            string += resultat[i];
                        }
                    }
                }
                span.empty().append(string);
            }else{
                span.parent().parent().parent().parent().parent().parent().hide().fadeOut();
                content.masonry('reloadItems');
                content.masonry('layout');
                return

            }


        })                         
    });

    $('.reset').click(function (e) {
        e.preventDefault();
        $('.filter').find('span').each(function () {
            $('span').removeClass('highlighted');
        })
        $('.filter').show();
        content.masonry('reloadItems');
        content.masonry('layout');
        console.log($('#search').val())
        if($('#search').val()!="")
            $('#search').val("")
    })

})


