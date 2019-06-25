#!/usr/bin/env node
const fs = require("fs");
const program = require("commander");
const { newProject, newDav, server, renameDav, removeDav } = require("./lib/functions");
const { link, unLink } = require("./lib/autoimport");
const { compile } = require("./lib/compile");
const version = require("./lib/version");

program.version(version).description("Davura Client");

program
    .command("new <name>")
    .alias("n")
    .description("ini new Davura project")
    .action(name => {
        newProject(name).then(() => {
            console.info("Project Created");
        });
    });

program
    .command("add <name>")
    .alias("a")
    .description("add new Davura component")
    .action(name => {
        newDav(name).then(() => {
            console.info(`added component ${name}`);
        });
    });

program
    .command("rename <oldname> <newname>")
    .alias("r")
    .description("rename Davura component")
    .action((oldname, newname) => {
        renameDav(oldname, newname)
            .then(() => {
                console.info(`renamed component "${oldname}" to "${newname}"`);
            })
            .catch(error => {
                console.info(error);
            });
    });

program
    .command("remove <name>")
    .alias("rm")
    .description("remove Davura component from d-module")
    .action(name => {
        removeDav(name);
    });

program
    .command("unlink <name>")
    .action(name => {
        unLink(name);
    });

program
    .command("link <name>")
    .action(name => {
        link(name);
    });

program
    .command("server")
    .alias("s")
    .description("start live server")
    .action(() => {
        server();
    });

program
    .command("compile [file]")
    .alias("c")
    .description("compile project")
    .action(file => {
        compile(file);
    });

program.parse(process.argv);
