var student1 = {id: 132, phone: 172978, name: 'Alamin'};
var student2 = {id: 213, phone: 190699, name: 'Tanvir'};

var phone = student1.phone;
var phoneNo = student2['phone'];

student2.id = 545;
student1.phone = 182312;
student1.cinema = 'ogni';
student2.result = 4.25;

console.log(student1);
console.log(student2);
console.log(phone);
console.log(phoneNo);   