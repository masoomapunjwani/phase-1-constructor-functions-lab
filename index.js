function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

const scoter = new Scooter(2022,"blue", "honda");
scoter;

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

const driver = new Driver("ali", 45, "2-years");
driver;

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

const answer = new PickupLocation("delhi", "mombasa");
answer;