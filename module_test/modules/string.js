const stringModule = (str) => {

    const strArr = str.split("");
    const strSet = new Set(strArr);
    const uniqueArr = Array.from(strSet);
    return uniqueArr.join("");

};

module.exports = stringModule;