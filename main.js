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
            allchamps.push(champ);
            test();
        });
    })
};

function test(err, champs) {
    console.log(allchamps.map(function (champ) {
        return champ.recommended.map(function (blocks) {
            return blocks.blocks.map(function (block) {
                block.items.map(function (item) {
                    //                    console.log(item);
                    console.log(item.id);
                    return item.id;
                });
            })
        })
    }));
}

lolApi.getChampions(false, allChampHeads);

function downloadPicture(champName) {
    console.log(champName);
    download.download(endPoints.itemImages + champName, "TestingBox/Images/Items/" + champName, function () {
        console.log("Downloaded:" + champName);
    });
};
