// npm install xlsx first 

import * as XLSX from 'xlsx';

const convertExcelToJson = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json); // JSON data
    };
    reader.readAsArrayBuffer(file);
};


