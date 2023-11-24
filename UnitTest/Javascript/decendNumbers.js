function decendNumbers(Num) {
    var decNum = Num.sort((a, b) => b - a);
    console.log(decNum);
    return decNum;
}

module.exports = decendNumbers;