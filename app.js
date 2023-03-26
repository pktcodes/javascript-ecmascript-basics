// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them.

/* String are iterable too */
const udemy = "udemy";

/* Arrays */
const boys = ["john", "bob", "peter", "kelly"];
const girls = ["anna", "susan"];
const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log("friends: ", friends);

// Never Reference them directly, since it will mutate original array
// const newFriends = friends;
// newFriends[0] = "katrina";

// console.log("newFriends ", newFriends);
// console.log("friends got mutated: ", friends);

// Always copy them, will create new and not mutate to original
const newFriends = [...friends];
newFriends[0] = "katrina";

console.log("newFriends:", newFriends);
console.log("friends:", friends);
