// npm install exceljs first 
import ExcelJS from 'exceljs';

const convertExcelToJson = async (file) => {
    const workbook = new ExcelJS.Workbook();
    const buffer = await file.arrayBuffer();
    await workbook.xlsx.load(buffer);
    const worksheet = workbook.getWorksheet(1);
    const rows = [];
    worksheet.eachRow((row) => {
        rows.push(row.values);
    });
    console.log(rows); // JSON-like structure
};

