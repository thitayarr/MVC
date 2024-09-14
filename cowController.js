let cows = [];    
let selectedCow; 
let cow;

document.addEventListener('DOMContentLoaded', () => {
    loadCSV();
});

// Fetch CSV data and initialize the cows array
async function loadCSV() {
    try {
        const response = await fetch('cow_data.csv');
        const text = await response.text();
        cows = parseCSV(text);
    } catch (error) {
        console.error('Error loading CSV file:', error);
    }
}
// แปลงข้อมูล CSV เป็น Object
function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const cows = [];

    for (let i = 1; i < lines.length; i++) {
        const cowData = lines[i].split(',');
        if (cowData.length === headers.length) {
            const cow = new Cow(cowData[0], cowData[1], parseInt(cowData[2]), parseInt(cowData[3]));
            cows.push(cow);
        }
    }
    return cows;
}

// ตรวจสอบรหัสวัว
function checkCow() {
    const cowID = document.getElementById('cowID').value;
    
    if (!/^[1-9]\d{7}$/.test(cowID)) {
        document.getElementById('cowInfo').innerText = "Invalid Cow ID.";
        return;
    }

    selectedCow = cows.find(cow => cow.id === cowID);
    console.log(cows);

    if (!selectedCow) {
        document.getElementById('cowInfo').innerText = "Cow not found.";
        return;
    }

    showCowInfo();
    id = selectedCow.id
    color = selectedCow.color
    years = selectedCow.years
    months = selectedCow.months
    cow = new Cow (id, color, years, months)
    console.log(cow);
    
}

function showCowInfo() {
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('cowInfo').style.display = 'block';

    document.getElementById('cowDetails').innerText = `ID: ${selectedCow.id}, Color: ${selectedCow.color}, Years: ${selectedCow.years} Months, ${selectedCow.months} months`;

    if (selectedCow.color === 'White') {
        document.getElementById('lemonButton').style.display = 'block';
    } else {
        document.getElementById('lemonButton').style.display = 'none';
    }

    document.getElementById('resetButton').style.display = selectedCow.bsod ? 'block' : 'none';
}

// function backToInput() {
//     document.getElementById('cowDetails').innerText = `<label for="cowID">Enter Cow ID :</label><br>
//         <input type="text" id="cowID" maxlength="8"><br><br>
//         <button onclick="checkCow()">Submit</button>`
    
// }
