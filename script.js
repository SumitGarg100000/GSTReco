<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Fully updated free income tax calculator for FY 2024-25(AY 2025-26). Calculate tax liability instantly under both old and new regimes with comparison.">
    <meta name="keywords" content="income tax calculator FY 2024-25, income tax calculator AY 2025-26, tax calculator AY 2025-26, tax calculation, Sumit Garg tax calculator, sumit garg income tax calculator ay 2025-26, sumit tax calculator fy 2024-25">
    <!-- Allow indexing and link following (default behavior) -->
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta property="og:title" content="Income Tax Calculator FY 2024-25">
    <!-- Open Graph (Facebook/WhatsApp/LinkedIn) -->
    <meta property="og:image" content="https://sumitgarg100000.github.io/IncometaxCalculator/Image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Income Tax Calculator 2023-24 Preview">
    <meta name="google-site-verification" content="FR7D2qkpciz6QmllRnOJ7Mv6bbsFJ1CA6Qn7mYDkqwE" />
    <title>Income tax calculator</title>
    <!-- Add Font Awesome for WhatsApp icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* WhatsApp button styles */
      .whatsapp-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25d366;
        color: white;
        border-radius: 50%;
        padding: 25px;
        text-align: center;
        box-shadow: 0 0 20px 10px rgba(37, 211, 102, 0.1);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 100px;
        height: 100px;
        animation: glow 3s infinite;
        transition: all 0.3s ease;
      }

      /* Hover effect */
      .whatsapp-btn:hover {
        background-color: #128C7E;
        transform: scale(1.1);
        animation-play-state: paused;
      }

      /* WhatsApp icon */
      .whatsapp-btn i {
        font-size: 60px;
        transition: transform 0.3s ease;
      }

      /* Glowing animation */
      @keyframes glow {
        0% {
          box-shadow: 0 0 20px 0px rgba(37, 211, 102, 0.2);
          transform: scale(1);
        }

        50% {
          box-shadow: 0 0 40px 20px rgba(37, 211, 102, 0.1);
          transform: scale(1.05);
        }

        100% {
          box-shadow: 0 0 20px 0px rgba(37, 211, 102, 0.2);
          transform: scale(1);
        }
      }

      /* Additional sparkle effect */
      .whatsapp-btn::after {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0) 70%);
        animation: sparkle 3s infinite;
      }

      @keyframes sparkle {
        0% {
          opacity: 0.3;
          transform: scale(0.8);
        }

        50% {
          opacity: 0;
          transform: scale(1.5);
        }

        100% {
          opacity: 0.3;
          transform: scale(0.8);
        }
      }
    </style>
    <style>
      /* ======== Base Styles ======== */
      :root {
        --primary-color: #2C3E50;
        --secondary-color: #3498DB;
        --accent-color: #09D575;
        --text-light: #FFFFFF;
        --text-dark: #2C3E50;
        --table-header: #3498DB;
        --table-row-alt: #F8F9FA;
        --print-primary: #2C3E50;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        line-height: 1.6;
        background-color: #F8F9FA;
        color: var(--text-dark);
      }

      /* ======== Header Styles ======== */
      header {
        min-width: 800px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: var(--text-light);
        padding: 1.5rem 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      h1 {
        font-size: 2.25rem;
        margin-bottom: 0.75rem;
        font-weight: 600;
        letter-spacing: -0.5px;
      }

      .header-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      /* ======== Table Styles ======== */
      .table-container {
        max-width: 1200px;
        margin: 2rem auto;
        overflow-x: auto;
        background: var(--text-light);
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      }

      table {
        width: 100%;
        border-collapse: collapse;
        min-width: 800px;
      }

      th,
      td {
        padding: 1rem;
        text-align: left;
        border: 1px solid #E0E0E0;
        font-size: 0.9rem;
      }

      th {
        background-color: var(--table-header);
        color: var(--text-light);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
      }

      tr:nth-child(even) {
        background-color: #f9f9f9;
      }

      tr:nth-child(odd) {
        background-color: #ffffff;
      }

      tr:hover {
        background-color: #E8F4FD;
      }

      /* Make the header row sticky */
      tr.sticky-header {
        position: sticky;
        top: 0;
        background-color: green;
        color: white;
        z-index: 100;
        /* Ensure it stays above other content */
      }

      input[type="number"],
      input[type="text"] {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #DEE2E6;
        border-radius: 4px;
        font-size: 0.9rem;
      }

      /* ======== Button Styles ======== */
      .button-container {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin: 1rem 0;
      }

      .button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        background: var(--secondary-color);
        color: var(--text-light);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }

      .button:hover {
        background: var(--primary-color);
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
      }

      /* ======== Footer Styles ======== */
      footer {
        min-width: 800px;
        background: var(--primary-color);
        color: var(--text-light);
        padding: 1rem 1rem;
      }

      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
      }

      .footer-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 1rem 0;
        flex-wrap: wrap;
      }

      .footer-links a {
        color: var(--text-light);
        text-decoration: none;
        opacity: 0.9;
        transition: opacity 0.3s ease;
      }

      .footer-links a:hover {
        opacity: 1;
        text-decoration: underline;
      }

      /* ======== Print Styles ======== */
      @media print {
        .whatsapp-btn {
          display: none !important;
        }
      }

      /* Existing button styles */
      .whatsapp-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        /* ... rest of your existing styles ... */
      }

      @media print {
        @page {
          margin: 1cm;
          size: auto;
        }

        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
          background: var(--print-primary) !important;
          background: white !important;
          font-size: 12pt;
        }

        header,
        footer {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
          background: var(--print-primary) !important;
        }

        .button-container {
          display: none;
        }

        table {
          page-break-inside: avoid;
          break-inside: auto;
        }

        tr.page-break {
          page-break-before: always;
          /* Force break before this row */
        }

        th {
          background-color: var(--print-primary) !important;
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }

      /* ======== Responsive Design ======== */
      @media (max-width: 768px) {
        h1 {
          font-size: 1.75rem;
        }

        .table-container {
          margin: 1rem;
          border-radius: 8px;
        }

        th,
        td {
          padding: 0.75rem;
          font-size: 0.85rem;
        }

        .button {
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        h1 {
          font-size: 1.5rem;
        }

        .footer-links {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    </style>
    <!-- Rest of the HTML remains the same -->
    <script>
      function printPDF() {
        window.print(); // Prompt user with print dialog
      }

    //  function resetValues() {
        // Get all input elements within the table
    //    let tableInputs = document.querySelectorAll('#incomeTable input[type="number"]');
        // Loop through each input element and reset its value to empty string
   //     tableInputs.forEach(input => {
    //      input.value = "";
    //    });
  //    }

      function resetValues() {
  localStorage.removeItem('taxCalculatorData'); // Clear local storage
  document.querySelectorAll('input, select').forEach(input => {
    input.value = ''; // Clear all inputs
  });
  CalculateAllIncome(); // Recalculate after reset
      }
    </script>
  </head>
  <body>
    <!-- Heading -->
    <header>
      <h1>Income Tax Calculator</h1>
      <h2>Disclaimer - This calculator is made after incorporating all the relevant provisions of Income Tax act applicable for FY 2024-25(AY 2025-26)</h2>
      <!-- Button container -->
      <div class="container">
  <button class="button" onclick="resetValues()">Reset</button>
  <button class="button" onclick="printPDF()">Print as PDF</button>
  <button class="button" onclick="exportToJSON()">Export to JSON</button>
  <input type="file" id="importFile" style="display: none;" accept=".json" onchange="importFromJSON(event)">
  <button class="button" onclick="document.getElementById('importFile').click()">Import from JSON</button>
</div>
    </header>
    <table class="incomeTable" style="overflow:scroll;">
      <!-- Table headers -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Basic Details</strong>
        </td>
      </tr>
      <tr>
        <td>Name</td>
        <td>
          <input type="text" id="Name" value="">
        </td>
        <td>Aadhaar Number</td>
        <td>
          <input type="number" id="Aadhaar Number" value="">
        </td>
      </tr>
      <tr>
        <td>PAN Number</td>
        <td>
          <input type="text" id="PAN Number" value="">
        </td>
        <td>Mobile Number</td>
        <td>
          <input type="number" id="Mobile Number" value="">
        </td>
      </tr>
      <tr>
        <td>Father Name</td>
        <td>
          <input type="text" id="Father Name" value="">
        </td>
        <td>Email ID</td>
        <td>
          <input type="text" id="Email ID" value="">
        </td>
      </tr>
      <tr>
        <td>Age</td>
        <td>
          <input type="number" id="age" value="">
        </td>
        <td>Bank A/c No.</td>
        <td>
          <input type="number" id="Bank A/c No." value="">
        </td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          <input type="text" id="Address" value="">
        </td>
        <td>IFSC Code</td>
        <td>
          <input type="number" id="IFSC Code" value="">
        </td>
      </tr>
      <tr>
        <td>Assessment Year</td>
        <td style="text-align: left;">2025-26</td>
        <td>MIRC Code</td>
        <td>
          <input type="number" id="MIRC Code" value="">
        </td>
      </tr>
      <tr>
        <td>Marginal Relief</td>
        <td>
          <select name="combo_list">
            <option value="Govt_utility">Govt. utility</option>
            <option value="Conceptual">Conceptual</option>
          </select>
        </td>
        <td>Type (Saving/Current)</td>
        <td>
          <input type="text" id="Type (Saving/Current)" value="">
        </td>
      </tr>
      <tr class="page-break" class="sticky-header" style="background-color:#839c9a;">
        <td>Particulars</td>
        <td>Amount</td>
        <td>Old Tax Regime</td>
        <td>New Tax Regime</td>
      </tr>
      <!-- Income under the head "Salaries" -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from Salary</strong>
        </td>
      </tr>
      <!-- Salary Components -->
      <tr>
        <td>Basic Salary</td>
        <td>
          <input type="number" id="basicsalary" value="">
        </td>
        <td id="oldregimebasicsalary"></td>
        <td id="newregimebasicsalary"></td>
      </tr>
      <tr>
        <td>House Rent Allowance (HRA)</td>
        <td>
          <input type="number" id="hra" value="">
        </td>
        <td id="oldregimehra"></td>
        <td id="newregimehra"></td>
      </tr>
      <tr>
        <td>Bonus</td>
        <td>
          <input type="number" id="bonus" value="">
        </td>
        <td id="oldregimebonus"></td>
        <td id="newregimebonus"></td>
      </tr>
      <tr>
        <td>Special Allowance</td>
        <td>
          <input type="number" id="specialallowance" value="">
        </td>
        <td id="oldregimespecialallowance"></td>
        <td id="newregimespecialallowance"></td>
      </tr>
      <tr>
        <td>Other Allowance</td>
        <td>
          <input type="number" id="otherallowance" value="">
        </td>
        <td id="oldregimeotherallowance"></td>
        <td id="newregimeotherallowance"></td>
      </tr>
      <!-- Gross Salary Calculation -->
      <tr style="background-color:#f9f9f9;">
        <td>
          <strong>Gross Salary</strong>
        </td>
        <td id="grosssalary"></td>
        <td id="oldregimegrosssalary"></td>
        <td id="newregimegrosssalary"></td>
      </tr>
      <!-- Deductions and Exemptions -->
      <tr style="background-color:#f9f9f9;">
        <td colspan="4">
          <strong>Deductions and Exemptions</strong>
        </td>
      </tr>
      <tr>
        <td>Exemption under Sec 10(13A)</td>
        <td>
          <input type="number" id="exemptionsec13a" value="">
        </td>
        <td id="oldregimeexemptionsec13a"></td>
        <td id="newregimeexemptionsec13a"></td>
      </tr>
      <tr>
        <td>Any Other Exemption</td>
        <td>
          <input type="number" id="otherexemption" value="">
        </td>
        <td id="oldregimeotherexemption"></td>
        <td id="newregimeotherexemption"></td>
      </tr>
      <tr>
        <td>Professional Tax Deduction</td>
        <td>
          <input type="number" id="professionaltax" value="">
        </td>
        <td id="oldregimeprofessionaltax"></td>
        <td id="newregimeprofessionaltax"></td>
      </tr>
      <tr>
        <td>Standard Deduction</td>
        <td id="standarddeduction"></td>
        <td id="oldregimestandarddeduction"></td>
        <td id="newregimestandarddeduction"></td>
      </tr>
      <!-- Net Salary -->
      <tr style="background-color:#77D5B6;">
        <td>
          <strong>Net Salary</strong>
        </td>
        <td id="netsalary"></td>
        <td id="oldregimenetsalary"></td>
        <td id="newregimenetsalary"></td>
      </tr>
      <!-- Income under the head House Property -->
      <tr class="page-break" style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from House Property</strong>
        </td>
      </tr>
      <tr>
        <td>Gross Annual Value</td>
        <td>
          <input type="number" id="grossannualvalue" value="">
        </td>
        <td id="oldregimegrossannualvalue"></td>
        <td id="newregimegrossannualvalue"></td>
      </tr>
      <tr>
        <td>Municipal Taxes Paid</td>
        <td>
          <input type="number" id="municipaltaxes" value="">
        </td>
        <td id="oldregimemunicipaltaxes"></td>
        <td id="newregimemunicipaltaxes"></td>
      </tr>
      <tr>
        <td>Net Annual Value (NAV)</td>
        <td id="nav"></td>
        <td id="oldregimenav"></td>
        <td id="newregimenav"></td>
      </tr>
      <tr>
        <td>Standard Deduction @30%</td>
        <td id="standarddeductionhp"></td>
        <td id="oldregimestandarddeductionhp"></td>
        <td id="newregimestandarddeductionhp"></td>
      </tr>
      <tr>
        <td>Interest on House Property (Let-out)</td>
        <td>
          <input type="number" id="interestletout" value="">
        </td>
        <td id="oldregimeinterestletout"></td>
        <td id="newregimeinterestletout"></td>
      </tr>
      <tr>
        <td>Interest on House Property (Self-occupied)</td>
        <td>
          <input type="number" id="interestselfoccupied" value="">
        </td>
        <td id="oldregimeinterestselfoccupied"></td>
        <td id="newregimeinterestselfoccupied"></td>
      </tr>
      <!-- Net Income from House Property -->
      <tr style="background-color:#77D5B6;">
        <td>
          <strong>Net Income from House Property</strong>
        </td>
        <td id="netincomehp"></td>
        <td id="oldregimenetincomehp"></td>
        <td id="newregimenetincomehp"></td>
      </tr>
      <!-- Income from PGBP -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from PGBP</strong>
        </td>
      </tr>
      <tr>
        <td>Gross Turnover</td>
        <td>
          <input type="number" id="grossturnover" value="">
        </td>
        <td id="oldregimegrossturnover"></td>
        <td id="newregimegrossturnover"></td>
      </tr>
      <tr>
        <td>% of Profit (Min 6%/8%/50%)</td>
        <td>
          <input type="number" id="percentprofit" value="6" min="6" max="50">
        </td>
        <td id="oldregimepercentprofit"></td>
        <td id="newregimepercentprofit"></td>
      </tr>
      <tr>
        <td>Net Profit u/s 44AD and 44ADA</td>
        <td id="netprofit44ad"></td>
        <td id="oldregimenetprofit44ad"></td>
        <td id="newregimenetprofit44ad"></td>
      </tr>
      <tr>
        <td>Normal Business Income</td>
        <td>
          <input type="number" id="normalbusinessincome" value="">
        </td>
        <td id="oldregimenormalbusinessincome"></td>
        <td id="newregimenormalbusinessincome"></td>
      </tr>
      <tr style="background-color:#77D5B6;">
        <td>
          <strong>Net Income from PGBP</strong>
        </td>
        <td id="netincomepgbp"></td>
        <td id="oldregimenetincomepgbp"></td>
        <td id="newregimenetincomepgbp"></td>
      </tr>
      <!-- Income from Capital Gain -->
      <tr class="page-break" style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from Capital Gain(Before 23.07.2024)</strong>
        </td>
      </tr>
      <tr>
        <td>STCG U/S Sec 111-Slab Rate</td>
        <td>
          <input type="number" id="stcgsec111" value="">
        </td>
        <td id="oldregimestcgsec111"></td>
        <td id="newregimestcgsec111"></td>
      </tr>
      <tr>
        <td>STCG U/S 111A@15%</td>
        <td>
          <input type="number" id="stcgsec111a" value="">
        </td>
        <td id="oldregimestcgsec111a"></td>
        <td id="newregimestcgsec111a"></td>
      </tr>
      <tr>
        <td>LTCG U/S 112@20%(with indexation)</td>
        <td>
          <input type="number" id="ltcgsec112" value="">
        </td>
        <td id="oldregimeltcgsec112"></td>
        <td id="newregimeltcgsec112"></td>
      </tr>
      <tr>
        <td>LTCG U/S 112A@10%(Exemption - 1.25 Lakh)</td>
        <td>
          <input type="number" id="ltcgsec112a" value="">
        </td>
        <td id="oldregimeltcgsec112a"></td>
        <td id="newregimeltcgsec112a"></td>
      </tr>
      <!-- Income from Capital Gain on or After 23.07.24 -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from Capital Gain(On or after 23.07.2024)</strong>
        </td>
      </tr>
      <tr>
        <td>STCG U/S Sec 111-Slab Rate</td>
        <td>
          <input type="number" id="stcgsec111_jul" value="">
        </td>
        <td id="oldregimestcgsec111_jul"></td>
        <td id="newregimestcgsec111_jul"></td>
      </tr>
      <tr>
        <td>STCG U/S 111A@20%</td>
        <td>
          <input type="number" id="stcgsec111a_jul" value="">
        </td>
        <td id="oldregimestcgsec111a_jul"></td>
        <td id="newregimestcgsec111a_jul"></td>
      </tr>
      <tr>
        <td>LTCG U/S 112@12.5%(without indexation)</td>
        <td>
          <input type="number" id="ltcgsec112_jul" value="">
        </td>
        <td id="oldregimeltcgsec112_jul"></td>
        <td id="newregimeltcgsec112_jul"></td>
      </tr>
      <tr>
        <td>LTCG U/S 112A@12.5%(Exemption - 1.25 Lakh)</td>
        <td>
          <input type="number" id="ltcgsec112a_jul" value="">
        </td>
        <td id="oldregimeltcgsec112a_jul"></td>
        <td id="newregimeltcgsec112a_jul"></td>
      </tr>
      <tr>
      <tr style="background-color:#77D5B6;">
        <td>
          <strong>Net Income from Capital Gain</strong>
        </td>
        <td id="netcapitalgain"></td>
        <td id="oldregimenetcapitalgain"></td>
        <td id="newregimenetcapitalgain"></td>
      </tr>
      <!-- Income from Other Sources -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from Other Sources</strong>
        </td>
      </tr>
      <tr>
        <td>Dividend Income</td>
        <td>
          <input type="number" id="dividendincome" value="">
        </td>
        <td id="oldregimedividendincome"></td>
        <td id="newregimedividendincome"></td>
      </tr>
      <tr>
        <td>Interest from Saving Bank</td>
        <td>
          <input type="number" id="interestsavingbank" value="">
        </td>
        <td id="oldregimeinterestsavingbank"></td>
        <td id="newregimeinterestsavingbank"></td>
      </tr>
      <tr>
        <td>Interest from FD</td>
        <td>
          <input type="number" id="interestfd" value="">
        </td>
        <td id="oldregimeinterestfd"></td>
        <td id="newregimeinterestfd"></td>
      </tr>
      <tr>
        <td>Winning from Lottery</td>
        <td>
          <input type="number" id="winninglottery" value="">
        </td>
        <td id="oldregimewinninglottery"></td>
        <td id="newregimewinninglottery"></td>
      </tr>
      <tr>
        <td>Any Other Income</td>
        <td>
          <input type="number" id="otherincome" value="">
        </td>
        <td id="oldregimeotherincome"></td>
        <td id="newregimeotherincome"></td>
      </tr>
      <tr style="background-color:#77D5B6;">
        <td>
          <strong>Net Income from Other Sources</strong>
        </td>
        <td id="netothersources"></td>
        <td id="oldregimenetothersources"></td>
        <td id="newregimenetothersources"></td>
      </tr>
      <!-- Income from Virtual Digital Asset-->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Income from Virtual Digital Asset</strong>
        </td>
      </tr>
      <tr>
        <td>VDA Income</td>
        <td>
          <input type="number" id="vda" value="">
        </td>
        <td id="oldregimevda"></td>
        <td id="newregimevda"></td>
      </tr>
      <tr style="background-color:#77D5B6;">
        <td>
          <strong>Net Income from VDA</strong>
        </td>
        <td id="netvda"></td>
        <td id="oldregimenetvda"></td>
        <td id="newregimenetvda"></td>
      </tr>
      <!-- Gross Total Income -->
      <tr class="page-break" style="background-color:#4EB26E;">
        <td>
          <strong>Gross Total Income</strong>
        </td>
        <td id="grosstotalincome"></td>
        <td id="oldregimegrosstotalincome"></td>
        <td id="newregimegrosstotalincome"></td>
      </tr>
      <!-- Deductions -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Deductions</strong>
        </td>
      </tr>
      <tr>
        <td>Deductions u/s 80C(LIC, PF, PPF, NSC, Repayment of Housing Loan, etc.)</td>
        <td>
          <input type="number" id="deduction80c" value="">
        </td>
        <td id="oldregimededuction80c"></td>
        <td id="newregimededuction80c"></td>
      </tr>
      <tr>
        <td>Deduction u/s 80CCC(Payment in respect Pension Fund)</td>
        <td>
          <input type="number" id="deduction80ccc" value="">
        </td>
        <td id="oldregimededuction80ccc"></td>
        <td id="newregimededuction80ccc"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80CCD(1)(Employee’s / Self-employed contribution towards NPS)</td>
        <td>
          <input type="number" id="deduction80ccd1" value="">
        </td>
        <td id="oldregimededuction80ccd1"></td>
        <td id="newregimededuction80ccd1"></td>
      </tr>
      <tr>
        <td>Restrict 80C, 80CCC, 80CCD(1) upto 150000</td>
        <td id="restrictdeduction"></td>
        <td id="oldregimerestrictdeduction"></td>
        <td id="newregimerestrictdeduction"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80CCD (1B) (Additional Employee’s contribution towards NPS)</td>
        <td>
          <input type="number" id="deduction80ccd1b" value="">
        </td>
        <td id="oldregimededuction80ccd1b"></td>
        <td id="newregimededuction80ccd1b"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80CCD (2) (Employers contribution towards NPS)</td>
        <td>
          <input type="number" id="deduction80ccd2" value="">
        </td>
        <td id="oldregimededuction80ccd2"></td>
        <td id="newregimededuction80ccd2"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80D (MediClaim Premium)</td>
        <td>
          <input type="number" id="deduction80d" value="">
        </td>
        <td id="oldregimededuction80d"></td>
        <td id="newregimededuction80d"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80G (Donations)</td>
        <td>
          <input type="number" id="deduction80g" value="">
        </td>
        <td id="oldregimededuction80g"></td>
        <td id="newregimededuction80g"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80E (Interest on Loan for Higher Education)</td>
        <td>
          <input type="number" id="deduction80e" value="">
        </td>
        <td id="oldregimededuction80e"></td>
        <td id="newregimededuction80e"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80EE (Interest on Loan taken for Residential House)</td>
        <td>
          <input type="number" id="deduction80ee" value="">
        </td>
        <td id="oldregimededuction80ee"></td>
        <td id="newregimededuction80ee"></td>
      </tr>
      <tr>
        <td>Deductions u/s80TTA (Interest on Savings Bank Account)</td>
        <td>
          <input type="number" id="deduction80tta" value="">
        </td>
        <td id="oldregimededuction80tta"></td>
        <td id="newregimededuction80tta"></td>
      </tr>
      <tr>
        <td>Deductions u/s 80TTB (Interest on Deposits)</td>
        <td>
          <input type="number" id="deduction80ttb" value="">
        </td>
        <td id="oldregimededuction80ttb"></td>
        <td id="newregimededuction80ttb"></td>
      </tr>
      <tr>
        <td>Any other deduction</td>
        <td>
          <input type="number" id="anyotherdeduction" value="">
        </td>
        <td id="oldregimeanyotherdeduction"></td>
        <td id="newregimeanyotherdeduction"></td>
      </tr>
      <tr>
        <td>Total Deductions</td>
        <td id="totaldeduction" value=""></td>
        <td id="oldregimetotaldeduction"></td>
        <td id="newregimetotaldeduction"></td>
      </tr>
      <!-- Total Deductions -->
      <tr style="background-color:#f9f9f9;">
        <td>
          <strong>Max Deductions allowed</strong>
        </td>
        <td id="eligiblededuction"></td>
        <td id="oldregimeeligiblededuction"></td>
        <td id="newregimeeligiblededuction"></td>
      </tr>
      <!-- Net Taxable Income after Deductions -->
      <tr class="page-break" style="background-color:#77D5B6;">
        <td>
          <strong>Net Taxable Income after Deductions</strong>
        </td>
        <td id="netincome"></td>
        <td id="oldregimenetincome"></td>
        <td id="newregimenetincome"></td>
      </tr>
      <!-- Roundoff-->
      <tr style="background-color:#4EB26E;">
        <td>
          <strong>Net Taxable Income Rounding off u/s 288A</strong>
        </td>
        <td id="roundoff"></td>
        <td id="oldregimeroundoff"></td>
        <td id="newregimeroundoff"></td>
      </tr>
      <tr>
        <td>Tax on Normal Income</td>
        <td></td>
        <td id="oldregimenormalincometax"></td>
        <td id="newregimenormalincometax"></td>
      </tr>
      <tr>
        <td>Tax on Special Income</td>
        <td></td>
        <td id="oldregimespecialincometax"></td>
        <td id="newregimespecialincometax"></td>
      </tr>
      <tr>
        <td>Total Tax before Rebate</td>
        <td></td>
        <td id="oldregimetaxbeforerebate"></td>
        <td id="newregimetaxbeforerebate"></td>
      </tr>
      <tr>
        <td>Rebate U/s 87A</td>
        <td></td>
        <td id="oldregimerebate87a"></td>
        <td id="newregimerebate87a"></td>
      </tr>
      <tr>
        <td>Total Tax before Surcharge</td>
        <td></td>
        <td id="oldregimetaxbeforesurcharge"></td>
        <td id="newregimetaxbeforesurcharge"></td>
      </tr>
      <tr>
        <td>Surcharge</td>
        <td></td>
        <td id="oldregimesurcharge"></td>
        <td id="newregimesurcharge"></td>
      </tr>
      <tr>
        <td>Marginal Relief</td>
        <td></td>
        <td id="oldregimemarginalrelief"></td>
        <td id="newregimemarginalrelief"></td>
      </tr>
      <tr>
        <td>Total Tax before Cess</td>
        <td></td>
        <td id="oldregimetaxbeforecess"></td>
        <td id="newregimetaxbeforecess"></td>
      </tr>
      <tr>
        <td>Cess@4%</td>
        <td></td>
        <td id="oldregimecess"></td>
        <td id="newregimecess"></td>
      </tr>
      <tr>
        <td style="background-color:#F73F09;">Gross Tax Payable</td>
        <td style="background-color:#F73F09;"></td>
        <td style="background-color:#F73F09;" id="oldregimegrosstaxpayable"></td>
        <td style="background-color:#F73F09;" id="newregimegrosstaxpayable"></td>
      </tr>
      <!-- Details of Caryy Forward Loss -->
      <tr style="background-color:#49A5E3;">
        <td colspan="4" style="text-align: center; color: ">
          <strong>Details of Carry forward losses for 8 AY</strong>
        </td>
      </tr>
      <tr>
        <td>Loss from House Property</td>
        <td>
          <id="hploss" value="">
        </td>
        <td id="oldregimehploss"></td>
        <td id="newregimehploss"></td>
      </tr>
      <tr>
        <td>Loss from PGBP</td>
        <td>
          <id="pgbploss" value="">
        </td>
        <td id="oldregimepgbploss"></td>
        <td id="newregimepgbploss"></td>
      </tr>
      <tr>
        <td>Loss from STCG</td>
        <td>
          <id="stcgloss" value="">
        </td>
        <td id="oldregimestcgloss"></td>
        <td id="newregimestcgloss"></td>
      </tr>
      <tr>
        <td>Loss from LTCG</td>
        <td>
          <id="ltcgloss" value="">
        </td>
        <td id="oldregimeltcgloss"></td>
        <td id="newregimeltcgloss"></td>
      </tr>
    </table>
    <script>
      // if (window.location.href === "https://sumitgarg100000.github.io/IncometaxCalculator/") {
      // Get the heading element
      //       var heading = document.querySelector("h2");
      // Check if the heading text content is equal to "abc"
      //if(heading.textContent.trim() === "(Disclaimer- This Calculator is made after incorporating all the relevant provisions of income tax act applicable for FY 2024-25(AY 2025-26). If any query, Contact - Sumit Garg, Ph. No. - 9716804520, Email - SumitGarg100000@Gmail.com)")
      // {
      document.addEventListener("DOMContentLoaded", function() {
        function CalculateAllIncome() {
          // Income from Salary   
          let oldbasicsalary = Math.max(0, Number(document.getElementById('basicsalary').value));
          let oldhra = Math.max(0, Number(document.getElementById('hra').value));
          let oldbonus = Math.max(0, Number(document.getElementById('bonus').value));
          let oldspecialallowance = Math.max(0, Number(document.getElementById('specialallowance').value));
          let oldotherallowance = Math.max(0, Number(document.getElementById('otherallowance').value));
          let oldgrosssalary = oldbasicsalary + oldhra + oldbonus + oldspecialallowance + oldotherallowance;
          let oldexemptionsec13a = Math.min(Math.max(0, Number(document.getElementById('exemptionsec13a').value)), oldgrosssalary);
          let oldotherexemption = Math.min(Math.max(0, Number(document.getElementById('otherexemption').value)), oldgrosssalary - oldexemptionsec13a);
          let oldprofessionaltax = Math.min(Math.max(0, Number(document.getElementById('professionaltax').value)), oldgrosssalary - oldexemptionsec13a - oldotherexemption);
          let oldstandarddeduction = Math.min((oldgrosssalary - (oldexemptionsec13a + oldotherexemption + oldprofessionaltax)), 50000);
          let oldnetsalary = oldgrosssalary - (oldexemptionsec13a + oldotherexemption + oldprofessionaltax + oldstandarddeduction);
          let newbasicsalary = Math.max(0, Number(document.getElementById('basicsalary').value));
          let newhra = Math.max(0, Number(document.getElementById('hra').value));
          let newbonus = Math.max(0, Number(document.getElementById('bonus').value));
          let newspecialallowance = Math.max(0, Number(document.getElementById('specialallowance').value));
          let newotherallowance = Math.max(0, Number(document.getElementById('otherallowance').value));
          let newgrosssalary = newbasicsalary + newhra + newbonus + newspecialallowance + newotherallowance;
          let newexemptionsec13a = 0;
          let newotherexemption = 0;
          let newprofessionaltax = 0;
          let newstandarddeduction = Math.min((newgrosssalary - (newexemptionsec13a + newotherexemption + newprofessionaltax)), 75000);
          let newnetsalary = newgrosssalary - (newexemptionsec13a + newotherexemption + newprofessionaltax + newstandarddeduction);
          document.getElementById('oldregimebasicsalary').textContent = oldbasicsalary.toFixed(2);
          document.getElementById('oldregimehra').textContent = oldhra.toFixed(2);
          document.getElementById('oldregimebonus').textContent = oldbonus.toFixed(2);
          document.getElementById('oldregimespecialallowance').textContent = oldspecialallowance.toFixed(2);
          document.getElementById('oldregimeotherallowance').textContent = oldotherallowance.toFixed(2);
          document.getElementById('oldregimegrosssalary').textContent = oldgrosssalary.toFixed(2);
          document.getElementById('oldregimeexemptionsec13a').textContent = oldexemptionsec13a.toFixed(2);
          document.getElementById('oldregimeotherexemption').textContent = oldotherexemption.toFixed(2);
          document.getElementById('oldregimeprofessionaltax').textContent = oldprofessionaltax.toFixed(2);
          document.getElementById('oldregimestandarddeduction').textContent = oldstandarddeduction.toFixed(2);
          document.getElementById('oldregimenetsalary').textContent = oldnetsalary.toFixed(2);
          document.getElementById('newregimebasicsalary').textContent = newbasicsalary.toFixed(2);
          document.getElementById('newregimehra').textContent = newhra.toFixed(2);
          document.getElementById('newregimebonus').textContent = newbonus.toFixed(2);
          document.getElementById('newregimespecialallowance').textContent = newspecialallowance.toFixed(2);
          document.getElementById('newregimeotherallowance').textContent = newotherallowance.toFixed(2);
          document.getElementById('newregimegrosssalary').textContent = newgrosssalary.toFixed(2);
          document.getElementById('newregimeexemptionsec13a').textContent = newexemptionsec13a.toFixed(2);
          document.getElementById('newregimeotherexemption').textContent = newotherexemption.toFixed(2);
          document.getElementById('newregimeprofessionaltax').textContent = newprofessionaltax.toFixed(2);
          document.getElementById('newregimestandarddeduction').textContent = newstandarddeduction.toFixed(2);
          document.getElementById('newregimenetsalary').textContent = newnetsalary.toFixed(2);
          // Income from House Property
          let oldgrossannualvalue = Math.max(0, Number(document.getElementById('grossannualvalue').value));
          let oldmunicipaltaxes = Math.min(Math.max(0, Number(document.getElementById('municipaltaxes').value)), oldgrossannualvalue);
          let oldnav = oldgrossannualvalue - oldmunicipaltaxes;
          let oldstandarddeductionhp = oldnav * 0.3;
          let oldinterestletout = Math.min(Math.max(0, Number(document.getElementById('interestletout').value)), oldnav * 0.7 + 200000);
          let oldinterestselfoccupied = Math.min(Math.max(0, Number(document.getElementById('interestselfoccupied').value)), 200000);
          let newgrossannualvalue = Math.max(0, Number(document.getElementById('grossannualvalue').value));
          let newmunicipaltaxes = Math.min(Math.max(0, Number(document.getElementById('municipaltaxes').value)), newgrossannualvalue);
          let newnav = newgrossannualvalue - newmunicipaltaxes;
          let newstandarddeductionhp = newnav * 0.3;
          let newinterestletout = Math.min(Math.max(0, Number(document.getElementById('interestletout').value)), newnav * 0.7);
          let newinterestselfoccupied = 0;
          let newnetincomehp = Math.max((newnav - newstandarddeductionhp) - newinterestletout - newinterestselfoccupied, 0);
          //Interest on Self-Occupied - Allowed upto 2Lakh in Old Scheme but not Allowed in New Scheme
          //Interest on LetOut    - No Limit in Old & New Scheme from NAV Income
          //Loss on Interest on LetOut    - Interhead Setoff Allowed in Old Scheme upto 2Lakh from other head of Income but not allowed in new scheme
          //Old net income logic - Can be Nagative only upto 200000 for interhead setoff from the Interest on Self-Occupied & Letout both
          //Net net income logic - Can not be Nagative Beacuse no interhead setoff allowed. So, Min Value will be Zero
          document.getElementById('oldregimegrossannualvalue').textContent = oldgrossannualvalue.toFixed(2);
          document.getElementById('oldregimemunicipaltaxes').textContent = oldmunicipaltaxes.toFixed(2);
          document.getElementById('oldregimenav').textContent = oldnav.toFixed(2);
          document.getElementById('oldregimestandarddeductionhp').textContent = oldstandarddeductionhp.toFixed(2);
          document.getElementById('oldregimeinterestletout').textContent = oldinterestletout.toFixed(2);
          document.getElementById('oldregimeinterestselfoccupied').textContent = oldinterestselfoccupied.toFixed(2);
          document.getElementById('newregimegrossannualvalue').textContent = newgrossannualvalue.toFixed(2);
          document.getElementById('newregimemunicipaltaxes').textContent = newmunicipaltaxes.toFixed(2);
          document.getElementById('newregimenav').textContent = newnav.toFixed(2);
          document.getElementById('newregimestandarddeductionhp').textContent = newstandarddeductionhp.toFixed(2);
          document.getElementById('newregimeinterestletout').textContent = newinterestletout.toFixed(2);
          document.getElementById('newregimeinterestselfoccupied').textContent = newinterestselfoccupied.toFixed(2);
          document.getElementById('newregimenetincomehp').textContent = newnetincomehp.toFixed(2);
          // Income from PGBP
          // Retrieve values from input fields
          let oldgrossturnover = Math.max(Number(document.getElementById('grossturnover').value), 0);
          let oldpercentprofit = Math.max(Number(document.getElementById('percentprofit').value), 6);
          let oldnormalbusinessincome = Number(document.getElementById('normalbusinessincome').value);
          let newgrossturnover = Math.max(Number(document.getElementById('grossturnover').value), 0);
          let newpercentprofit = Math.max(Number(document.getElementById('percentprofit').value), 6);
          let newnormalbusinessincome = Number(document.getElementById('normalbusinessincome').value);
          // Calculate net profit u/s 44AD and 44ADA
          let oldnetprofit44ad = oldgrossturnover * (oldpercentprofit / 100);
          let oldnetincomepgbp = 0;
          let newnetprofit44ad = newgrossturnover * (newpercentprofit / 100);
          let newnetincomepgbp = 0;
          // Update corresponding table cells in the old tax regime & new tax regime
          document.getElementById('oldregimegrossturnover').textContent = oldgrossturnover.toFixed(2);
          document.getElementById('oldregimepercentprofit').textContent = oldpercentprofit.toFixed(2);
          document.getElementById('oldregimenetprofit44ad').textContent = oldnetprofit44ad.toFixed(2);
          document.getElementById('oldregimenormalbusinessincome').textContent = oldnormalbusinessincome.toFixed(2);
          document.getElementById('newregimegrossturnover').textContent = newgrossturnover.toFixed(2);
          document.getElementById('newregimepercentprofit').textContent = newpercentprofit.toFixed(2);
          document.getElementById('newregimenetprofit44ad').textContent = newnetprofit44ad.toFixed(2);
          document.getElementById('newregimenormalbusinessincome').textContent = newnormalbusinessincome.toFixed(2);
          //Income from Capital Gain before 23.07.2024
          // Retrieve values from the input fields
          let oldstcgsec111_plus = Math.max(Number(document.getElementById('stcgsec111').value), 0);
          let oldstcgsec111a_plus = Math.max(Number(document.getElementById('stcgsec111a').value), 0);
          let oldltcgsec112_plus = Math.max(Number(document.getElementById('ltcgsec112').value), 0);
          let oldltcgsec112a_plus = Math.max(Number(document.getElementById('ltcgsec112a').value), 0);
          let newstcgsec111_plus = Math.max(Number(document.getElementById('stcgsec111').value), 0);
          let newstcgsec111a_plus = Math.max(Number(document.getElementById('stcgsec111a').value), 0);
          let newltcgsec112_plus = Math.max(Number(document.getElementById('ltcgsec112').value), 0);
          let newltcgsec112a_plus = Math.max(Number(document.getElementById('ltcgsec112a').value), 0);
          let oldstcgsec111_minus = Math.min(Number(document.getElementById('stcgsec111').value), 0);
          let oldstcgsec111a_minus = Math.min(Number(document.getElementById('stcgsec111a').value), 0);
          let oldltcgsec112_minus = Math.min(Number(document.getElementById('ltcgsec112').value), 0);
          let oldltcgsec112a_minus = Math.min(Number(document.getElementById('ltcgsec112a').value), 0);
          let newstcgsec111_minus = Math.min(Number(document.getElementById('stcgsec111').value), 0);
          let newstcgsec111a_minus = Math.min(Number(document.getElementById('stcgsec111a').value), 0);
          let newltcgsec112_minus = Math.min(Number(document.getElementById('ltcgsec112').value), 0);
          let newltcgsec112a_minus = Math.min(Number(document.getElementById('ltcgsec112a').value), 0);
          let oldstcgsec111 = oldstcgsec111_plus + oldstcgsec111_minus;
          let oldstcgsec111a = oldstcgsec111a_plus + oldstcgsec111a_minus;
          let oldltcgsec112 = oldltcgsec112_plus + oldltcgsec112_minus;
          let oldltcgsec112a = oldltcgsec112a_plus + oldltcgsec112a_minus;
          let newstcgsec111 = newstcgsec111_plus + newstcgsec111_minus;
          let newstcgsec111a = newstcgsec111a_plus + newstcgsec111a_minus;
          let newltcgsec112 = newltcgsec112_plus + newltcgsec112_minus;
          let newltcgsec112a = newltcgsec112a_plus + newltcgsec112a_minus;
          // Update the corresponding table cells with the calculated values
          document.getElementById('oldregimestcgsec111').textContent = oldstcgsec111.toFixed(2);
          document.getElementById('oldregimestcgsec111a').textContent = oldstcgsec111a.toFixed(2);
          document.getElementById('oldregimeltcgsec112').textContent = oldltcgsec112.toFixed(2);
          document.getElementById('oldregimeltcgsec112a').textContent = oldltcgsec112a.toFixed(2);
          document.getElementById('newregimestcgsec111').textContent = newstcgsec111.toFixed(2);
          document.getElementById('newregimestcgsec111a').textContent = newstcgsec111a.toFixed(2);
          document.getElementById('newregimeltcgsec112').textContent = newltcgsec112.toFixed(2);
          document.getElementById('newregimeltcgsec112a').textContent = newltcgsec112a.toFixed(2);
          // Income from capital Gain on or after 23.07.2024
          // Retrieve values from the input fields
          let oldstcgsec111_plus_jul = Math.max(Number(document.getElementById('stcgsec111_jul').value), 0);
          let oldstcgsec111a_plus_jul = Math.max(Number(document.getElementById('stcgsec111a_jul').value), 0);
          let oldltcgsec112_plus_jul = Math.max(Number(document.getElementById('ltcgsec112_jul').value), 0);
          let oldltcgsec112a_plus_jul = Math.max(Number(document.getElementById('ltcgsec112a_jul').value), 0);
          let newstcgsec111_plus_jul = Math.max(Number(document.getElementById('stcgsec111_jul').value), 0);
          let newstcgsec111a_plus_jul = Math.max(Number(document.getElementById('stcgsec111a_jul').value), 0);
          let newltcgsec112_plus_jul = Math.max(Number(document.getElementById('ltcgsec112_jul').value), 0);
          let newltcgsec112a_plus_jul = Math.max(Number(document.getElementById('ltcgsec112a_jul').value), 0);
          let oldstcgsec111_minus_jul = Math.min(Number(document.getElementById('stcgsec111_jul').value), 0);
          let oldstcgsec111a_minus_jul = Math.min(Number(document.getElementById('stcgsec111a_jul').value), 0);
          let oldltcgsec112_minus_jul = Math.min(Number(document.getElementById('ltcgsec112_jul').value), 0);
          let oldltcgsec112a_minus_jul = Math.min(Number(document.getElementById('ltcgsec112a_jul').value), 0);
          let newstcgsec111_minus_jul = Math.min(Number(document.getElementById('stcgsec111_jul').value), 0);
          let newstcgsec111a_minus_jul = Math.min(Number(document.getElementById('stcgsec111a_jul').value), 0);
          let newltcgsec112_minus_jul = Math.min(Number(document.getElementById('ltcgsec112_jul').value), 0);
          let newltcgsec112a_minus_jul = Math.min(Number(document.getElementById('ltcgsec112a_jul').value), 0);
          let oldstcgsec111_jul = oldstcgsec111_plus_jul + oldstcgsec111_minus_jul;
          let oldstcgsec111a_jul = oldstcgsec111a_plus_jul + oldstcgsec111a_minus_jul;
          let oldltcgsec112_jul = oldltcgsec112_plus_jul + oldltcgsec112_minus_jul;
          let oldltcgsec112a_jul = oldltcgsec112a_plus_jul + oldltcgsec112a_minus_jul;
          let newstcgsec111_jul = newstcgsec111_plus_jul + newstcgsec111_minus_jul;
          let newstcgsec111a_jul = newstcgsec111a_plus_jul + newstcgsec111a_minus_jul;
          let newltcgsec112_jul = newltcgsec112_plus_jul + newltcgsec112_minus_jul;
          let newltcgsec112a_jul = newltcgsec112a_plus_jul + newltcgsec112a_minus_jul;
          //Capital Gain Loss cannot be setoff from any other head. It means Net capital gain can't be go negative
          let oldnetcapitalgain = Math.max(oldstcgsec111 + oldstcgsec111a + oldltcgsec112 + oldltcgsec112a + oldstcgsec111_jul + oldstcgsec111a_jul + oldltcgsec112_jul + oldltcgsec112a_jul, 0);
          let newnetcapitalgain = Math.max(newstcgsec111 + newstcgsec111a + newltcgsec112 + newltcgsec112a + newstcgsec111_jul + newstcgsec111a_jul + newltcgsec112_jul + newltcgsec112a_jul, 0);
          // Update the corresponding table cells with the calculated values
          document.getElementById('oldregimestcgsec111_jul').textContent = oldstcgsec111_jul.toFixed(2);
          document.getElementById('oldregimestcgsec111a_jul').textContent = oldstcgsec111a_jul.toFixed(2);
          document.getElementById('oldregimeltcgsec112_jul').textContent = oldltcgsec112_jul.toFixed(2);
          document.getElementById('oldregimeltcgsec112a_jul').textContent = oldltcgsec112a_jul.toFixed(2);
          document.getElementById('oldregimenetcapitalgain').textContent = oldnetcapitalgain.toFixed(2);
          document.getElementById('newregimestcgsec111_jul').textContent = newstcgsec111_jul.toFixed(2);
          document.getElementById('newregimestcgsec111a_jul').textContent = newstcgsec111a_jul.toFixed(2);
          document.getElementById('newregimeltcgsec112_jul').textContent = newltcgsec112_jul.toFixed(2);
          document.getElementById('newregimeltcgsec112a_jul').textContent = newltcgsec112a_jul.toFixed(2);
          document.getElementById('newregimenetcapitalgain').textContent = newnetcapitalgain.toFixed(2);
          //Income from Other Sources
          // Retrieve values from input fields
          let olddividendincome = Math.max(0, Number(document.getElementById('dividendincome').value));
          let oldinterestsavingbank = Math.max(0, Number(document.getElementById('interestsavingbank').value));
          let oldinterestfd = Math.max(0, Number(document.getElementById('interestfd').value));
          let oldwinninglottery = Math.max(0, Number(document.getElementById('winninglottery').value));
          let oldotherincome = Math.max(0, Number(document.getElementById('otherincome').value));
          let newdividendincome = Math.max(0, Number(document.getElementById('dividendincome').value));
          let newinterestsavingbank = Math.max(0, Number(document.getElementById('interestsavingbank').value));
          let newinterestfd = Math.max(0, Number(document.getElementById('interestfd').value));
          let newwinninglottery = Math.max(0, Number(document.getElementById('winninglottery').value));
          let newotherincome = Math.max(0, Number(document.getElementById('otherincome').value));
          let oldnetothersources = olddividendincome + oldinterestsavingbank + oldinterestfd + oldwinninglottery + oldotherincome;
          document.getElementById('oldregimenetothersources').textContent = oldnetothersources.toFixed(2);
          let newnetothersources = newdividendincome + newinterestsavingbank + newinterestfd + newwinninglottery + newotherincome;
          document.getElementById('newregimenetothersources').textContent = newnetothersources.toFixed(2);
          // Update values in Old Tax Regime & New Tax Regime
          document.getElementById('oldregimedividendincome').textContent = olddividendincome.toFixed(2);
          document.getElementById('oldregimeinterestsavingbank').textContent = oldinterestsavingbank.toFixed(2);
          document.getElementById('oldregimeinterestfd').textContent = oldinterestfd.toFixed(2);
          document.getElementById('oldregimewinninglottery').textContent = oldwinninglottery.toFixed(2);
          document.getElementById('oldregimeotherincome').textContent = oldotherincome.toFixed(2);
          document.getElementById('newregimedividendincome').textContent = newdividendincome.toFixed(2);
          document.getElementById('newregimeinterestsavingbank').textContent = newinterestsavingbank.toFixed(2);
          document.getElementById('newregimeinterestfd').textContent = newinterestfd.toFixed(2);
          document.getElementById('newregimewinninglottery').textContent = newwinninglottery.toFixed(2);
          document.getElementById('newregimeotherincome').textContent = newotherincome.toFixed(2);
          //Income from Virtual Digital Asset
          // Retrieve values from input fields
          let oldvda = Math.max(0, Number(document.getElementById('vda').value));
          let newvda = Math.max(0, Number(document.getElementById('vda').value));
          document.getElementById('oldregimevda').textContent = oldvda.toFixed(2);
          document.getElementById('oldregimenetvda').textContent = oldvda.toFixed(2);
          document.getElementById('newregimevda').textContent = newvda.toFixed(2);
          document.getElementById('newregimenetvda').textContent = newvda.toFixed(2);
          //In old Regime HP loss will be setoff from all income & PGBP Loss will be setoff from all income except Salary
          let oldnetincomehp = 0;
          if ((oldnetprofit44ad + oldnormalbusinessincome) >= 0 && Math.max(oldnav - oldstandarddeductionhp - oldinterestletout - oldinterestselfoccupied, -200000) >= 0) {
            oldnetincomepgbp = oldnetprofit44ad + oldnormalbusinessincome;
            oldnetincomehp = Math.max(oldnav - oldstandarddeductionhp - oldinterestletout - oldinterestselfoccupied, -200000);
          } else if (oldnormalbusinessincome < 0 && Math.max(oldnav - oldstandarddeductionhp - oldinterestletout - oldinterestselfoccupied, -200000) >= 0) {
            oldnetincomepgbp = Math.max((oldnetprofit44ad + oldnormalbusinessincome), -(Math.max(oldnav - oldstandarddeductionhp - oldinterestletout - oldinterestselfoccupied, -200000) + oldnetprofit44ad + oldnetcapitalgain + oldnetothersources));
            oldnetincomehp = Math.max(oldnav - oldstandarddeductionhp - oldinterestletout - oldinterestselfoccupied, -200000);
          } else if (oldnormalbusinessincome >= 0 && Math.max(oldnav - oldstandarddeductionhp - oldinterestletout - oldinterestselfoccupied, -200000) < 0) {
            oldnetincomepgbp = oldnetprofit44ad + oldnormalbusinessincome;
            oldnetincomehp = Math.max(Math.max((oldnav - oldstandarddeductionhp) - oldinterestletout - oldinterestselfoccupied, -200000), -(oldnetsalary + oldnetprofit44ad + oldnormalbusinessincome + oldnetcapitalgain + oldnetothersources));
          } else {
            oldnetincomepgbp = Math.max((oldnetprofit44ad + oldnormalbusinessincome), -(oldnetprofit44ad + oldnetcapitalgain + oldnetothersources));
            oldnetincomehp = Math.max(Math.max((oldnav - oldstandarddeductionhp) - oldinterestletout - oldinterestselfoccupied, -200000), -(oldnetsalary + oldnetincomepgbp + oldnetcapitalgain + oldnetothersources));
          }
          //In New Regime HP loss will not be setoff from any income & PGBP Loss will be setoff from all income except Salary
          newnetincomepgbp = Math.max((newnetprofit44ad + newnormalbusinessincome), -(newnetprofit44ad + newnetcapitalgain + newnetothersources));
          // Loss Carry Forward Calculation
          let oldinterheadhpcarry = -((oldnav - oldstandarddeductionhp - Math.max(0, Number(document.getElementById('interestletout').value)) - Math.max(0, Number(document.getElementById('interestselfoccupied').value))) - oldnetincomehp);
          let newinterheadhpcarry = -((newnav - newstandarddeductionhp - Math.max(0, Number(document.getElementById('interestletout').value)) - Math.max(0, Number(document.getElementById('interestselfoccupied').value))) - newnetincomehp);
          let oldinterheadpgbpcarry = oldnetprofit44ad + Number(document.getElementById('normalbusinessincome').value) - oldnetincomepgbp;
          let newinterheadpgbpcarry = newnetprofit44ad + Number(document.getElementById('normalbusinessincome').value) - newnetincomepgbp;
          let oldinterheadltcgcarry = -Math.min((oldltcgsec112 + oldltcgsec112a + oldltcgsec112_jul + oldltcgsec112a_jul), 0);
          let newinterheadltcgcarry = -Math.min((newltcgsec112 + newltcgsec112a + newltcgsec112_jul + newltcgsec112a_jul), 0);
          let oldinterheadstcgcarry = -Math.min((Math.min(oldstcgsec111 + oldstcgsec111a + oldstcgsec111_jul + oldstcgsec111a_jul, 0) + Math.max(oldltcgsec112 + oldltcgsec112a + oldltcgsec112_jul + oldltcgsec112a_jul, 0)), 0);
          let newinterheadstcgcarry = -Math.min((Math.min(newstcgsec111 + newstcgsec111a + newstcgsec111_jul + newstcgsec111a_jul, 0) + Math.max(newltcgsec112 + newltcgsec112a + newltcgsec112_jul + newltcgsec112a_jul, 0)), 0);
          document.getElementById('oldregimehploss').textContent = oldinterheadhpcarry.toFixed(2);
          document.getElementById('oldregimepgbploss').textContent = oldinterheadpgbpcarry.toFixed(2);
          document.getElementById('oldregimestcgloss').textContent = oldinterheadstcgcarry.toFixed(2);
          document.getElementById('oldregimeltcgloss').textContent = oldinterheadltcgcarry.toFixed(2);
          document.getElementById('newregimehploss').textContent = newinterheadhpcarry.toFixed(2);
          document.getElementById('newregimepgbploss').textContent = newinterheadpgbpcarry.toFixed(2);
          document.getElementById('newregimestcgloss').textContent = newinterheadstcgcarry.toFixed(2);
          document.getElementById('newregimeltcgloss').textContent = newinterheadltcgcarry.toFixed(2);
          // Calculate Gross Total Income
          let oldgrosstotalincome = Math.max(oldnetsalary + oldnetincomehp + oldnetincomepgbp + oldnetcapitalgain + oldnetothersources + oldvda, 0);
          let newgrosstotalincome = Math.max(newnetsalary + newnetincomehp + newnetincomepgbp + newnetcapitalgain + newnetothersources + newvda, 0);
          document.getElementById('oldregimenetincomehp').textContent = oldnetincomehp.toFixed(2);
          document.getElementById('oldregimenetincomepgbp').textContent = oldnetincomepgbp.toFixed(2);
          document.getElementById('newregimenetincomepgbp').textContent = newnetincomepgbp.toFixed(2);
          document.getElementById('oldregimegrosstotalincome').textContent = oldgrosstotalincome.toFixed(2);
          document.getElementById('newregimegrosstotalincome').textContent = newgrosstotalincome.toFixed(2);
          //Deductions
          // Get user input for deductions
          // Retrieve values from the input fields and ensure each deduction does not exceed a certain value
          let olddeduction80c = Math.min(150000, Number(document.getElementById('deduction80c').value));
          let olddeduction80ccc = Math.min(150000, Number(document.getElementById('deduction80ccc').value)); // Adjust 'maximumValue' accordingly
          let olddeduction80ccd1 = Math.min(150000, Number(document.getElementById('deduction80ccd1').value)); // Adjust 'maximumValue' accordingly
          let oldrestrictdeduction = Math.min(150000, olddeduction80c + olddeduction80ccc + olddeduction80ccd1);
          let olddeduction80ccd1b = Math.min(50000, Number(document.getElementById('deduction80ccd1b').value)); // Adjust 'maximumValue' accordingly
          let olddeduction80ccd2 = Math.max(Number(document.getElementById('deduction80ccd2').value), 0);
          let olddeduction80d = Math.min(100000, Number(document.getElementById('deduction80d').value)); // Adjust 'maximumValue' accordingly
          let olddeduction80g = Math.max(Number(document.getElementById('deduction80g').value), 0);
          let olddeduction80e = Math.max(Number(document.getElementById('deduction80e').value), 0); // Adjust 'maximumValue' accordingly
          let olddeduction80ee = Math.max(Number(document.getElementById('deduction80ee').value), 0); // Adjust 'maximumValue' accordingly
          let olddeduction80tta = Math.min(10000, Number(document.getElementById('deduction80tta').value)); // Adjust 'maximumValue' accordingly
          let olddeduction80ttb = Math.min(50000, Number(document.getElementById('deduction80ttb').value)); // Adjust 'maximumValue' accordingly
          let oldanyotherdeduction = Math.max(Number(document.getElementById('anyotherdeduction').value), 0); // Adjust 'maximumValue' accordingly
          let oldtotaldeduction = oldrestrictdeduction + olddeduction80ccd1b + olddeduction80ccd2 + olddeduction80d + olddeduction80g + olddeduction80e + olddeduction80ee + olddeduction80tta + olddeduction80ttb + oldanyotherdeduction;
          let oldeligiblededuction = Math.min(Math.max(oldgrosstotalincome - (oldstcgsec111a + oldltcgsec112 + oldltcgsec112a + oldstcgsec111a_jul + oldltcgsec112_jul + oldltcgsec112a_jul + oldwinninglottery + oldvda), 0), oldtotaldeduction);
          let oldnetincome = Math.max(oldgrosstotalincome - oldeligiblededuction, 0);
          // Update the corresponding table cells with the calculated values for the old tax regime
          document.getElementById('oldregimededuction80c').textContent = olddeduction80c.toFixed(2);
          document.getElementById('oldregimededuction80ccc').textContent = olddeduction80ccc.toFixed(2);
          document.getElementById('oldregimededuction80ccd1').textContent = olddeduction80ccd1.toFixed(2);
          document.getElementById('oldregimerestrictdeduction').textContent = oldrestrictdeduction.toFixed(2);
          document.getElementById('oldregimededuction80ccd1b').textContent = olddeduction80ccd1b.toFixed(2);
          document.getElementById('oldregimededuction80ccd2').textContent = olddeduction80ccd2.toFixed(2);
          document.getElementById('oldregimededuction80d').textContent = olddeduction80d.toFixed(2);
          document.getElementById('oldregimededuction80g').textContent = olddeduction80g.toFixed(2);
          document.getElementById('oldregimededuction80e').textContent = olddeduction80e.toFixed(2);
          document.getElementById('oldregimededuction80ee').textContent = olddeduction80ee.toFixed(2);
          document.getElementById('oldregimededuction80tta').textContent = olddeduction80tta.toFixed(2);
          document.getElementById('oldregimededuction80ttb').textContent = olddeduction80ttb.toFixed(2);
          document.getElementById('oldregimeanyotherdeduction').textContent = oldanyotherdeduction.toFixed(2);
          document.getElementById('oldregimetotaldeduction').textContent = oldtotaldeduction.toFixed(2);
          document.getElementById('oldregimeeligiblededuction').textContent = oldeligiblededuction.toFixed(2);
          document.getElementById('oldregimenetincome').textContent = oldnetincome.toFixed(2);
          document.getElementById('newregimededuction80ccd2').textContent = olddeduction80ccd2.toFixed(2);
          // Retrieve values from the input fields and ensure each deduction does not exceed a certain valuelet newdeduction80c = Math.min(150000, Number(document.getElementById('deduction80c').value));
          let newdeduction80c = 0;
          let newdeduction80cCC = 0;
          let newdeduction80ccd1 = 0;
          let newrestrictdeduction = Math.min(0, 150000, newdeduction80c + newdeduction80cCC + newdeduction80ccd1);
          let newdeduction80ccd1b = 0;
          let newdeduction80ccd2 = Math.max(Number(document.getElementById('deduction80ccd2').value), 0);
          let newdeduction80d = 0;
          let newdeduction80g = 0;
          let newdeduction80e = 0;
          let newdeduction80ee = 0;
          let newdeduction80tta = 0;
          let newdeduction80ttb = 0;
          let newanyotherdeduction = 0;
          let newtotaldeduction = newrestrictdeduction + newdeduction80ccd1b + newdeduction80ccd2 + newdeduction80d + newdeduction80g + newdeduction80e + newdeduction80ee + newdeduction80tta + newdeduction80ttb + newanyotherdeduction;
          let neweligiblededuction = Math.min(Math.max(newgrosstotalincome - (newstcgsec111a + newltcgsec112 + newltcgsec112a + newstcgsec111a_jul + newltcgsec112_jul + newltcgsec112a_jul + newwinninglottery + newvda), 0), newtotaldeduction);
          let newnetincome = Math.max(newgrosstotalincome - neweligiblededuction, 0);
          // Update the corresponding table cells with the calculated values for the new tax regime
          document.getElementById('newregimededuction80c').textContent = newdeduction80c.toFixed(2);
          document.getElementById('newregimededuction80ccc').textContent = newdeduction80cCC.toFixed(2);
          document.getElementById('newregimededuction80ccd1').textContent = newdeduction80ccd1.toFixed(2);
          document.getElementById('newregimerestrictdeduction').textContent = newrestrictdeduction.toFixed(2);
          document.getElementById('newregimededuction80ccd1b').textContent = newdeduction80ccd1b.toFixed(2);
          document.getElementById('newregimededuction80ccd2').textContent = newdeduction80ccd2.toFixed(2);
          document.getElementById('newregimededuction80d').textContent = newdeduction80d.toFixed(2);
          document.getElementById('newregimededuction80g').textContent = newdeduction80g.toFixed(2);
          document.getElementById('newregimededuction80e').textContent = newdeduction80e.toFixed(2);
          document.getElementById('newregimededuction80ee').textContent = newdeduction80ee.toFixed(2);
          document.getElementById('newregimededuction80tta').textContent = newdeduction80tta.toFixed(2);
          document.getElementById('newregimededuction80ttb').textContent = newdeduction80ttb.toFixed(2);
          document.getElementById('newregimeanyotherdeduction').textContent = newanyotherdeduction.toFixed(2);
          document.getElementById('newregimetotaldeduction').textContent = newtotaldeduction.toFixed(2);
          document.getElementById('newregimeeligiblededuction').textContent = neweligiblededuction.toFixed(2);
          document.getElementById('newregimenetincome').textContent = newnetincome.toFixed(2);
          let oldroundoff = Math.round(oldnetincome / 10) * 10;
          let newroundoff = Math.round(newnetincome / 10) * 10;
          document.getElementById('oldregimeroundoff').textContent = oldroundoff.toFixed(2);
          document.getElementById('newregimeroundoff').textContent = newroundoff.toFixed(2);
          //Setoff & Carry Forward for old
          let oldstcgsec111income = 0;
          let oldstcgsec111aincome = 0;
          let oldstcgsec111aincome_jul = 0;
          let oldstcglossforltcg = 0;
          let oldltcgsec112income = 0;
          let oldltcgsec112income_jul = 0;
          let oldltcgsec112aincome = 0;
          let oldltcgsec112aincome_jul = 0;
          //oldltcgsec111income after setoff for clculation
          if ((oldstcgsec111 + oldstcgsec111_jul + oldstcgsec111a_minus + oldstcgsec111a_minus_jul) > 0) {
            oldstcgsec111income = oldstcgsec111 + oldstcgsec111_jul + oldstcgsec111a_minus + oldstcgsec111a_minus_jul;
          } else {
            oldstcgsec111income = 0;
          }
          if ((oldstcgsec111a_jul + oldstcgsec111_minus + oldstcgsec111_minus_jul + oldstcgsec111a_minus) > 0) {
            oldstcgsec111aincome_jul = oldstcgsec111a_jul + oldstcgsec111_minus + oldstcgsec111_minus_jul + oldstcgsec111a_minus;
          } else {
            oldstcgsec111aincome_jul = 0;
          }
          if ((oldstcgsec111a + oldstcgsec111_minus + oldstcgsec111_minus_jul + oldstcgsec111a_minus_jul) > 0) {
            oldstcgsec111aincome = oldstcgsec111a + oldstcgsec111_minus + oldstcgsec111_minus_jul + oldstcgsec111a_minus_jul;
          } else {
            oldstcgsec111aincome = 0;
          }
          oldstcglossforltcg = Math.min(oldstcgsec111 + oldstcgsec111a + oldstcgsec111_jul + oldstcgsec111a_jul, 0);
          //oldltcgsec112income after setoff for clculation
          if ((oldltcgsec112 + oldltcgsec112a_minus + oldltcgsec112_minus_jul + oldltcgsec112a_minus_jul + oldstcglossforltcg) > 0) {
            oldltcgsec112income = oldltcgsec112 + oldltcgsec112a_minus + oldltcgsec112_minus_jul + oldltcgsec112a_minus_jul + oldstcglossforltcg;
          } else {
            oldltcgsec112income = 0;
          }
          //oldltcgsec112income_jul after setoff for clculation
          if ((oldltcgsec112_jul + oldltcgsec112_minus + oldltcgsec112a_minus + oldltcgsec112a_minus_jul + oldstcglossforltcg) > 0) {
            oldltcgsec112income_jul = oldltcgsec112_jul + oldltcgsec112_minus + oldltcgsec112a_minus + oldltcgsec112a_minus_jul + oldstcglossforltcg;
          } else {
            oldltcgsec112income_jul = 0;
          }
          //oldltcgsec112aincome_jul after setoff for clculation
          if ((oldltcgsec112a_jul + oldltcgsec112_minus + oldltcgsec112a_minus + oldltcgsec112_minus_jul + oldstcglossforltcg) > 0) {
            oldltcgsec112aincome_jul = oldltcgsec112a_jul + oldltcgsec112_minus + oldltcgsec112a_minus + oldltcgsec112_minus_jul + oldstcglossforltcg;
          } else {
            oldltcgsec112aincome_jul = 0;
          }
          //oldltcgsec112income after setoff for clculation
          if ((oldltcgsec112a + oldltcgsec112_minus + oldltcgsec112a_minus_jul + oldltcgsec112_minus_jul + oldstcglossforltcg) > 0) {
            oldltcgsec112aincome = oldltcgsec112a + oldltcgsec112_minus + oldltcgsec112a_minus_jul + oldltcgsec112_minus_jul + oldstcglossforltcg;
          } else {
            oldltcgsec112aincome = 0;
          }
          //Setoff & Carry Forward for new
          let newstcgsec111income = 0;
          let newstcgsec111aincome = 0;
          let newstcgsec111aincome_jul = 0;
          let newstcglossforltcg = 0;
          let newltcgsec112income = 0;
          let newltcgsec112income_jul = 0;
          let newltcgsec112aincome = 0;
          let newltcgsec112aincome_jul = 0;
          //newltcgsec111income after setoff for clculation
          if ((newstcgsec111 + newstcgsec111_jul + newstcgsec111a_minus + newstcgsec111a_minus_jul) > 0) {
            newstcgsec111income = newstcgsec111 + newstcgsec111_jul + newstcgsec111a_minus + newstcgsec111a_minus_jul;
          } else {
            newstcgsec111income = 0;
          }
          if ((newstcgsec111a_jul + newstcgsec111_minus + newstcgsec111_minus_jul + newstcgsec111a_minus) > 0) {
            newstcgsec111aincome_jul = newstcgsec111a_jul + newstcgsec111_minus + newstcgsec111_minus_jul + newstcgsec111a_minus;
          } else {
            newstcgsec111aincome_jul = 0;
          }
          if ((newstcgsec111a + newstcgsec111_minus + newstcgsec111_minus_jul + newstcgsec111a_minus_jul) > 0) {
            newstcgsec111aincome = newstcgsec111a + newstcgsec111_minus + newstcgsec111_minus_jul + newstcgsec111a_minus_jul;
          } else {
            newstcgsec111aincome = 0;
          }
          newstcglossforltcg = Math.min(newstcgsec111 + newstcgsec111a + newstcgsec111_jul + newstcgsec111a_jul, 0);
          //newltcgsec112income after setoff for clculation
          if ((newltcgsec112 + newltcgsec112a_minus + newltcgsec112_minus_jul + newltcgsec112a_minus_jul + newstcglossforltcg) > 0) {
            newltcgsec112income = newltcgsec112 + newltcgsec112a_minus + newltcgsec112_minus_jul + newltcgsec112a_minus_jul + newstcglossforltcg;
          } else {
            newltcgsec112income = 0;
          }
          //newltcgsec112income_jul after setoff for clculation
          if ((newltcgsec112_jul + newltcgsec112_minus + newltcgsec112a_minus + newltcgsec112a_minus_jul + newstcglossforltcg) > 0) {
            newltcgsec112income_jul = newltcgsec112_jul + newltcgsec112_minus + newltcgsec112a_minus + newltcgsec112a_minus_jul + newstcglossforltcg;
          } else {
            newltcgsec112income_jul = 0;
          }
          //newltcgsec112aincome_jul after setoff for clculation
          if ((newltcgsec112a_jul + newltcgsec112_minus + newltcgsec112a_minus + newltcgsec112_minus_jul + newstcglossforltcg) > 0) {
            newltcgsec112aincome_jul = newltcgsec112a_jul + newltcgsec112_minus + newltcgsec112a_minus + newltcgsec112_minus_jul + newstcglossforltcg;
          } else {
            newltcgsec112aincome_jul = 0;
          }
          //newltcgsec112income after setoff for clculation
          if ((newltcgsec112a + newltcgsec112_minus + newltcgsec112a_minus_jul + newltcgsec112_minus_jul + newstcglossforltcg) > 0) {
            newltcgsec112aincome = newltcgsec112a + newltcgsec112_minus + newltcgsec112a_minus_jul + newltcgsec112_minus_jul + newstcglossforltcg;
          } else {
            newltcgsec112aincome = 0;
          }
          //Old Normal Income & Special Income
          let oldspecialincome = oldstcgsec111aincome + oldltcgsec112income + oldltcgsec112aincome + oldstcgsec111aincome_jul + oldltcgsec112income_jul + oldltcgsec112aincome_jul + oldwinninglottery + oldvda;
          let oldnormalincome = oldroundoff - oldspecialincome;
          let oldtotalincome = oldnormalincome + oldspecialincome;
          let oldtaxonspecialincome = 0; // Math.max(oldstcgsec111aincome,0)*0.15 + Math.max(oldltcgsec112income,0)*0.2 + Math.max(oldltcgsec112aincome-(125000-Math.min(oldltcgsec112aincome_jul,125000)),0)*0.1 + Math.max(oldstcgsec111aincome_jul,0)*0.2 + Math.max(oldltcgsec112income_jul,0)*0.125 + Math.max(oldltcgsec112aincome_jul-125000,0)*0.125 + Math.max(oldwinninglottery,0)*0.3;
          let oldtaxonnormalincome = 0;
          let oldrebate = 0;
          let oldsurcharge = 0;
          let oldmarginalrelief = 0;
          let age = Number(document.getElementById('age').value);
          //Old Slab Rate benefit given to LTCG & STCG Special rates income not lottery
          if (oldnormalincome < 250000 && age < 60) {
            if (Math.max(oldltcgsec112, 0) > 250000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112, 0) - Math.max(250000 - oldnormalincome, 0), 0) * 0.2 + Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldstcgsec111aincome_jul, 0) * 0.2 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) > 250000) {
              oldtaxonspecialincome = Math.max(Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(250000 - oldnormalincome, 0), 0) * 0.2 + Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 250000) {
              oldtaxonspecialincome = Math.max(Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(250000 - oldnormalincome, 0), 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112income_jul, 0) + Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 250000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(250000 - oldnormalincome, 0), 0) * 0.125 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112aincome_jul - 125000, 0) + Math.max(oldltcgsec112income_jul, 0) + Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 250000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112aincome_jul - 125000, 0) - Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(250000 - oldnormalincome, 0), 0) * 0.125 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) - Math.max(oldltcgsec112aincome_jul - 125000, 0) - Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(250000 - oldnormalincome, 0), 0) * 0.1 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            }
          } else if (oldnormalincome < 300000 && age < 80) {
            if (Math.max(oldltcgsec112, 0) > 300000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112, 0) - Math.max(300000 - oldnormalincome, 0), 0) * 0.2 + Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldstcgsec111aincome_jul, 0) * 0.2 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) > 300000) {
              oldtaxonspecialincome = Math.max(Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(300000 - oldnormalincome, 0), 0) * 0.2 + Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 300000) {
              oldtaxonspecialincome = Math.max(Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(300000 - oldnormalincome, 0), 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112income_jul, 0) + Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 300000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(300000 - oldnormalincome, 0), 0) * 0.125 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112aincome_jul - 125000, 0) + Math.max(oldltcgsec112income_jul, 0) + Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 300000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112aincome_jul - 125000, 0) - Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(300000 - oldnormalincome, 0), 0) * 0.125 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) - Math.max(oldltcgsec112aincome_jul - 125000, 0) - Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(300000 - oldnormalincome, 0), 0) * 0.1 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            }
          } else if (oldnormalincome < 500000 && age > 80) {
            if (Math.max(oldltcgsec112, 0) > 500000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112, 0) - Math.max(500000 - oldnormalincome, 0), 0) * 0.2 + Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldstcgsec111aincome_jul, 0) * 0.2 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) > 500000) {
              oldtaxonspecialincome = Math.max(Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(500000 - oldnormalincome, 0), 0) * 0.2 + Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 500000) {
              oldtaxonspecialincome = Math.max(Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(500000 - oldnormalincome, 0), 0) * 0.15 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112income_jul, 0) + Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 500000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(500000 - oldnormalincome, 0), 0) * 0.125 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else if (Math.max(oldltcgsec112aincome_jul - 125000, 0) + Math.max(oldltcgsec112income_jul, 0) + Math.max(oldltcgsec112, 0) + Math.max(oldstcgsec111aincome_jul, 0) + Math.max(oldstcgsec111aincome, 0) > 500000) {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112aincome_jul - 125000, 0) - Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(500000 - oldnormalincome, 0), 0) * 0.125 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            } else {
              oldtaxonspecialincome = Math.max(Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) - Math.max(oldltcgsec112aincome_jul - 125000, 0) - Math.max(oldltcgsec112income_jul, 0) - Math.max(oldstcgsec111aincome, 0) - Math.max(oldstcgsec111aincome_jul, 0) - Math.max(oldltcgsec112, 0) - Math.max(500000 - oldnormalincome, 0), 0) * 0.1 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
            }
          } else {
            Math.max(oldstcgsec111aincome, 0) * 0.15 + Math.max(oldltcgsec112income, 0) * 0.2 + Math.max(oldltcgsec112aincome - (125000 - Math.min(oldltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(oldstcgsec111aincome_jul, 0) * 0.2 + Math.max(oldltcgsec112income_jul, 0) * 0.125 + Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(oldwinninglottery + oldvda, 0) * 0.3;
          }
          //Old Slab Rates
          if (age < 60 || age === "") {
            if (oldnormalincome <= 250000) {
              oldtaxonnormalincome = 0;
            } else if (oldnormalincome <= 500000) {
              oldtaxonnormalincome = 0.05 * (oldnormalincome - 250000);
            } else if (oldnormalincome <= 1000000) {
              oldtaxonnormalincome = 12500 + 0.2 * (oldnormalincome - 500000);
            } else {
              oldtaxonnormalincome = 112500 + 0.3 * (oldnormalincome - 1000000);
            }
          } else if (age >= 60 && age < 80) {
            if (oldnormalincome <= 300000) {
              oldtaxonnormalincome = 0;
            } else if (oldnormalincome <= 500000) {
              oldtaxonnormalincome = 0.05 * (oldnormalincome - 300000);
            } else if (oldnormalincome <= 1000000) {
              oldtaxonnormalincome = 10000 + 0.2 * (oldnormalincome - 500000);
            } else {
              oldtaxonnormalincome = 110000 + 0.3 * (oldnormalincome - 1000000);
            }
          } else { // age 80 and above
            if (oldnormalincome <= 500000) {
              oldtaxonnormalincome = 0;
            } else if (oldnormalincome <= 1000000) {
              oldtaxonnormalincome = 0.2 * (oldnormalincome - 500000);
            } else {
              oldtaxonnormalincome = 100000 + 0.3 * (oldnormalincome - 1000000);
            }
          }
          let oldtaxbeforerebate = oldtaxonnormalincome + oldtaxonspecialincome;
          //only LTCG112A benefit not given from rebate in old scheme but in new scheme no special income tax allowed
          if (oldtotalincome <= 500000) {
            oldrebate = Math.max(Math.min(oldtaxbeforerebate, 12500, oldtaxbeforerebate - Math.max(oldltcgsec112aincome - Math.min(125000, Math.max(oldltcgsec112aincome_jul, 0))) * 0.1 - Math.max(oldltcgsec112aincome_jul - 125000, 0) * 0.125), 0);
          } else {
            oldrebate = 0;
          }
          let oldtaxbeforesurcharge = oldtaxbeforerebate - oldrebate;
          let olddividend = Number(document.getElementById('oldregimedividendincome').textContent);
          let olddividendtax = (olddividend * oldtaxonnormalincome) / oldnormalincome;
          //Old Surcharge
          if ((oldnormalincome + oldwinninglottery - olddividendincome) > 50000000) {
            // 37% surcharge for income exceeding Rs. 5 crore
            oldsurcharge = (oldtaxonnormalincome + oldwinninglottery * 0.3 - olddividendtax) * 0.37 + (oldtaxonspecialincome + olddividendtax - oldwinninglottery * 0.3) * 0.15;
          } else if ((oldnormalincome + oldwinninglottery - olddividendincome) > 20000000) {
            // 25% surcharge for income exceeding Rs. 2 crore
            oldsurcharge = (oldtaxonnormalincome + oldwinninglottery * 0.3 - olddividendtax) * 0.25 + (oldtaxonspecialincome + olddividendtax - oldwinninglottery * 0.3) * 0.15;
          } else if ((oldtotalincome) > 10000000) {
            // 15% surcharge for income exceeding Rs. 1 crore
            oldsurcharge = oldtaxbeforesurcharge * 0.15;
          } else if ((oldtotalincome) > 5000000) {
            // 10% surcharge for income exceeding Rs. 50 lakh
            oldsurcharge = oldtaxbeforesurcharge * 0.10;
          } else {
            // No surcharge
            oldsurcharge = 0;
          }
          //Old Marginal Relief
          if (age < 60 || age === "") {
            if (oldtotalincome > 50000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 18515625) - (oldtotalincome - 50000000), 0);
            } else if (oldtotalincome > 20000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 6684375) - (oldtotalincome - 20000000), 0);
            } else if (oldtotalincome > 10000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 3093750) - (oldtotalincome - 10000000), 0);
            } else if (oldtotalincome > 5000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 1312500) - (oldtotalincome - 5000000), 0);
            } else {
              oldmarginalrelief = 0;
            }
          } else if (age >= 60 && age < 80) {
            if (oldtotalincome > 50000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 18512500) - (oldtotalincome - 50000000), 0);
            } else if (oldtotalincome > 20000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 6681500) - (oldtotalincome - 20000000), 0);
            } else if (oldtotalincome > 10000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 3091000) - (oldtotalincome - 10000000), 0);
            } else if (oldtotalincome > 5000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 1310000) - (oldtotalincome - 5000000), 0);
            } else {
              oldmarginalrelief = 0;
            }
          } else {
            if (oldtotalincome > 50000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 18500000) - (oldtotalincome - 50000000), 0);
            } else if (oldtotalincome > 20000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 6670000) - (oldtotalincome - 20000000), 0);
            } else if (oldtotalincome > 10000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 3080000) - (oldtotalincome - 10000000), 0);
            } else if (oldtotalincome > 5000000) {
              oldmarginalrelief = Math.max((oldtaxbeforesurcharge + oldsurcharge - 1300000) - (oldtotalincome - 5000000), 0);
            } else {
              oldmarginalrelief = 0;
            }
          }
          let oldtaxbeforecess = oldtaxbeforesurcharge + oldsurcharge - oldmarginalrelief;
          let oldcess = Math.max(0, oldtaxbeforecess * 0.04);
          let oldgrosstaxpayable = Math.max(oldtaxbeforecess + oldcess, 0);
          document.getElementById('oldregimenormalincometax').textContent = oldtaxonnormalincome.toFixed(2);
          document.getElementById('oldregimespecialincometax').textContent = oldtaxonspecialincome.toFixed(2);
          document.getElementById('oldregimetaxbeforerebate').textContent = oldtaxbeforerebate.toFixed(2);
          document.getElementById('oldregimerebate87a').textContent = oldrebate.toFixed(2);
          document.getElementById('oldregimetaxbeforesurcharge').textContent = oldtaxbeforesurcharge.toFixed(2);
          document.getElementById('oldregimesurcharge').textContent = oldsurcharge.toFixed(2);
          document.getElementById('oldregimemarginalrelief').textContent = oldmarginalrelief.toFixed(2);
          document.getElementById('oldregimetaxbeforecess').textContent = oldtaxbeforecess.toFixed(2);
          document.getElementById('oldregimecess').textContent = oldcess.toFixed(2);
          document.getElementById('oldregimegrosstaxpayable').textContent = oldgrosstaxpayable.toFixed(2);
          //new Normal Income & Special Income
          let newspecialincome = newstcgsec111aincome + newltcgsec112income + newltcgsec112aincome + newstcgsec111aincome_jul + newltcgsec112income_jul + newltcgsec112aincome_jul + newwinninglottery + newvda;
          let newnormalincome = newroundoff - newspecialincome;
          let newtotalincome = newnormalincome + newspecialincome;
          let newtaxonspecialincome = 0; //Math.max(newstcgsec111aincome,0)*0.15 + Math.max(newltcgsec112income,0)*0.2 + Math.max(newltcgsec112aincome-(125000-Math.min(newltcgsec112aincome_jul,125000)),0)*0.1 + Math.max(newstcgsec111aincome_jul,0)*0.2 + Math.max(newltcgsec112income_jul,0)*0.125 + Math.max(newltcgsec112aincome_jul-125000,0)*0.125 + Math.max(newwinninglottery,0)*0.3;
          let newtaxonnormalincome = 0;
          let newrebate = 0;
          let newsurcharge = 0;
          let newmarginalrelief = 0;
          //Slab Rates
          if (newnormalincome <= 300000) {
            newtaxonnormalincome = 0;
          } else if (newnormalincome <= 700000) {
            newtaxonnormalincome = 0.05 * (newnormalincome - 300000);
          } else if (newnormalincome <= 1000000) {
            newtaxonnormalincome = 20000 + 0.1 * (newnormalincome - 700000);
          } else if (newnormalincome <= 1200000) {
            newtaxonnormalincome = 50000 + 0.15 * (newnormalincome - 1000000);
          } else if (newnormalincome <= 1500000) {
            newtaxonnormalincome = 80000 + 0.2 * (newnormalincome - 1200000);
          } else {
            newtaxonnormalincome = 140000 + 0.3 * (newnormalincome - 1500000);
          }
          // LTCG & STCG benefit from exemption limit will be given not lottery in new regime
          if (newnormalincome < 300000) {
            if (Math.max(newltcgsec112, 0) > 300000) {
              newtaxonspecialincome = Math.max(Math.max(newltcgsec112, 0) - Math.max(300000 - newnormalincome, 0), 0) * 0.2 + Math.max(newstcgsec111aincome, 0) * 0.15 + Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(newstcgsec111aincome_jul, 0) * 0.2 + Math.max(newltcgsec112income_jul, 0) * 0.125 + Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(newwinninglottery + newvda, 0) * 0.3;
            } else if (Math.max(newltcgsec112, 0) + Math.max(newstcgsec111aincome_jul, 0) > 300000) {
              newtaxonspecialincome = Math.max(Math.max(newstcgsec111aincome_jul, 0) - Math.max(newltcgsec112, 0) - Math.max(300000 - newnormalincome, 0), 0) * 0.2 + Math.max(newstcgsec111aincome, 0) * 0.15 + Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(newltcgsec112income_jul, 0) * 0.125 + Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(newwinninglottery + newvda, 0) * 0.3;
            } else if (Math.max(newltcgsec112, 0) + Math.max(newstcgsec111aincome_jul, 0) + Math.max(newstcgsec111aincome, 0) > 300000) {
              newtaxonspecialincome = Math.max(Math.max(newstcgsec111aincome, 0) - Math.max(newstcgsec111aincome_jul, 0) - Math.max(newltcgsec112, 0) - Math.max(300000 - newnormalincome, 0), 0) * 0.15 + Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(newltcgsec112income_jul, 0) * 0.125 + Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(newwinninglottery + newvda, 0) * 0.3;
            } else if (Math.max(newltcgsec112income_jul, 0) + Math.max(newltcgsec112, 0) + Math.max(newstcgsec111aincome_jul, 0) + Math.max(newstcgsec111aincome, 0) > 300000) {
              newtaxonspecialincome = Math.max(Math.max(newltcgsec112income_jul, 0) - Math.max(newstcgsec111aincome, 0) - Math.max(newstcgsec111aincome_jul, 0) - Math.max(newltcgsec112, 0) - Math.max(300000 - newnormalincome, 0), 0) * 0.125 + Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(newwinninglottery + newvda, 0) * 0.3;
            } else if (Math.max(newltcgsec112aincome_jul - 125000, 0) + Math.max(newltcgsec112income_jul, 0) + Math.max(newltcgsec112, 0) + Math.max(newstcgsec111aincome_jul, 0) + Math.max(newstcgsec111aincome, 0) > 300000) {
              newtaxonspecialincome = Math.max(Math.max(newltcgsec112aincome_jul - 125000, 0) - Math.max(newltcgsec112income_jul, 0) - Math.max(newstcgsec111aincome, 0) - Math.max(newstcgsec111aincome_jul, 0) - Math.max(newltcgsec112, 0) - Math.max(300000 - newnormalincome, 0), 0) * 0.125 + Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(newwinninglottery + newvda, 0) * 0.3;
            } else {
              newtaxonspecialincome = Math.max(Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) - Math.max(newltcgsec112aincome_jul - 125000, 0) - Math.max(newltcgsec112income_jul, 0) - Math.max(newstcgsec111aincome, 0) - Math.max(newstcgsec111aincome_jul, 0) - Math.max(newltcgsec112, 0) - Math.max(300000 - newnormalincome), 0) * 0.1 + Math.max(newwinninglottery + newvda, 0) * 0.3;
            }
          } else {
            newtaxonspecialincome = Math.max(newstcgsec111aincome, 0) * 0.15 + Math.max(newltcgsec112income, 0) * 0.2 + Math.max(newltcgsec112aincome - (125000 - Math.min(newltcgsec112aincome_jul, 125000)), 0) * 0.1 + Math.max(newstcgsec111aincome_jul, 0) * 0.2 + Math.max(newltcgsec112income_jul, 0) * 0.125 + Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125 + Math.max(newwinninglottery + newvda, 0) * 0.3;
          }
          let newtaxbeforerebate = newtaxonnormalincome + newtaxonspecialincome;
          const selectedValue = document.querySelector('select[name="combo_list"]').value;
          //LTCG112A benefit not given from rebate
          //  if (newtotalincome<= 700000) {
          //    newrebate = Math.max(Math.min(newtotalincome,25000,newtaxbeforerebate-Math.max(newltcgsec112aincome-Math.min(125000,Math.max(newltcgsec112aincome_jul,0)))*0.1 - Math.max(newltcgsec112aincome_jul-125000,0)*0.125),0);
          // } else {
          if (selectedValue === "Govt_utility") {
            if (newnormalincome <= 700000) {
              newrebate = Math.max(Math.min(newtaxonnormalincome, 25000), 0);
            } else {
              newrebate = Math.max(Math.min(newtaxonnormalincome, 25000) - (newnormalincome - 700000), 0);
            }
          } else {
            if (newtotalincome <= 700000) {
              newrebate = Math.max(Math.min(newtaxbeforerebate, 25000, newtaxbeforerebate - Math.max(newltcgsec112aincome - Math.min(125000, Math.max(newltcgsec112aincome_jul, 0))) * 0.1 - Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125), 0);
            } else {
              newrebate = Math.max(Math.max(Math.min(newtaxbeforerebate, newtaxbeforerebate - Math.max(newltcgsec112aincome - Math.min(125000, Math.max(newltcgsec112aincome_jul, 0))) * 0.1 - Math.max(newltcgsec112aincome_jul - 125000, 0) * 0.125), 0) - (newtotalincome - 700000), 0);
            }
          }
          let newtaxbeforesurcharge = newtaxbeforerebate - newrebate;
          let newdividend = Number(document.getElementById('newregimedividendincome').textContent);
          let newdividendtax = (newdividend * newtaxonnormalincome) / newnormalincome;
          //new Surcharge
          if ((newnormalincome + newwinninglottery - newdividendincome) > 20000000) {
            // 25% surcharge for income exceeding Rs. 2 crore
            newsurcharge = (newtaxonnormalincome + newwinninglottery * 0.3 - newdividendtax) * 0.25 + (newtaxonspecialincome + newdividendtax - newwinninglottery * 0.3) * 0.15;
          } else if ((newtotalincome) > 10000000) {
            // 15% surcharge for income exceeding Rs. 1 crore
            newsurcharge = newtaxbeforesurcharge * 0.15;
          } else if ((newtotalincome) > 5000000) {
            // 10% surcharge for income exceeding Rs. 50 lakh
            newsurcharge = newtaxbeforesurcharge * 0.10;
          } else {
            // No surcharge
            newsurcharge = 0;
          }
          //new Marginal Relief
          if (newtotalincome > 20000000) {
            newmarginalrelief = Math.max((newtaxbeforesurcharge + newsurcharge - 6543500) - (newtotalincome - 20000000), 0);
          } else if (newtotalincome > 10000000) {
            newmarginalrelief = Math.max((newtaxbeforesurcharge + newsurcharge - 2959000) - (newtotalincome - 10000000), 0);
          } else if (newtotalincome > 5000000) {
            newmarginalrelief = Math.max((newtaxbeforesurcharge + newsurcharge - 1190000) - (newtotalincome - 5000000), 0);
          } else {
            newmarginalrelief = 0;
          }
          let newtaxbeforecess = newtaxbeforesurcharge + newsurcharge - newmarginalrelief;
          let newcess = Math.max(0, newtaxbeforecess * 0.04);
          let newgrosstaxpayable = Math.max(newtaxbeforecess + newcess, 0);
          document.getElementById('newregimenormalincometax').textContent = newtaxonnormalincome.toFixed(2);
          document.getElementById('newregimespecialincometax').textContent = newtaxonspecialincome.toFixed(2);
          document.getElementById('newregimetaxbeforerebate').textContent = newtaxbeforerebate.toFixed(2);
          document.getElementById('newregimerebate87a').textContent = newrebate.toFixed(2);
          document.getElementById('newregimetaxbeforesurcharge').textContent = newtaxbeforesurcharge.toFixed(2);
          document.getElementById('newregimesurcharge').textContent = newsurcharge.toFixed(2);
          document.getElementById('newregimemarginalrelief').textContent = newmarginalrelief.toFixed(2);
          document.getElementById('newregimetaxbeforecess').textContent = newtaxbeforecess.toFixed(2);
          document.getElementById('newregimecess').textContent = newcess.toFixed(2);
          document.getElementById('newregimegrosstaxpayable').textContent = newgrosstaxpayable.toFixed(2);
        }
        document.querySelectorAll("input, select, textarea, radio, checkbox").forEach(element => {
          element.addEventListener("input", CalculateAllIncome);
          element.addEventListener("change", CalculateAllIncome);
        });
        CalculateAllIncome();
      });
      //}else{
      //  alert("Don't waste your time for copying. This file is fully secured by Sumit Garg. If any query, Contact - Sumit Garg, Ph. No. - 9716804520, Email - SumitGarg100000@Gmail.com ");
      //    } 
      //   }   else      {       alert("Don't waste your time for copying. This file is fully secured by Sumit Garg. If any query, Contact - Sumit Garg, Ph. No. - 9716804520, Email - SumitGarg100000@Gmail.com ");     }
    </script>
    <!-- WhatsApp button -->
    <a href="https://wa.me/9716804520" class="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  </body>
  <footer>
    <div class="footer-links">
      <a href="#">📞 Ph : 9716804520</a>
      <a href="#">✉️ Email: Sumitgarg100000@gmail.com</a>
      </a>
      <a href="#">📍 Address: Rohini, Delhi-110086</a>
    </div>
    <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#"></a>
    </div>
  </footer>
</html>
