
$(document).ready(function() {

    function createTable(){
        mytable = $('<table></table>').attr({ id: "basicTable" });
        
        do{
            var $input = parseInt(window.prompt("Enter a number from 1 to 64", "32"), 10);
        } while(isNaN($input) || $input > 64 || $input < 2);
        
        var tr = [];
        
        for (var i = 0; i < $input; i++) {
            var row = $('<tr></tr>').appendTo(mytable);
            for (var j = 0; j < $input; j++) {
                $('<td class="square"></td>').appendTo(row); 
            }
        };
        
        console.log("TTTTT:"+mytable.html());
        
        mytable.appendTo("#table-wrapper");
        
        $('.square').mouseover(function() {
            $(this).css("background-color", "#545453");
        });
    };


    createTable();

    $('#opaque-button').click(function() {
        $('#basicTable').replaceWith(createTable());
        $('.square').css("background-color", "#545453");
        $('.square').css("opacity", 0);
        $('.square').mouseover(function(){
            var value = parseFloat($(this).css("opacity"));    
            if(value<1){
                value += 0.2;           
                $(this).css("opacity", value);
            }
        });
    });

    $('#dark-button').click(function() {
        $('#basicTable').replaceWith(createTable());
        $('.square').mouseover(function() {
            $(this).css("background-color", "#545453");
        });
    });

    $('#random-button').click(function() {
        $('#basicTable').replaceWith(createTable());
        $('.square').mouseover(function() {
            var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).css("background-color", hue);
        });
    });
});

