var apiKey = '4f77067c-ca74-4bdf-8b19-b7cd199f4a05';
var lolApi = require('leagueapi');

var jf = require('jsonfile')
var util = require('util')

var file = 'test'

var allchamps = [];

lolApi.init(apiKey, 'na');

function forward(x, y) {
    allchamps.push(y);
    jf.writeFile('champData/' + y.name + '.json', y, function (err) {
        console.log(y.name)
    })
}

lolApi.getChampions(false, function (err, champs) {
    champs.map(function (champ) {
        lolApi.Static.getChampionById(champ.id, options, forward);
    });
});
