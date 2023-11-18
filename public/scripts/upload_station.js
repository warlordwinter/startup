// combined.js

document.getElementById('pdf-file-input').addEventListener('change', function(e) {
    var fileName = e.target.files[0].name;
    console.log(fileName);
    displayPDF(file);
});

async function displayPDF(file) {
    const reader = new FileReader();

    reader.onload = async function() {
        const pdfData = event.target.result;
        const pdfCanvas = document.getElementById('pdf-canvas');
        //render that PDF
        await renderPDF(pdfData, pdfCanvas);

        console.log('PDF rendered');
    };
}


async function getPDFs(filename) {
    //uploads the PDF to the server
    fetch('/upload-pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename }),
    });
}


// Function to send JSON data to the server
// async function sendToServer(data) {
//     try {
//         const response = await fetch('/upload-pdf', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ data }),
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Server response:', result);
//         } else {
//             console.error('Error sending data to the server:', response.status);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Function to get PDF data from the server
// async function getPDF() {
//     try {
//         const response = await fetch('/get-pdf', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('PDF data from the server:', result);
//             return result;
//         } else {
//             console.error('Error getting PDF data from the server:', response.status);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Assuming you have a button with id="pdf-file-input" in your HTML
// document.getElementById('pdf-file-input').addEventListener('change', async function (event) {
//     const file = event.target.files[0];

//     try {
//         const jsonData = await pdfToJson(file);
//         await sendToServer(jsonData);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// });
