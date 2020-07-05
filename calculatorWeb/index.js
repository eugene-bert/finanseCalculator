//loadingHandler

// (function loadingHandler() {
//     if (loading) return  $('.calcBox-page').addClass('loading')
//     if (loading = false) return $('.calcBox-page').removeClass('loading')
// })();

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

//getAmountArray
function getInputData() {
    let inputData = [
        $('#taxSystem').val(),
        $('#legalEntity').val(),
        $('#employeeNumber').val(),
        getBusinessTransactionsAmount($('#businessTransactions').val())
    ]

    return inputData
}
