# 🚀 SpaceX CLI
CLI tool for [SpaceX-API](https://github.com/r-spacex/SpaceX-API)

Auth required: ``False``

## ⬇️ Installation
```bash
npm i -g @orhanemree/spacex-cli
```

## 🧐 Usage
* Open your favorite terminal and run command:

```
spacex <route> <query> <option> <filename>
```

* Use parameters ``key=value`` without space!

Routes:  ``capsules``, ``company``, ``cores``,  ``crew``,  ``dragons``,  ``landpads``,  ``launchpads``,  ``payloads``,  ``roadster``,  ``rockets``,  ``ships``,  ``starlink``,  ``history``

Query: accepts any valid MongoDB find() query, documented [here](https://docs.mongodb.com/manual/tutorial/query-documents/).

Options: ``select``,  ``sort``,  ``offset``,  ``page``,  ``limit``,  ``pagiantion``,  ``populate``

Filename: saves response as json file.

* Visit [SpaceX-API Docs](https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md)  for more. 

## 🔎 Examples
``$ spacex capsules water_landings=2 limit=2``

### Result:

```json
[
  {
    reuse_count: 1,
    water_landings: 2,
    land_landings: 0,
    last_update: 'Location and status unknown',
    launches: [ '5eb87cf3ffd86e000604b345', '5eb87d16ffd86e000604b364' ],
    serial: 'C110',
    status: 'active',
    type: 'Dragon 1.1',
    id: '5e9e2c5cf3591885d43b266d'
  },
  {
    reuse_count: 1,
    water_landings: 2,
    land_landings: 0,
    last_update: 'Location and status unknown',
    launches: [ '5eb87cf9ffd86e000604b349', '5eb87d1cffd86e000604b369' ],
    serial: 'C111',
    status: 'active',
    type: 'Dragon 1.1',
    id: '5e9e2c5cf359183bb73b266e'
  }
]
```
--- 

``$ spacex crew agency=ESA``

### Result:

```json
[
  {
    name: 'Thomas Pesquet',
    agency: 'ESA',
    image: 'https://imgur.com/5iColcZ.png',
    wikipedia: 'https://en.wikipedia.org/wiki/Thomas_Pesquet',
    launches: [ '5fe3af58b3467846b324215f' ],
    status: 'active',
    id: '5fe3bc3db3467846b324218b'
  },
  {
    name: 'Matthias Maurer',
    agency: 'ESA',
    image: 'https://imgur.com/yBPw4mX.png',
    wikipedia: 'https://en.wikipedia.org/wiki/Matthias_Maurer',
    launches: [ '5fe3b15eb3467846b324216d' ],
    status: 'active',
    id: '5fe3c5f6b3467846b324219a'
  }
]
```

## 💻 Used Technology
* Node

## 📃 License
* This project licensed under the [Apache License 2.0](https://github.com/orhanemree/spacex-cli/blob/master/LICENSE).