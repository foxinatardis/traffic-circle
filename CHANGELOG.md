# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2018-01-28
### Added
- Support for config file path
- Support for config file monitoring
- Instantiation without calling 'new'

### Changed
- Updated README.md

### Removed
- location & domain options TrafficCircle instance

### Dependencies
- New
    - chokidar: ^2.0.0
- Previous
    - http-proxy: ^1.16.2

## 0.1.2 - 2018-01-20
### Added
- TrafficCirle constructor.
- Exposes
    - proxyServer instance,
    - domainHandler,
    - getTarget,
    - parseDomain,
    - location setting,
    - domain options

### Dependencies
- http-proxy: ^1.16.2

[0.1.2]: https://github.com/foxinatardis/traffic-circle/tree/v0.1.2
[0.0.1]: https://github.com/foxinatardis/traffic-circle/tree/v0.0.1
