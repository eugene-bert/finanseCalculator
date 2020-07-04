//getCsvData
let dataResult
function getCsvData() {
    $.ajax({
        url:"http://localhost:5000/financeCalculator",
        // TODO: use this 'url' field  = to input backend response with .csv file
        dataType:"text",
        success:function(data)
        {
            dataResult = Papa.parse(data,
                {
                    header: true
                }
            );
            return dataResult
        }
    });
}

getCsvData()
