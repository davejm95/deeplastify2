$(function(){
    $('#cat1').show();
    $('#cat').val(1);
    $("#cat").change(function () {
        var selected = $("#cat option:selected").val();
        $('.items-cat').hide();
        $('#cat' + selected).show();

    });        
    $(".items-cat").change(function () {
            var time2 = $(this).find("option:selected").attr("data-time");
            console.log($(this).find("option:selected").attr("data-time"))
            $('#time').val(time2)

    })
    $('#addbtn').click(function(){
        var timespan=$('#time option:selected').val();
        var selectedCat = $("#cat option:selected").val();
        
        var item=$('#cat'+selectedCat+' option:selected');
        var amount=$('#amount').val();
        
        var itemPlastic=amount*item.val()*365/timespan;
        
        $('#loggedPlastic tr:last').before('<tr><td>'+item.text()+'</td><td>'+itemPlastic+'</tr>')
        if (typeof window.totalPlastic=='undefined'){
            window.totalPlastic=0;
        }
        window.totalPlastic=window.totalPlastic+itemPlastic;
        $('#totalPlastic').val(totalPlastic.toFixed(0));
        $('#tableTotal').html(totalPlastic.toFixed(0));
    })
});