//model
//array เก็บข้อมูล
const houses = [
    {
        code: "SM",
        name: "Smith"
    },
    {
        code: "JD",
        name: "Jordan"
    },
    {
        code: "BL",
        name: "Billy"
    }
] 
//const ประกาศ function
const getFamily = houseCode => {
    //switch รับข้อมูลจาก houseCode คือ get ว่าให้แสดงข้อมูลตามนี้
    switch(houseCode) {
        case "SM":
            return ["Mario", "Karen", "Tyler"];
        case "JD":
            return ["Deen", "Jasmin"];
        case "BL":
            return ["Irish"];
        default:
            return [];
    }
}
// return html option element/tag รับพารามิเตอร์
const createOptionElement = (text, value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element
}
// listที่แสดงรายชื่อข้อมูล
const createLiElement = text => {
    const element = document.createElement("Li");
    element.textContent = text;
    return element;
}

const houseElement = document.querySelector("select");
// fill the list
//foreach
houses.forEach(house => {
    houseElement.appendChild(createOptionElement(house.name, house.code));
})

//controller
//เอาoption ให้ match vale เซ็คว่าตัวที่เราเลือกแมชกับข้างบนมั้ย ถ้าแมชก็ให้ return ขื่อคนในครอบครัวไป
//รับ event ที่ user ส่งเข้ามา
houseElement.addEventListener("change", e => {
    const fams = getFamily(e.target.value);
    const famsElement = document.getElementById("family");

    famsElement.innerHTML = "";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam));
    })
})