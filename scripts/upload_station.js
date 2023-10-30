document.getElementById("pdf-file-input").addEventListener('change', function(event) {
    const selected_file = event.target.files[0];
    if (selected_file) {
        console.log('Selected file:', selected_file);
        console.log('Result: ', selected_file.result);
    } else {
        console.log('No file selected');
    }
});

function loadPDF() {
    const input = document.getElementById("pdf-file-input");
    const canvas = document.getElementById("pdf-canvas");

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const data = event.target.result;
            displayPDF(data, canvas);
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert("Please select a PDF file.");
    }
}

function displayPDF(data, canvas) {
    pdfjsLib.getDocument({ data }).promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            const viewport = page.getViewport({ scale: 1.5 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const context = canvas.getContext("2d");

            page.render({
                canvasContext: context,
                viewport: viewport,
            });
        });
    });
}
