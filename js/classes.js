

//classes

//Everything related to the quatation and calculations
class Insurance {

    constructor(make, year, level) {
        this.make = make;
        this.year = year;
        this.level = level;
    }

    calculateQuotation(insurance) {
            let price;
            const base = 2000;
            //get the make
            const make = insurance.make;
            /*
             * 1 = America 1.15
             * 2 = Asian 1.05
             * 3 = European 1.35
             */
            switch (make) {
                case '1':
                    price = base * 1.15;
                    break;
                case '2':
                    price = base * 1.05;
                    break;
                case '3':
                    price = base * 1.35;
                    break;
            }
            //get the year
            const year = insurance.year;
            const difference = this.getYearDifference(year);

            price = price - ((difference * 3) * price) / 100;

            //check the level of protection
            const level = insurance.level;
            price = this.calculateLevel(price, level);
            return price;

    }
    getYearDifference(year) {
        //'change this back to new Date().getFullYear()'
        return (new Date().getFullYear() - year);
    }
    // Adds the value based on the level of protection
    calculateLevel(prices, levels) {
        /*
            Basic insurance is going to increase the value by 30% or 1.3
            Complete insurance is going to increase the value by 50% or 1.5
         */
        if (levels === "basic") {
            prices = prices * 1.3;
        } else {
            prices = prices * 1.5;
        }
        return prices;

    }


}
//Calculate the price of the curent quotation

//Returns difference between years

//Everything related to the HTML 
class HTMLUI {
    constructor() {
        
    }

    displayYears() {
        //Max and Min years 'change this back to new Date().getFullYear()'
        const max = new Date().getFullYear(),
            min = max - 20;
        //Generate the years to select
        const selectYears = document.getElementById('year');

        //Print the values
        for (let i = max; i >= min; i--) {
            const options = document.createElement('option');
            options.value = i;
            options.textContent = i;
            selectYears.appendChild(options);
        }
    }
    // Prints an error

    displayError(message) {
        //create a div element
        const div = document.createElement('div');
        div.classList = 'error';
        //Insert a message
        div.innerHTML = message;
        form.insertBefore(div, document.querySelector('.form-group'));

        //Remove the error after 2 seconds

        setTimeout(function () {
            document.querySelector('.error').remove();
        }, 2000);
    }
    //Prints the results to the HTMLUI
    showResults(price, insurance) {
        //Print the results
        const result = document.getElementById('result');

        //Create the div with the result
        const div = document.createElement('div');

        //Get the make of the quote.
        let make = insurance.make;

        switch (make) {
            case '1':
                make = 'American';
                break;
            case '2':
                make = 'Asian';
                break;
            case '3':
                make = 'European';
                break;

        }
        //Insert results to the section
        //div.innerHTML = 'Total: $' + price;
        div.innerHTML = `
        <p class="header">Summary</p>
        <p>Make :${make}</p>
        <p>Year :${insurance.year}</p>
        <p>Level :${insurance.level}</p>
        <p class="total">Total :$ ${price}</p>

    `;
        const spinner = document.querySelector('#loading img');
        spinner.style.display = 'block';
        setTimeout(function () {
            spinner.style.display = 'none';
            //Insert this into the document
            result.appendChild(div);
        }, 3000);

    }

}

// Display the latest 20 years in the select


