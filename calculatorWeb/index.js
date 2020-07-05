//getInputsData
function trackTaxSystem() {
    $('#taxSystem').change(function() {
        //devCode
        console.log($(this).val());
    });
}

function trackLegalEntity() {
    $('#legalEntity').change(function() {
        //devCode
        console.log($(this).val());
    });
}

function trackEmployeeNumber() {
    $('#employeeNumber').keyup(function() {
        //devCode
        console.log($(this).val());
    });
}

function trackBusinessTransactionsData() {
    $('#businessTransactions').keyup(function() {
        //devCode
        console.log($(this).val());
    });
}

//getAmountArray
function getAmountArray() {
    let inputData = [
        $('#taxSystem').val(),
        $('#legalEntity').val(),
        $('#employeeNumber').val(),
        $('#businessTransactions').val()
    ]

    return inputData
}

function getBusinessTransactionsAmount() {
    switch (true) {
        case getAmountArray()[3]<=5:
            return 0
        case getAmountArray()[3]<=10:
            return 1
        case getAmountArray()[3]<=15:
            return 2
        case getAmountArray()[3]<=20:
            return 3
        case getAmountArray()[3]<=25:
            return 4
        case getAmountArray()[3]<=30:
            return 5
        case getAmountArray()[3]<=35:
            return 6
        case getAmountArray()[3]<=40:
            return 7
        case getAmountArray()[3]<=45:
            return 8
        case getAmountArray()[3]<=50:
            return 9
        case getAmountArray()[3]<=55:
            return 10
        case getAmountArray()[3]<=60:
            return 11
        case getAmountArray()[3]<=65:
            return 12
        case getAmountArray()[3]<=70:
            return 13
        case getAmountArray()[3]<=75:
            return 14
        case getAmountArray()[3]<=80:
            return 15
        case getAmountArray()[3]<=85:
            return 16
        case getAmountArray()[3]<=90:
            return 17
        case getAmountArray()[3]<=95:
            return 18
        case getAmountArray()[3]<=100:
            return 19
    }
}

//transformCsvData
$( document ).ajaxComplete(function(){
    console.log(dataResult)

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

    console.log(resultArray)
})


//calcAmount
function calcAmount() {
    getAmountArray();

}

//dev-code
