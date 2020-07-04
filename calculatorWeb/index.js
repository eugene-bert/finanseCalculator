$(document).ready(function(){
    $.ajax({
        url:"http://localhost:5000/financeCalculator",
        dataType:"text",
        success:function(data)
        {
            let cdnData = data;
            let results = Papa.parse(cdnData);
            console.log(results)
        }
    });
});
