module.exports = TrafficCircle;
const ConfigMon = require('./config-monitor.js');
function TrafficCircle(config) {
    if (!(this instanceof TrafficCircle)) {
        return new TrafficCircle(config);
    }
    this.apiProxy = require('http-proxy').createProxyServer();
    this.configurator = new ConfigMon(config);
    this.domainHandler = (req, res, next) => {
        try {
            let target = this.getTarget(req.hostname, req.subdomains.slice());
            this.apiProxy.web(req, res, {target: target});
        } catch (e) {
            next();
        }
    };
    this.getTarget = (hostname, subdomains) => {
        let domainName = this.parseDomain(hostname);
        let config = this.configurator.config;
        let options = config.domains[domainName];
        let location = options.location || config.location;
        let port = options.port;

        while(subdomains.length)
        {
            let subdomain = subdomains.shift();
            if(options.catchall) break;
            options = options.subdomains[subdomain] || options.subdomains['*'];
            location = options.location || location;
            port = options.port || port;
        }
        return port ? location + ':' + port : location;
    };
    this.parseDomain = (hostname) => {
        let domain = '';
        if(typeof hostname === 'string') domain = hostname.split('.').slice(-2).join('.');
        return domain;
    };
}
