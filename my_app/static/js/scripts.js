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
        
        var itemPlastic=int(amount*item.val()*365/timespan);
        
        $('#loggedPlastic tr:last').before('<tr><td>'+item.text()+'</td><td>'+itemPlastic+'</tr>')
        var totalPlastic=1.0*itemPlastic+1.0*$('#totalPlastic').val();
        $('#totalPlastic').val(totalPlastic);
        $('#tableTotal').html(totalPlastic);
    })
});