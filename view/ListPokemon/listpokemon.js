$(document).ready(function(){

    filtrartodo();

    $.ajax({
        url:"../../controller/pokemon.php?op=tipo",
        dataType:"html",
        success:function(data){
            $("#listtipo").html(data);

            $(".filtrodetalle").click(function () {
                filtrartodo();
            });

        }
    })

    $("#txtnombre").on("input", function(){
        filtrartodo();
    });

    var slider = new Slider("#txtataque", {});
    var initialValue = $("#txtataque").data("slider-value");
    $("#sliderValue").text(initialValue);
    $("#txtataque").on("change", function(slideEvt) {
        $("#sliderValue").text(slideEvt.value.newValue);
        filtrartodo();
    });

    var slider = new Slider("#txtdefensa", {});
    var initialValue2 = $("#txtdefensa").data("slider-value");
    $("#sliderValue2").text(initialValue2);
    $("#txtdefensa").on("change", function(slideEvt) {
        $("#sliderValue2").text(slideEvt.value.newValue);
        filtrartodo();
    });

});

function filtrartodo(){
    var tipo = getCheckedValue("tipos");
    var nombre = $("#txtnombre").val();
    var attack =  $("#txtataque").val();

    var defense = $("#txtdefensa").val();
    console.log(defense);

    $.ajax({
        url:"../../controller/pokemon.php?op=listar",
        method: "POST",
        dataType:"html",
        data:{
            tipo:tipo,
            nombre:nombre,
            attack:attack,
            defense:defense
        },
        success:function(data){
            $("#listpokemon").html(data);
        }
    })
}

function getCheckedValue(name){
    var array = [];
    $("input[name='"+ name +"']").each(function(){
        if($(this).is(':checked')){
            array.push($(this).val());
        }
    });
    return array;
}



