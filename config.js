const yargs = require("yargs");

const argv = yargs
    .option({
        a:{
            demand: true,
            alias: "address",
            describe:"Address to fetch weather",
            string: true
        }
    })
    .help()
    .alias("help","h")
    .argv;

module.exports = argv;
