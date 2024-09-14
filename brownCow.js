class brownCow{
    constructor(id, years, months) {
        this.id = id;
        this.years = years;
        this.months = months;
        this.milkCount = 0;
        if (Math.random() < 1 * this.years){
            this.bsod = true;  
        }
        else {
            this.bsod = false;
        }
    }
    milkCow() {
        if (this.bsod) {
            return "Almond Milk"
        }
        this.milkCount++;
        return "Chocolate Milk"
    }

}

