//csv file parsing functions
function getData() {
    return $.ajax({
        url:"http://localhost:5000/financeCalculator",
        dataType:"text",
        type: 'GET',
        async: false,
        success:async function(data, xhr, status)
        {
            console.log({"Status": status.status, "Message": status.statusText})
        },
        error:function(data) {
            $('#notification-status').append(`<p>Something went wrong. Data is not available. 
            Status: ${data.status} - ${data.statusText}</p>`)
        }
    }).responseText
}

function parseCsv(data) {
    return Papa.parse(data,
        {
            header: true
        }
    );
}

function formatData(csv){
    let parameter3 = csv.data.map(data => data.option3),
        parameter4 = csv.data.map(data => data.option4),
        parameter5 = csv.data.map(data => data.option5),
        parameter6 = csv.data.map(data => data.option6),
        parameter7 = csv.data.map(data => data.option7),
        parameter8 = csv.data.map(data => data.option8),
        parameter9 = csv.data.map(data => data.option9),
        removeFirstEl = [parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9]
            .map(data => data.splice(0, 1)),
        removeLastEl = [parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9]
            .map(data => data.splice(20, 1)),
        resultArray = [parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9]
        $('.calcBox-page').removeClass('loading')

    return [resultArray, removeLastEl]
}

//server data variable [regular amounts, amount per one thing]
let resultData = formatData(parseCsv(getData()))

//user action tracking functions
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

//BusinessTransactionsAmount handling function
function getBusinessTransactionsAmount(el) {
    switch (true) {
        case el<=5:
            return 0
        case el<=10:
            return 1
        case el<=15:
            return 2
        case el<=20:
            return 3
        case el<=25:
            return 4
        case el<=30:
            return 5
        case el<=35:
            return 6
        case el<=40:
            return 7
        case el<=45:
            return 8
        case el<=50:
            return 9
        case el<=55:
            return 10
        case el<=60:
            return 11
        case el<=65:
            return 12
        case el<=70:
            return 13
        case el<=75:
            return 14
        case el<=80:
            return 15
        case el<=85:
            return 16
        case el<=90:
            return 17
        case el<=95:
            return 18
        case el<=100:
            return 19
        case el>100:
            return 20
    }
}

//getInputData function
function getInputData() {
    let inputData = [
        $('#taxSystem').val(),
        $('#legalEntity').val(),
        $('#employeeNumber').val(),
        getBusinessTransactionsAmount($('#businessTransactions').val())
    ]

    return inputData
}


//devCode
console.log(resultData)
