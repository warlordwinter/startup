// upload_station.js

function storePDF() {
  const pdfInput = document.getElementById('pdf-file-input');
  const file = pdfInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('filename', file.name); // Add the filename to the form data

    fetch('/upload-pdf', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('PDF uploaded successfully:', data);
        // You can add code here to display a success message or update the UI.
      })
      .catch(error => {
        console.error('Error uploading PDF:', error);
        // Handle the error, display an error message, or log it.
      });
  } else {
    console.error('No file selected');
  }
}

function getPDF(fileName) {
  fetch('/get-pdf', {
    method: 'GET',
    body: JSON.stringify({ filename: fileName }),
  })
  .then(response => response.blob())
  .then(blob => {
    // Create a URL for the blob object
    const url = URL.createObjectURL(blob);
    
    // Create an <embed> element to display the PDF
    const embedElement = document.createElement('embed');
    embedElement.src = url;
    embedElement.type = 'application/pdf';
    embedElement.width = '100%';
    embedElement.height = '600px';
    
    // Append the <embed> element to the document body or a specific container
    document.body.appendChild(embedElement);
    
    console.log('PDF retrieved successfully');
  })
  .catch(error => {
    console.error('Error retrieving PDF:', error);
    // Handle the error, display an error message, or log it.
  });
}