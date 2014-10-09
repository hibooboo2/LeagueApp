var apiKey = '4f77067c-ca74-4bdf-8b19-b7cd199f4a05';
var lolApi = require('leagueapi');

var jf = require('jsonfile');
var util = require('util');
var endPoints = require('./Riot_CDN_Endpoints.js');
var download = require('./cdn_Download.js');

//console.log(JSON.stringify(endPoints));
//endPoints.getChampSplash();
var file = 'test'

var allchamps = [];

lolApi.init(apiKey, 'na');

function forward(x, y) {
    allchamps.push(y);
    jf.writeFile('champData/' + y.name + '.json ', y, function (err) {
        console.log(y.name)
    })
};

function champsCallback(err, champs) {
    champs.map(function (champ) {
        lolApi.Static.getChampionById(champ.id, {
            champData: 'all'
        }, forward);
    });
};

//lolApi.getChampions(false, champsCallback);

function allChampHeads(err, champs) {
    champs.map(function (champ) {
        lolApi.Static.getChampionById(champ.id, {
            champData: 'all'
        }, function (err, champ) {
            allchamps.push(champ.name);
            downloadPicture(champ.image.full);
        });
    });
}

lolApi.getChampions(false, allChampHeads);

function downloadPicture(champName) {
    console.log(champName);
    download.download(endPoints.championPicturesEndpoint + champName, champName, function () {
        console.log("Downloaded:" + champName);
    });
};
