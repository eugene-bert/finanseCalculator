console.log('test')

$(document).ready(function(){
    $.ajax({
        url:"http://localhost:5000/financeCalculator",
        dataType:"text",
        success:function(data)
        {
            console.log(data)
        }
    });
});
