var friendsAge = [20, 22, 24, 26,];
var sonaliAge = friendsAge[2];
friendsAge[3] = 30;
var position = friendsAge.indexOf(30);
console.log(position);

friendsAge.push(28);
friendsAge.push(32);
console.log(friendsAge);

friendsAge.pop();
friendsAge.pop()
console.log(friendsAge);