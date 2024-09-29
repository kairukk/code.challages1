//console.log(taxRates);

//Faction to calculate deductions and net salary
function calculateNetSalary(basicSalary,benefits) {
    //constant deductions
    const NHIFRates = [
        {max:599, deduction: 150},
         {max:7999, deduction:300},
        {max:11999, deduction:400},
    {max:14999, deduction:500},
{max:19999, deduction:600},
{max:24999, deduction:750},
{max:29999, deduction:850}, 
{max:34999, deduction:900},
{max:39999, deduction: 950},
{max:44999, deduction: 1000}
{max:49999, deduction:1100},
{max:59999, deduction:1200},
{max:69999, deduction:1300},
{max:79999, deduction:1400},
{max:89999, deduction:1500},
{max:9999, deduction:1600},
{deduction:1700} //for 100,000 and above
];
}

const NSSFContribution = (salary) => {
    if (salary <= 7000) return salary *0.06; //tier I
    if (salary <= 36000) return 420; // Tier II flat the rate
    return 420; //For Salalies above Tier II cap
}
















function calculateNetSalary(basicSalary,benefits) {
    return {
        grossSalary: grossSalary.toFixed(2),
        paye: paye.toFixed(2),
        nhifDeduction: nhifDeduction.toFixed(2),
        nssfDeduction: nssfDeduction.toFixed(2),
        netSalary: netSalary.toFixed
    };
}

//example input
const BasicSalary =parseFloat(`1500`);
const benefits = parseFloat(`2100` );

//calclate the display results
const result = calculateNetSalary(basicSalary,benefits);
console.log("Gross Salary", result.grossSalary);
console.log("PAYE Tax:Ksh", result.paye);
console.log("NHIF Deductions: Ksh", result.nhifDeduction);
console.log("NSSF Deductions: Ksh", result.nssfDeduction);
console.log("Net Salary", result.netSalary);








function calculateNetSalary(basicSalary,benefits) {

    if (taxableIncome <= 288000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 38800) {
        paye =28800 + (taxableIncome -288000) * 0.25;
    } else if (taxableIncome <=    6000000) {
        paye =(28800 + 25000 +(taxableIncome -6000000)* 0.3)
    }
}else if (taxableIncome <=    6000000) {
    paye =(28800 + 25000 + 633600 +(taxableIncome -9600000)* 0.323)