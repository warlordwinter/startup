const fs = require('fs');
const pdf = require('pdf-parse');

// Read the PDF file
function pdfToJson(file) {
    const filePath = '../../Wiley_Welch_Resume.pdf';
    const dataBuffer = fs.readFileSync(filePath);

    // Parse the PDF content
    pdf(dataBuffer).then(data => {
        // Extracted text content
        const textContent = data.text;

        // Convert text content to JSON (customize as needed)
        const jsonData = {
            filename: 'your_file.pdf',
            content: textContent
        };

        // Save JSON to a file or do something else with it
        fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));

        console.log('PDF content successfully converted to JSON');
    }).catch(error => {
        console.error('Error reading PDF:', error);
    });
}

pdfToJson();