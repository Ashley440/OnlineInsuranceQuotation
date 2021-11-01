//Variables
const form = document.getElementById('request-quote');
const html = new HTMLUI();



//Event listiner
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', function () {
        //Create the <option> for the years

        html.displayYears();
    });

    //When the form is submitted

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Read values from the form
        const make = document.getElementById('make').value;

        const year = document.getElementById('year').value;

        // Read the radio buttons
        const level = document.querySelector('input[name="level"]:checked').value;



        //Check if all fields are selected.
        if (make === '' || year === '' || level == '') {
            html.displayError('All fields need to be filled');
        }
        else {
            //Clear the previous quotes
            const prevResult = document.querySelector('#result div');
            if (prevResult != null) {
                prevResult.remove();
            }

            //Make quotation
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);

            //Print the results of this quotation in the html
            html.showResults(price, insurance);
        }

    });

}

