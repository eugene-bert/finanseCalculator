//csv data file
let dataResult

//csv data file after parse
let dataParseResult

//getCsvData
(function getCsvData() {
    $.ajax({
        url:"http://localhost:5000/financeCalculator",
        dataType:"text",
        success:function(data, xhr, status)
        {
            dataResult = Papa.parse(data,
                {
                    header: true
                }
            );
            console.log({"Status": status.status, "Message": status.statusText})
            return dataResult
        },
        error:function(data){
            $('#notification-status').append(`<p>Something went wrong. Data is not available. 
            Status: ${data.status} - ${data.statusText}</p>`)
        },
    });
}());

//getDataParseResult
$( document ).ajaxComplete(function(){
    let parameter3 = dataResult.data.map(data => data.option3),
        parameter4 = dataResult.data.map(data => data.option4),
        parameter5 = dataResult.data.map(data => data.option5),
        parameter6 = dataResult.data.map(data => data.option6),
        parameter7 = dataResult.data.map(data => data.option7),
        parameter8 = dataResult.data.map(data => data.option8),
        parameter9 = dataResult.data.map(data => data.option9),
        removeFirstEl = [parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9]
            .map(data => data.splice(0, 1)),
        removeLastEl = [parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9]
            .map(data => data.splice(20, 1)),
        resultArray = [parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9]
    $('.calcBox-page').removeClass('loading')
    dataParseResult = [resultArray, removeLastEl]
    console.log([resultArray, removeLastEl])

    return dataParseResult
})
