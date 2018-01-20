# traffic-circle
Express Middleware to pass incoming request to alternative server location based on domain name

Make the most out of your DigitalOcean Droplet or other VPS by hosting multiple domain names from a single IP address.
Easily manage domains and subdomains by routing traffic to various ports.

Currently only supports http.

## Example Use:

```
const app = require('express')();
const PORT = process.env.PORT || 8000;

let TrafficCircle = require('traffic-circle');
let trafficCircle = new TrafficCircle({
  "location": "http://127.0.0.1",
  "example.com": {
    "port": 9001
  }
});

app.use(trafficCircle.domainHandler);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/404Error.html');
});

app.listen(PORT);

```

See example.config.js for more information on what the config object should look like.
Obviously this can be maintained in a json file to be imported as a config object.
