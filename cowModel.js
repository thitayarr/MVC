class Cow {
    constructor(id, color, years, months) {
        this.id = id;
        this.color = color;
        this.years = years;
        this.months = months;
        this.milkCount = 0;
        this.bsod = false;
    }
    milkCow() {

    if (this.color === 'White') {
        let wCow = new whiteCow(this.id, this.years, this.months);  
        console.log(wCow);
        
        type = cow.milkCow();  
        document.getElementById('milkMessage').innerText = type;  
    }
    else if (this.color === 'Brown') {
        let bCow = new brownCow(this.id, this.years, this.months);  
        type = bCow.milkCow();  
        document.getElementById('milkMessage').innerText = type;  
        }
    }
}