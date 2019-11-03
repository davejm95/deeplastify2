var totalPlastic=0
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
            timespans=[0,1,7,30,365];
            console.log(timespans[parseInt(time2)])
            $('#time').val(timespans[parseInt(time2)]);

    })
    $('#addbtn').click(function(){
        var timespan=$('#time option:selected').val();
        var selectedCat = $("#cat option:selected").val();
        
        var item=$('#cat'+selectedCat+' option:selected');
        var amount=$('#amount').val();
        
        var itemPlastic=amount*item.val()*365/timespan;
        console.log(itemPlastic)
        
        $('#loggedPlastic tr:last').before('<tr><td>'+item.text()+'</td><td>'+Math.round(itemPlastic)+'g</tr>')

        
        totalPlastic=totalPlastic+parseFloat(itemPlastic);
        $('#totalPlastic').val(Math.round(totalPlastic));
        $('#tableTotal').html((totalPlastic/1000).toFixed(2));
    })
});