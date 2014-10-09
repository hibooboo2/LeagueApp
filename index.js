var apiKey = '4f77067c-ca74-4bdf-8b19-b7cd199f4a05';
var lolApi = require('leagueapi');

var jf = require('jsonfile')
var util = require('util')

var file = 'test'

var allchamps = [];

//console.log(JSON.stringify(lolApi));

lolApi.init(apiKey, 'na');

//lolApi.setRateLimit(10, 500);

lolApi.Summoner.getByID(20974566, function (err, summoner) {
    if (!err) {
        console.log(summoner);
    }
});
options = {}
lolApi.Static.getItemList(options, function (err, items) {
    jf.writeFile('champData/' + 'items' + '.json', items, function (err) {
        console.log(err)
    })
    //console.log(items);
});


lolApi.Init(apiKey); //Will default to NA
lolApi.Init(apiKey, region);

lolApi.setRateLimit(limitPer10s, limitPer10min);

lolApi.setEndpoint(newEndpoint);
lolApi.getEndpoint();

lolApi.getMapNames(callback);

lolApi.getRegions(callback);

lolApi.getQueues(callback);

lolApi.getChampions([freeToPlay], region, callback);
lolApi.getChampions([freeToPlay], callback);

lolApi.getRecentGames(summonerId, region, callback);
lolApi.getRecentGames(summonerId, callback);

lolApi.getLeagueData(summonerId, region, callback);
lolApi.getLeagueData(summonerId, callback);

lolApi.getLeagueEntryData(summonerId, region, callback);
lolApi.getLeagueEntryData(summonerId, callback);

lolApi.getTeams(summonerId, region, callback);
lolApi.getTeams(summonerId, callback);

lolApi.Stats.getPlayerSummary(summonerId, [season], region, callback);
lolApi.Stats.getPlayerSummary(summonerId, [season], callback);

lolApi.Stats.getRanked(summonerId, [season], region, callback);
lolApi.Stats.getRanked(summonerId, [season], callback);

lolApi.Summoner.getMasteries(summonerId, region, callback);
lolApi.Summoner.getMasteries(summonerId, callback);

lolApi.Summoner.getRunes(summonerId, region, callback);
lolApi.Summoner.getRunes(summonerId, callback);

lolApi.Summoner.getByID(summonerId, region, callback);
lolApi.Summoner.getByID(summonerId, callback);

lolApi.Summoner.getByName(name, region, callback);
lolApi.Summoner.getByName(name, callback);

lolApi.Summoner.listNamesByIDs(ids, region, callback);
lolApi.Summoner.listNamesByIDs(ids, callback);

options = {
    champData: 'allytips,blurb',
    version: '4.4.3',
    locale: 'en_US',
    dataById = true
}
//doesn't show all options
lolApi.Static.getChampionList(options, region, callback);
lolApi.Static.getChampionList(options, callback);

options = {
    champData: 'allytips,blurb',
    version: '4.4.3',
    locale: 'en_US',
    dataById = true
}
//doesn't show all options
lolApi.Static.getChampionById(champId, options, region, callback);
lolApi.Static.getChampionById(champId, options, callback);

options = {
    itemData: 'consumed'
}
//doesn't show all possible options
lolApi.Static.getItemById(itemId, options, region, callback);
lolApi.Static.getItemById(itemId, options, callback);

options = {
    itemListData: 'consumed'
}
lolApi.Static.getItemList(options, region, callback);
lolApi.Static.getItemList(options, callback);

lolApi.Static.getMasteryList(options, region, callback);
lolApi.Static.getMasteryList(options, callback);

lolApi.Static.getMasteryById(options, region, callback);
lolApi.Static.getMasteryById(options, callback);

lolApi.Static.getRealm(region, callback);
lolApi.Static.getRealm(callback);

lolApi.Static.getRuneList(options, region, callback);
lolApi.Static.getRuneById(id, options, callback);

lolApi.Static.getSummonerSpellList(options, region, callback);
lolApi.Static.getSummonerSpellById(id, options, callback);
