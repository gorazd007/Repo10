var myClothes = {

    hat: "Fedora",
    shirt: "Nike",
    shues: "Converse"
};

function myfunction(myClothes) {

    var hatValue = myClothes.hat; 
    var shirtValue = myClothes.shirt;
    var shuesValue = myClothes.shues;
    return { hatValue, shirtValue, shuesValue };
}

console.log(myfunction(myClothes));

modele.exports = myfunction(myClothes);
 