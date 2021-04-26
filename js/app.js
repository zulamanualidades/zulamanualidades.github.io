
function percentage(num, per)
{
  return (num/100)*per;
}

function loadProduct(arr,strId,strLabel){
//https://beautifytools.com/excel-to-json-converter.php excel to json

    var i = 0;
    arrLen = arr.length - 1,
    str = "";
    var strClass = "";
    
    for (; i <= arrLen; i++ ) {
     
        let floatNumber = parseFloat(arr[i].price);
        let precio = floatNumber - percentage(floatNumber,arr[i].discount);
        
    
    if(arr[i].discount == "0"){
      strClass = "";     
      arr[i].price = "";
      arr[i].discount = "";
    } else {
       strClass = "tachado";
       arr[i].price = "$&nbsp;"+arr[i].price;
       arr[i].discount= arr[i].discount+"%&nbsp;OFF";
    }
    str = str + 
    
    '<div class="col-xs-6 col-md-3">'
    +' <div class="thumbnail" style="border: 0px" >'
    +'  <div class="ribbon"><span>'+arr[i].discount +'</span></div>'
    +'     <img src="'+ arr[i].image_link+'" class="img-responsive" alt="'+arr[i].title+'" >'
    +'     <button class="btn btn-link hidden-sm detail btn-block" data-toggle="modal" data-target="#'+arr[i].id+'"><i class="fa fa-list"></i> Ver Detalle</button>'
    +'     <div class="info">'
    +'         <div>'
    +'         <h5 class="name_product titleProduct"><span>'+arr[i].title+'</span></h5>'
    +'         <h5 class='+ strClass+'>'+arr[i].price+'&nbsp</h5>'    
    +'         <h5 class="price-text-color price-u">$&nbsp;'+parseFloat(precio).toFixed(2)+'</h5>'
    +'         </div>'
    +'       <button class="btn btn-secondary hidden-sm add btn-block" data-title="'+ arr[i].title +'" data-price='+parseFloat(precio).toFixed(2)+' id-data="'+arr[i].id+'" data-category="'+arr[i].category+'"><i class="fa fa-shopping-cart"></i> Agregar</button>'
    +'      </div>'
    +'   </div>'
    +'   <div class="clearfix"></div>'
    +' </div>'
    
    +'<div class="modal fade" id="'+arr[i].id+'" tabindex="-1" role="document" aria-labelledby="basicModal" aria-hidden="true">'
    +'        <div class="modal-dialog modal-fullscreen-sm-down ">'
    +'          <div class="modal-content">'
    +'            <div class="modal-header">'
    +'              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
    +'              <h4 class="modal-title" id="myModalLabel">'+arr[i].title+'</h4>'
    +'            </div>'
    +'            <div class="modal-body">'
    +'     <img src="'+ arr[i].image_link+'" class="img-responsive" alt="'+arr[i].title+'" >'
    +'         <h5 class="price-text-color price-u">$&nbsp;'+parseFloat(precio).toFixed(2)+'</h5>'
    +'             <button data-dismiss="modal" class="btn btn-secondary hidden-sm add btn-block" data-title="'+arr[i].title+'" data-price='+parseFloat(precio).toFixed(2)+' id-data="'+arr[i].id+'" data-category="'+arr[i].category+'"><i class="fa fa-shopping-cart"></i> Agregar </button>'
    +'             <pre>'+arr[i].description+'</pre>'
    +'            </div>'
    +'            <div class="modal-footer">'
    +'               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>'
    +'            </div>'
    +'          </div>'
    +'        </div>'
    +'      </div>';
    };
    
    var strCatgory = '<h2 style="margin-left: 15px;" id="'+strId+'">'+ strLabel +' ('+i+')</h2>'
    
    return strCatgory+str;
}


function loadAll(){

    $("#productsDidacticos").html(loadProduct(arrDidacticos,"didacticos","Juguetes Didácticos"));
    $("#productsComiditas").html(loadProduct(arrComiditas,"comiditas","Comiditas de Tela"));
    $("#productsMuñecos").html(loadProduct(arrMuñecos,"munecos","Muñec@s"));
}

function getData() {
    var str="";
    var total=0;

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

  var str= getData();
  if (str==""){
      bootbox.alert("Pedido Vacío");
      return;
  }
  wppNumber = '1156697764';
  link =
    "https://api.whatsapp.com/send?phone=549" +
    wppNumber +
    "&text=¡Hola! Te quiero hacer un pedido%0a";
 
  link += str;
  window.open(link);
    
  }

$(document).ready(function () {
    
    loadAll();

    var url = window.location.href;
    var modalToOpen = url.substring(url.indexOf("#"));
    
    //alert (modalToOpen);
    //alert (window.location.href.indexOf(modalToOpen));

    if(window.location.href.indexOf(modalToOpen) != 0) {
        if (modalToOpen != "#comiditas" && modalToOpen != "#didacticos" && modalToOpen != "#munecos" ) {
            $(modalToOpen).modal("show");
        }
        
    }

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
        var price = add.attr('data-price');
        var title= add.attr('data-title');

        //alert($(this).find('#nbr-check'));

        //Retrieve the number of times is the selected product
        var checked=add.parent().parent().parent().find('#nbr-check');
        
        //Check if the product is already in the shopping cart
       
          $('#pedido_panel').collapse("show");

        

        if($.inArray(id_product,tab_panier)==-1){
            // If the product does not exist in the shopping cart, than add it to the shopping cart
            tab_panier.push(id_product);

           // alert(add.parent().parent().parent().find('.price-u').text());
            
            var price_modif = add.parent().parent().parent().find('.price-u').text().substring(2);
            var name = add.parent().parent().parent().find('.name_product').text();
            
           // $('.pedido_panel').collapse('toggle');

          

           var q=1;
           var tr=
                '<tr id="ligne">' +
                    '<td class="id_produit hidden" id-data="'+ id_product +'" ></td> '+
                    '<td class="id_category hidden" data-category="'+ category +'" ></td> '+
                    '<td class="nom">'+title+'</td>'+
                    '<td class="quantite hidden" >'+ q +'</td>'+
                    '<td class="qte"><button id="reduce" class="btn btn-info btn-sm plusmoin btn-raised btn-circle"><em class="fa fa-minus"></em></button><span class="quantite"> '+ q +'&nbsp;</span><button id="addQ" class="btn btn-info btn-sm plusmoin btn-raised btn-circle"><em class="fa fa-plus"></em></button> </td>'+
                    '<td class="total">'+price+'</td>'+
                    '<td class="prix hidden">'+price+'</td>'+
                    
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

            checked.parent().removeClass('hidden');
            checked.text('1');
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
        var strId="#products"+category;

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

                        var strId="#products"+category;
                        
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
             var strId="#products"+category;
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


