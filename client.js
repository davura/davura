#!/usr/bin/env node
const fs = require("fs");
const program = require("commander");
const { newProject, newDav, server, renameDav, removeDav } = require("./lib/functions");
const { link, unLink } = require("./lib/autoimport");
const { compile } = require("./lib/compile");
const { print } = require('./lib/screens');
const about = require("./lib/screens").about();

program.version( about, "-v, --version, v, version")
    .description("Davura client version");

program
    .command("version")
    .alias("v")
    .description("show Davura version")
    .action(() => {
        console.log(about);
    });

program
    .command("new <name>")
    .alias("n")
    .description("ini new Davura project")
    .action(name => {
        newProject(name).then(() => {
            print("green", "Project Created");
        });
    });

program
    .command("add <name>")
    .alias("a")
    .description("add new Davura component")
    .action(name => {
        newDav(name).then(() => {
            print("green", `added component ${name}`);
        });
    });

program
    .command("rename <oldname> <newname>")
    .alias("r")
    .description("rename Davura component")
    .action((oldname, newname) => {
        renameDav(oldname, newname)
            .then(() => {
                print("green", `renamed component "${oldname}" to "${newname}"`);
            })
            .catch(error => {
                print("red", error)
            });
    });

program
    .command("remove <name>")
    .alias("rm")
    .description("remove Davura component")
    .action(name => {
        removeDav(name);
    });

program
    .command("unlink <name>")
    .description("remove component from d-import")
    .action(name => {
        unLink(name);
    });

program
    .command("link <name>")
    .description("add component in d-import")
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
