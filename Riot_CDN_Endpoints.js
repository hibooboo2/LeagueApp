var endPoints = {};
module.exports = endPoints;
endPoints.versionNumber = "4.17.1/";
endPoints.baseLeagueCDN = "http://ddragon.leagueoflegends.com/cdn/";
endPoints.imgEndPoint = endPoints.baseLeagueCDN + endPoints.versionNumber + "img/";
endPoints.championPicturesEndpoint = endPoints.imgEndPoint + "champion/"; //Pngs
endPoints.passivePicturesEndPoint = endPoints.imgEndPoint + "passive/"; //Pngs
endPoints.skillsPicturesEndPoint = endPoints.imgEndPoint + "spell/"; //Pngs
endPoints.skinSplashEndPoint = endPoints.baseLeagueCDN + "img/champion/splash/"; //Jpgs

endPoints.getChampSplash = function () {

};
