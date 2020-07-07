//csv file parsing functions
function getData() {
    return $.ajax({
        url:"https://xn--80abaeqdocwye1bxez.su/csv/financeCalculator.csv",
        dataType:"text",
        type: 'GET',
        async: false,
        success:async function(data, xhr, status)
        {
            console.log({"Status": status.status, "Message": status.statusText})
        },
        error:function(data) {
            $('#notification-status').append
            (`    
            <p>Something went wrong. Data is not available.</p> 
            <p>Status: ${data.status} - ${data.statusText}.</p>
            <p>Please try to refresh a page</p>
             `)
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
        Number($('#legalEntity').val()),
        Number($('#taxSystem').val()),
        Number($('#employeeNumber').val()),
        getBusinessTransactionsAmount($('#businessTransactions').val())
    ]

    return inputData
}

let resultData = formatData(parseCsv(getData()))

function calculateResult() {
    let dataFromInput = getInputData(),
        before100 = resultData[0],
        after100 = resultData[1]

    function getArrayNumber() {
        switch (true) {
            case dataFromInput[1] === 4:
                return 3
            case dataFromInput[1] === 1:
                let firstResult
                if (dataFromInput[0] === 1) {
                    firstResult = 6
                } else if (dataFromInput[0] === 2) {
                    firstResult = 0
                }
                return firstResult
            case dataFromInput[1] === 2:
                let secondResult
                if (dataFromInput[0] === 1) {
                    secondResult = 4
                } else if (dataFromInput[0] === 2) {
                    secondResult = 1
                }
                return secondResult
            case dataFromInput[1] === 3:
                let thirdResult
                if (dataFromInput[0] === 1) {
                    thirdResult = 5
                } else if (dataFromInput[0] === 2) {
                    thirdResult = 2
                }
                return thirdResult
        }
    }

    function calcEmployeeNumber(n) {
        return n > 1  ? (n - 1) * 500 : 0
    }

    function checkIfQuarter() {
        return getArrayNumber() === 6 ? '/квартал' : '/месяц'
    }

    let arrayNumber = getArrayNumber(),
        amountArray = before100[arrayNumber],
        buissnessTeansactionsCase = dataFromInput[3],
        quarterText = checkIfQuarter()

    if (buissnessTeansactionsCase < 20 ) return `${Number(amountArray[buissnessTeansactionsCase].split(' ').join('')) + calcEmployeeNumber(dataFromInput[2])}  руб. ${quarterText}`
    if (buissnessTeansactionsCase === 20) {
        let firstArg = Number(amountArray[19].split(' ').join('')) + calcEmployeeNumber(dataFromInput[2]),
            transactionsArg = $('#businessTransactions').val(),
            secondArg = after100[arrayNumber] * (transactionsArg - 100)
        return `${firstArg} + ${secondArg} руб. ${quarterText}`
    }
}

function fillEmailInputs() {
    let taxText = $('#taxSystem option:selected').text(),
        entityText = $('#legalEntity option:selected').text(),
        employeeNumber = $('#employeeNumber').val(),
        businessTransactionsNumber = $('#businessTransactions').val()

    $('#calc-result').val(calculateResult())
    $('#calc-type').val(taxText)
    $('#calc-system').val(entityText)
    $('#calc-people').val(employeeNumber)
    $('#calc-operations').val(businessTransactionsNumber)
}

function checkMaxEmloyeeNumber() {
    if ($('#employeeNumber').val() > 100 ) {
        $('#employeeNumber').val(100)
        $('.valueNotification').text('Максимальное число сотрудников 100')
    } else {
        $('.valueNotification').text('')
    }
}


function trackInputChanges() {
    $(document).on('input', function() {
        checkMaxEmloyeeNumber()
        $('#calcBox-sum').text(`Сумма: ${calculateResult()}`)
        fillEmailInputs()
    });
}

//initialize calculator
fillEmailInputs()
$('#calcBox-sum').text(`Сумма: ${calculateResult()}`)

//track changes
trackInputChanges()
