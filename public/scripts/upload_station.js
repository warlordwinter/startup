// loadpdf.js
document.getElementById("pdf-file-input").addEventListener('change', function(event) {
    loadPDF();
});

function loadPDF() {
    const input = document.getElementById("pdf-file-input");

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const data = event.target.result;
            sendToServer(data); // Call the function to store in MongoDB
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert("Please select a PDF file.");
    }
}

function sendToServer(data) {
    fetch('/upload-pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
