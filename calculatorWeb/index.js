$( document ).ajaxComplete(function(){
    console.log(dataResult)

    let parameter3 = dataResult.data.map(data => data.option3),
        parameter4 = dataResult.data.map(data => data.option4),
        parameter5 = dataResult.data.map(data => data.option5),
        parameter6 = dataResult.data.map(data => data.option6),
        parameter7 = dataResult.data.map(data => data.option7),
        parameter8 = dataResult.data.map(data => data.option8),
        parameter9 = dataResult.data.map(data => data.option9)


    console.log(parameter3)
})

//getInputsData
function getBusinessTransactionsData() {
    $('#businessTransactions').keyup(function() {
        console.log($(this).val());
    });
}

function getEmployeeNumber() {
    $('#employeeNumber').keyup(function() {
        console.log($(this).val());
    });
}

function getTaxSystem() {
    $('#taxSystem').change(function() {
        console.log($(this).val());
    });
}


function getLegalEntity() {
    $('#legalEntity').change(function() {
        console.log($(this).val());
    });
}


getBusinessTransactionsData()

getEmployeeNumber()

getTaxSystem()

getLegalEntity()

//calculateData function
