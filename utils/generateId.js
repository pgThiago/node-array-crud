module.exports = function generateID(){
    return Math.random().toString(36).substring(2, 9)
}