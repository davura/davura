const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const loadImport = () => {
    return new Promise((done, reject)=>{
        if(fs.existsSync("./index.html")){
            var indexHtml = fs.readFileSync("./index.html", "utf8");
            const dom = new JSDOM(indexHtml);
            var dimport = dom.window.document.querySelector("link[d-import]");

            if(!dimport) {
                dimport = dom.window.document.createElement("link");
                dimport.setAttribute("d-import","");
                dom.window.document.querySelector("head").appendChild(dimport);
            }

            var importList = dimport.getAttribute("d-import").replace(/\n| /g, "");
            if (!importList) {
                importList = [];
            } else {
                importList = importList.split(",");
            }
            done({
                dimport,
                importList,
                dom
            });
        } else {
            console.warn("No exist index.html");
            reject("No exist index.html");
        }
    })
}
const unLink = (name, message = false) =>{
    return new Promise(done=>{
        loadImport().then( ({dimport, importList, dom}) => {
            var index = importList.indexOf(name);
            if (index < 0) {
                message && console.warn(`The d-import "${name}" has not been found`);
                return;
            }
            importList.splice(index, 1);
            var result = importList.join(",\n");
            dimport.setAttribute("d-import", result);
            fs.writeFileSync("./index.html", dom.serialize(), "utf8")
            message && console.log("Unlink completed");
            setTimeout(() => {
                done();
            }, 200);
        })
    })
}
const link = (name, message = false) =>{
    return new Promise(done=> {
        loadImport().then( ({dimport, importList, dom}) => {
            var index = importList.indexOf(name);
            if (index >= 0) {
                message && console.warn(`The d-import "${name}" it already exists`);
                return;
            }
            importList.push(name);
            var result = importList.join(",\n");
            dimport.setAttribute("d-import", result);
            fs.writeFileSync("./index.html", dom.serialize(), "utf8")        
            message && console.log("Link completed");
            setTimeout(() => {
                done();
            }, 200);
        })
    })
}
module.exports = {
    unLink,
    link
}