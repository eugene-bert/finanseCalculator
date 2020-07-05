//getCsvData
let dataResult
function getCsvData() {
    $.ajax({
        url:"http://localhost:5000/financeCalculator",
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
