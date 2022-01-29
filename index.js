#!/usr/bin/env node

import chalk from "chalk";
import axios from "axios";
import path from "path";
import fs from "fs";

const argv = process.argv.slice(2);
const BASE_URL = "https://api.spacexdata.com/v4";

let filename = false;

const data = {
    "query": {},
    "options": {}
}

if (argv.length === 0){
    console.log();
    console.log("🚀 spacex-cli\nCLI tool for SpaceX-API");
    console.log(`Visit ${chalk.blue.underline("https://github.com/orhanemree/spacex-cli")} for docs.`);
    process.exit(0);
}

const options = ["select", "sort", "ofsset", "page", "limit", "pagination", "population"];
if (argv.length > 1){
    for (let i = 1; i < argv.length; i++){
        const parameters = argv[i].split("=");
        if (options.includes(parameters[0])){
            data.options[parameters[0]] = parameters[1]
        } else if (parameters[0] === "filename"){
            filename = parameters[1];
        } else {
            data.query[parameters[0]] = parameters[1]
        }
    }
}

axios.post(`${BASE_URL}/${argv[0]}/query`, data)
    .then(response => {
        console.log();
        console.log(chalk.green("SUCCESS: 200 OK"));
        if (filename) {
            fs.writeFileSync(`${path.join(path.resolve(), "/", filename)}.json`, JSON.stringify(response.data.docs, null, 2));
            console.log(`${filename}.json created succesfully!`)
        } else {
            console.log(response.data.docs);
        }
    })
    .catch(err => {
        console.log();
        console.log(chalk.red("ERROR:", err?.response?.status ?? "something went wrong", err?.response?.statusText));
    });
