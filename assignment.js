// -> Kilometer to Meter converter

function kilometerToMeter(kilometer) {
    if (kilometer < 1) {
        return "Please enter a valid number";
    }
    else {
        return kilometer * 1000; // The result
    }
}

kilometerToMeter(); // Enter kilometer to get value in meter



// -> Watch, Mobile and Laptop total price teller

function budgetCalculator(watch, mobile, laptop) {

    let total = 0;
    let watchPrice = 50 * watch; // Price * Number = Total watch Price
    let mobilePrice = 100 * mobile; // Price * Number = Total mobile price
    let laptopPrice = 500 * laptop; // Price * Number = Total laptop price

    total = watchPrice + mobilePrice + laptopPrice;
    if (watch < 1 || mobile < 1 || laptop < 1) {
        return "Please enter a Positive number"
    }
    else {
        return total;
    }
}

budgetCalculator(); // Enter 3 numbers of watch, mobile and laptop



//-> Now Home Rent calculator is being made

function hotelCost(days) {

    let rent = 0;
    if (days < 1) {
        return "Please enter a Positive number"
    }
    else if (days <= 10) {
        rent = days * 100;
    }
    else if (days <= 20) {
        let firstTenRent = 10 * 100; //Rent of first 10 days
        let remainingDays = days - 10;
        let lastRent = remainingDays * 80; //Rent of remaining days
        rent = firstTenRent + lastRent;
    }
    else {
        let firstTenRent = 10 * 100; //Rent of first 10 days
        let secondRent = 10 * 80; //Rent of second 10 days
        let remainingDays = days - 20;
        let lastRent = remainingDays * 50; //Rent of remaining days
        rent = firstTenRent + secondRent + lastRent;
    }
    return rent;
}

hotelCost(); // Enter days number to see the total rent



// -> Finding longest string in an array

function megaFriend(arr) {

    if (arr.length < 2) {
        return "Please enter a valid array";
    }
    else {
        let largest = arr[0];

        for (var i = 0; i < arr.length; i++) {
            var elements = arr[i];
            if (elements.length > largest.length) {
                largest = elements;
            }
        }
        return largest;
    }
}

megaFriend(); // Enter an array and get the longest string

