var myPet = {

    species: "buldog",
    name: "floki",
    legs: 4,
    friends:('Marko, Darko')
}
function myFuncton(obj){
    return obj;
}
console.log(myFuncton(myPet));

module.exports = {myPet, myFuncton};

