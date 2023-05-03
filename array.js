const country = "Bangladesh";
const student = { name: 'Rahat', age: 18, class: 9 };

const friends = [10, 18, 16, 16, 17, 15];
const age18 = true;
function add(a, b) {
    return a + b;
}
console.log(typeof country);
console.log(typeof student);
console.log(Array.isArray(friends)); //important!
console.log(typeof add);
console.log(typeof age18);

const newFriends = [24, 19, 23, 25];
const allFriends = newFriends.concat(friends);
console.log(allFriends)