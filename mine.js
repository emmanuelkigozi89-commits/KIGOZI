
function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;  
}
updateclock(); 
setInterval(updateclock, 1000);

// temperature conversion

 
const textbox = document.getElementById("textbox");
const tofahreanheit = document.getElementById("tofahreanheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(tofahreanheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5+32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = (temp -32)*(5/9);
        result.textContent = temp.toFixed(1) + "C";
    }
    else {
        result.textContent = "select a unit";
    }
}

function clickme(){
   document.getElementById('paragraph').textContent = "Micro Center is a premier American computer and electronics retail chain, operating 30 large brick-and-mortar stores across 20 US states. Famous for its massive inventory of over 25,000 tech products, it is the ultimate destination for PC builders, gamers, and IT professionals.Key highlights of Micro Center include:DIY PC Building: Known for its in-store  dedicated motherboards, and massive selection of PC components, cooling systems, and cases. They are famous for their in-store bundle deals (e.g., combined discounts on CPUs, Motherboards, and RAM).Vast Tech Selection: They stock everything from pre-built laptops, 3D printers, and networking gear to smart home devices, server hardware, and maker electronics.Price Matching: Micro Center offers Price Matching: Micro Center offers price matching against major competitors like Amazon and Newegg.You can browse their inventory, find deals, and locate the nearest store using the Micro";
   
}
// paragraph.toUppercase();


