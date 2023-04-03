var purchase2 = {
    shoe: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoe * this.stateTax;
        console.log('Total Price: ', calculation)
    }
}

purchase2.totalPrice();