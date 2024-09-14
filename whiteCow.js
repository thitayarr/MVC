class whiteCow{
    constructor(id, years, months) {
        this.id = id;
        this.years = years;
        this.months = months;
        this.milkCount = 0;
        this.lemonMilk = false;
        if (Math.random() < 0.005 * this.months){
            this.bsod = true;  
        }
        else {
            this.bsod = false;
        }
    }
    milkWithLemon() {
        this.lemonMilk = true;
    }
    milkCow() {
        if (this.lemonMilk) {
            return "Lemon Milk"
        }
        else if (this.bsod) {
            return "Soy Milk"
        }
        this.milkCount++;
        return "Plain Milk"
    }

}

