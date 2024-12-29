// npm install papaparse first

import Papa from 'papaparse';


const convertCsvToJson = (file) => {
    Papa.parse(file, {
        header: true, 
        complete: (results) => {
            const jsonData = results.data; 
            console.log(jsonData); 
            displayJsonData(jsonData); 
        },
        error: (error) => {
            console.error('Error parsing CSV:', error);
        },
    });
};


const displayJsonData = (data) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = JSON.stringify(data, null, 2); 
};


document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        convertCsvToJson(file); 
    }
});
