function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        paye = grossSalary * 0.30;
    } else if (grossSalary <= 800000) {
        paye = grossSalary * 0.325;
    } else {
        paye = grossSalary * 0.35;
    }

    // Apply personal relief of Ksh 2,400
    paye -= 2400;

    // NHIF Deduction
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // NSSF Deduction
    let nssf;
    if (grossSalary <= 7000) {
        nssf = grossSalary * 0.06; // Tier I only
    } else {
        nssf = 7000 * 0.06 + (grossSalary - 7000) * 0.06; // Tier I + Tier II
    }

    // Net Salary Calculation
    const netSalary = grossSalary - paye - nhif - nssf;
    return netSalary;
}




// KRA
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Calculation based on KRA Tax Bands (2024)
    function calculatePayee(grossSalary) {
        let payee;
        if (grossSalary <= 24000) {
            payee = grossSalary * 0.1; // 10% for income up to 24,000
        } else if (grossSalary <= 32333) {
            payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% for income between 24,001 and 32,333
        } else if (grossSalary <= 500000) {
            payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30; // 30% for income above 32,334
        } else if (grossSalary <= 800000) {
            payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325; // 32.5%
        } else {
            payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // 35%
        }
        return payee - 2400; // Applying personal relief of Ksh 2,400
    }

    // NHIF Deductions
    function calculateNhif(grossSalary) {
        if (grossSalary <= 5999) return 150;
        else if (grossSalary <= 7999) return 300;
        else if (grossSalary <= 11999) return 400;
        else if (grossSalary <= 14999) return 500;
        else if (grossSalary <= 19999) return 600;
        else if (grossSalary <= 24999) return 750;
        else if (grossSalary <= 29999) return 850;
        else if (grossSalary <= 34999) return 900;
        else if (grossSalary <= 39999) return 950;
        else if (grossSalary <= 44999) return 1000;
        else if (grossSalary <= 49999) return 1100;
        else if (grossSalary <= 59999) return 1200;
        else if (grossSalary <= 69999) return 1300;
        else if (grossSalary <= 79999) return 1400;
        else if (grossSalary <= 89999) return 1500;
        else if (grossSalary <= 99999) return 1600;
        else return 1700; // For salaries above 100,000
    }

    // NSSF Deductions (6% of gross salary)
    function calculateNssf(grossSalary) {
        let nssf;
        if (grossSalary <= 7000) {
            nssf = grossSalary * 0.06; // Tier I only
        } else {
            nssf = 7000 * 0.06 + (grossSalary - 7000) * 0.06; // Tier I + Tier II
        }
        return nssf;
    }

    // Calculate PAYE, NHIF, NSSF
    const payee = calculatePayee(grossSalary);
    const nhifDeduction = calculateNhif(grossSalary);
    const nssfDeduction = calculateNssf(grossSalary);

    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    // Output results
    console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE (Tax): ${payee}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Net Salary: ${netSalary}`);

}

calculateNetSalary(50000, 10000); // Change inputs to test with different salaries