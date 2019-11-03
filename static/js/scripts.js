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
        var blog=item.attr('data-blog');
        if (blog==''){
            var storybtn='';
        }
        else{
            var storybtn='<button type="button" class="btn btn-outline-success" data-toggle="popover" title="Pro tip" data-content="'+blog+'">Read Story</button>'
        }
        $('#loggedPlastic tr:first').after('<tr><td>'+item.text()+'</td><td>'+Math.round(itemPlastic)+'g &nbsp;&nbsp;&nbsp; '+storybtn+' </tr>')
        $('[data-toggle="popover"]').popover()
        
        totalPlastic=totalPlastic+parseFloat(itemPlastic);
        $('#totalPlastic').val(Math.round(totalPlastic));
        $('#tableTotal').html((totalPlastic/1000).toFixed(2));
    })

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});