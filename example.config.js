{
    "location": "http://127.0.0.1", // the default location for requests to be forwarded to if not specified by a domain. "http://127.0.0.1" is the default option
    "domains": { // object of domains to handle
        "example.com": { // key is the domain name including tld (e.g. '.com') but disincluding the 'www' prefix
            "port": 9001,
            "subdomains": {
                "blog": { // this will handle the subdomain "blog" aka blog.example.com
                    "port": 9009,
                    "subdomains": {
                        "javascript": { // this will handle the sub-subdomain "javascript" aka javascript.blog.example.com
                            "port": 9090,
                            "catchall": true // if catchall is true, all subdomains of this subdomain will be handled by the same location and port
                            // thus great.javascript.blog.example.com and bad.javascript.blog.example.com would both be directed to port 9090 in this example
                        }
                    }
                },
                "*" : { //this will handle all other subdomains of example.com
                    "port": 9010
                }
            }
        },
        "mysite.tech": {
            "port": 9002,
            "location": "http://123.123.123.10" //this will override the default location
            //no subdomains are specified so they will fall through the middleware by default
        }
    }
}
