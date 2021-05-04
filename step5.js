let botIntervalRandom = setInterval(function () {
    let funcList = [];
    for (let item in botRandom) {
        if (typeof botRandom[item] == 'function') { funcList.push(item); }
    }

    indexFunc = Math.floor(Math.random() * funcList.length);
    botRandom[funcList[indexFunc]]();
}
    , 1000);

    // clearInterval(botIntervalRandom)
    // use with botRandom in step4.js