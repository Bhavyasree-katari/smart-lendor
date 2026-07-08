document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        const applicantIncome = parseFloat(document.getElementsByName("ApplicantIncome")[0].value);
        const coApplicantIncome = parseFloat(document.getElementsByName("CoapplicantIncome")[0].value);
        const loanAmount = parseFloat(document.getElementsByName("LoanAmount")[0].value);
        const loanTerm = parseFloat(document.getElementsByName("Loan_Amount_Term")[0].value);

        if (applicantIncome < 0 ||
            coApplicantIncome < 0 ||
            loanAmount <= 0 ||
            loanTerm <= 0) {

            alert("Please enter valid positive values.");

            e.preventDefault();

            return;
        }

    });

});