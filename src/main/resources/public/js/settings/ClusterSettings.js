var ClusterSetting = function () {
    this.gameServer = {
        protocol: 'ws',
        host: 'localhost',
        port: '8090',
        path: '/connect'
    };

    this.matchMaker = {
        protocol: 'http',
        host: 'localhost',
        port: '8080',
        path: '/matchmaker/join'
    };
};

ClusterSetting.prototype.gameServerUrl = function() {
    return makeUrl2(this.gameServer)
};

ClusterSetting.prototype.matchMakerUrl = function() {
    return makeUrl(this.matchMaker)
};

function makeUrl(data) {
    return data['protocol'] + "://" + data['host'] + ":" + data['port'] + data['path']
}

function makeUrl2(data) {
    return data['protocol'] + ":" + data['host'] + ":" + data['port'] + data['path']
}

var gClusterSettings = new ClusterSetting();
