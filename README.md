# ip-info
[![](https://img.shields.io/badge/Licence-MIT-orange)]()
[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)]()


## About
This is a simple api made with `ExpressJs` which provides your ip information including geographic location, country, region, city, zipcode, time zone, and your ISP details.

## Features
- Get information about your ip
- Get your ip
- Get information about some other ip

## Documentation

### 1.Get your ip details

#### Request
```
https://ipfo.herokuapp.com/
```
#### Responce
NOTE: Please note that this example contains a random ip.
```json
{
  "status":"success",
  "country":"Switzerland",
  "countryCode":"CH",
  "region":"FR",
  "regionName":"Fribourg",
  "city":"Givisiez",
  "zip":"1762",
  "lat":46.813,
  "lon":7.13694,
  "timezone":"Europe/Zurich",
  "isp":"Centre Informatique Etat de Fribourg",
  "org":"Etat de Fribourg",
  "as":"AS25021 Centre Informatique Etat de Fribourg",
  "query":"156.25.88.4"
}
```
### 2.Get your ip

#### Request
```
https://ipfo.herokuapp.com/ip
```
#### Responce
NOTE: Please note that this example contains a random ip.
```json
{
  "status":"success",
  "date":"Fri Jul 16 2021 20:11:34 GMT+0000 (Coordinated Universal Time)",
  "ip":"156.25.88.4"
}
```
### 3.Get information about an ip or a domain

#### Request(1)
```
https://ipfo.herokuapp.com/189.69.89.5
```
#### Responce(1)
NOTE: Please note that this example contains a random ip.
```json
{
  "status":"success",
  "country":"Brazil",
  "countryCode":"BR",
  "region":"SP",
  "regionName":"Sao Paulo",
  "city":"São Paulo",
  "zip":"01000",
  "lat":-23.6283,
  "lon":-46.6409,
  "timezone":"America/Sao_Paulo",
  "isp":"TELEFÔNICA BRASIL S.A",
  "org":"Vivo",
  "as":"AS27699 TELEFÔNICA BRASIL S.A",
  "query":"189.69.89.5"
}
```
#### Request(2)
```
https://ipfo.herokuapp.com/apple.com
```
#### Responce(2)
NOTE: Please note that this example contains a random ip.
```json
{
  "status":"success",
  "country":"United States",
  "countryCode":"US",
  "region":"CA",
  "regionName":"California",
  "city":"Cupertino",
  "zip":"95014",
  "lat":37.3219,
  "lon":-122.03,
  "timezone":"America/Los_Angeles",
  "isp":"Apple Inc.",
  "org":"Apple Inc",
  "as":"AS714 Apple Inc.",
  "query":"17.253.144.10"
}
```

# Set up

### Requirements
- [Node](https://nodejs.org/en/)

### Local development
After the above requirements have been met:

<b>1. Clone this repository and `cd` into it</b>

```bash
git clone https://github.com/nsadisha/ip-info.git
cd ip-info
```
<br>

<b>2. Install dependencies</b>

```bash
npm install
```
<br>

<b>3. Run the server </b>

```bash
npm start
```
<br>

## Contributing
This project is open source and welcomes contributions.
<br>
[Visit the project on GitHub](https://github.com/nsadisha/ip-info)

## License
[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer
No warranty expressed or implied. Software is as is.
