// upload_station.js

function storePDF() {
    const pdfInput = document.getElementById('pdf-file-input');
    const file = pdfInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);
  
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
  