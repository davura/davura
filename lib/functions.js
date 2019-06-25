const fs = require("fs-extra");
const liveServer = require("live-server");
const { generateJS, generateHTML, generateSCSS } = require("./generate");
const { link, unLink } = require("./autoimport");
const version = require("./version");

const template = (title = "", lang = "en") =>
    `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link sass="./style.scss">
    <link d-import="
        app
    ">
</head>
<body>
    <app #app></app>
    <script src="./davura.min.js"></script>
</body>
</html>`;

const scss = () =>
`html,body{height: 100%;width: 100%;margin: 0;}
*{font-family:sans-serif}`;

const newProject = name => {
    return new Promise(done => {
        var dir = `./${name}`;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.copyFileSync(
                `${__dirname}/../dist/davura.min.js`,
                `./${name}/davura.min.js`
            );
            fs.writeFileSync(`./${name}/style.scss`, scss());
            fs.writeFileSync(`./${name}/index.html`, template(name));
            fs.mkdirSync(`${name}/dmodules`);
            fs.mkdirSync(`${name}/dmodules/app`);
            fs.writeFileSync(
                `./${name}/dmodules/app/app.html`,
`<div style="max-width: 400px;padding: 30px;color: #4e4e4e;">
    <h1> NEW DAVURA PROJECT </h1>
    <h4> version: {{this.version}} </h4>
</div>`
            );
            fs.writeFileSync(
                `./${name}/dmodules/app/app.scss`,
`this {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}`
            );
            fs.writeFileSync(
                `./${name}/dmodules/app/app.js`,
`d = {
    template: true,
    style: true,
    data: {
        version: "${version}"
    }
}`
            );

            done();
        }
    });
};
const newDav = name => {
    return new Promise(done => {
        var dir = "./dmodules";
        !fs.existsSync(dir) && fs.mkdirSync(dir);
        dir = dir + `/${name}`;
        // exist component ? 
        if(fs.existsSync(dir)){
            console.warn(`It already exist "${name}" component`);
            return done();
        } else {
            fs.mkdirSync(dir);
        }
        var generate = async n => {
            await generateJS(n);
            await generateHTML(n);
            await generateSCSS(n);
        };
        generate(name).then(() => {
            // auto import in index
            link(name);
            done();
        });
    });
};

const removeDav = name => {
    var url = `./dmodules/${name}`;
    if (!fs.existsSync(url)) {
        return console.warn("No exist component");
    }
    fs.removeSync(url);
    unLink(name, false);
    console.log(`removed component ${name}`);
}

const renameDav = (oldname, newname) => {
    return new Promise((done, reject) => {
        var dir = "./dmodules";

        /\/| |\\|\*|"|'|<|>/.test(newname) &&
            reject(
                `Invalid name "${newname}" you cant'n use symbol /\\?<>"* or spaces`
            );

        !fs.existsSync(dir) && reject("No exist dir component");
        dir += `/${oldname}`;
        !fs.existsSync(dir) &&
            reject(`No exist component ${oldname} in dir dmodules`);
        fs.existsSync(`${dir}/${oldname}.js`) &&
            fs.renameSync(`${dir}/${oldname}.js`, `${dir}/${newname}.js`);
        fs.existsSync(`${dir}/${oldname}.html`) &&
            fs.renameSync(`${dir}/${oldname}.html`, `${dir}/${newname}.html`);
        fs.existsSync(`${dir}/${oldname}.scss`) &&
            fs.renameSync(`${dir}/${oldname}.scss`, `${dir}/${newname}.scss`);
        fs.renameSync(dir, `./dmodules/${newname}`);
                
        // unlink old name
        unLink(oldname).then(()=>{
            // link new name
            link(newname);
            done();
        })
    });
};

const server = () => {
    var params = {
        port: 8080, // Set the server port. Defaults to 8080.
        host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
        root: "./", // Set root directory that's being served. Defaults to cwd.
        open: true, // When false, it won't load your browser by default.
        ignore: "", // comma-separated string for paths to ignore
        file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
        wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
        mount: [["./dmodules", "./"]], // Mount a directory to a route.
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        middleware: [
            function(req, res, next) {
                next();
            }
        ] // Takes anQ array of Connect-compatible middleware that are injected into the server middleware stack
    };
    liveServer.start(params);
};
module.exports = {
    newProject,
    newDav,
    server,
    renameDav,
    removeDav
};
