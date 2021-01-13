function userIdGen(){
    return Math.floor(Math.random()*10000) + 1;
}

module.exports.userIdGen = userIdGen;