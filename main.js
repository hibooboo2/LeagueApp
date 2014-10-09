var apiKey = '4f77067c-ca74-4bdf-8b19-b7cd199f4a05';
var lolApi = require('leagueapi');

var jf = require('jsonfile')
var util = require('util')

var file = 'test'

var allchamps = [];

lolApi.init(apiKey, 'na');
