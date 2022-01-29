# SpaceX CLI
🚀 CLI tool for [SpaceX-API](https://github.com/r-spacex/SpaceX-API)

Auth required: ``False``

## ⬇️ Installation
```bash
npm i -g @orhanemree/spacex-cli
```

## 🔎 Usage
* Open your favorite terminal end run command:

```
spacex <route> <query> <option> <filename>
```

* Use parameters ``key=value`` without space!

Routes:  ``capsules``, ``company``, ``cores``,  ``crew``,  ``dragons``,  ``landpads``,  ``launchpads``,  ``payloads``,  ``roadster``,  ``rockets``,  ``ships``,  ``starlink``,  ``history``

Query: accepts any valid MongoDB find() query, documented [here](https://docs.mongodb.com/manual/tutorial/query-documents/).

Options: ``select``,  ``sort``,  ``offset``,  ``page``,  ``limit``,  ``pagiantion``,  ``populate``

Filename: saves response as json file.

* Visit [SpaceX-API Docs](https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md)  for more. 

## 💻 Used Technology
* Node

## 📃 License
* This project licensed under the [Apache License 2.0](https://github.co**m/orhanemree/spacex-cli/blob/master/LICENSE).