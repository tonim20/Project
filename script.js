const bulb = document.querySelector("#bulb");
const btn = document.querySelector("#btn");
let situation = 0;
btn.addEventListener("click", function () {
  if (situation == 0) {
      bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "Off";
    situation = 1;
    
  }
  else {
    bulb.style.backgroundColor = "transparent";
    btn.innerHTML = "On";
    situation = 0;
  }
});




//new test
function getArea(width, height) {
    var area = width*height;
    return area;
}
document.write("The area of the wall is ");
document.write(getArea(3,2));
let hotel = {
  name: 'Quay',
  rooms: 40,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};
hotel.name = 'tonim';
hotel['rooms'] = 23;
delete hotel.gym;
hotel.name = '';
let elName = document.getElementById("hotelName");
elName.textContent = hotel.name;
let elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();
document.write("Hola!")
console.log(hotel);
elName.innerText = "hamari adhuri kahani.";
let entrance = prompt("enter your marks.");
if(entrance < 33){
  alert("You're failed.");
}
else{
  alert("You're passed.")
}
const width = 600;
let shape = {width: 300};
let showWidth = function() {
  document.write(this.width);
};
