module.exports = function reverse (n) {
    return Number(String(Math.abs(n)).split("").reverse().join(""));
}
