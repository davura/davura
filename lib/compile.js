const fs = require("fs-extra");
const BABEL = require("@babel/core");
const microsass = require("microsass");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { process_update } = require("./d_update");
const path = require('path');
const d_updated_functions = {}


const setFile = (code, insert, type) => {
    var re = type === "template" ? 
        /template(.[^-"=e,:pxem%$()_{}<>\[\].;]*)(true|false)/gm : 
        /style(.[^-"=e,:pxem%$()_{}<>\[\].;]*)(true|false)/gm;

    var select = code.match(re)[0];

    insert = insert ? "`" + insert + "`" : `""`;
    return code.replace(select,`${type}: ${insert}`);
};

const setEl = (code, el) => {
    var re = /{([\s\S]*?)data/;
    var complement = code.match(re)[1];
    return code.replace(complement, `el: "${el}",${complement}`);
};

let modules_result = "D(";
let isFirst = true;

const ignore = () => {
    var list = ["compile","dmodules",".gitignore"];
    var file = "./.gitignore";
    if(fs.existsSync(file)){
        file = fs.readFileSync(file, "utf8").split(/\n|\r/g);
        list = list.concat(file);
    }
    return list;
}

const regex = (regex, str, callback) =>{
    var grupos; var result=[];
    while ((grupos = regex.exec(str)) !== null) { 
        result.push({
            type:grupos[0][0],
            val:grupos[1] || grupos[2]
        }); 
    }
    result.forEach(item => callback(item.val, item.type) );
}

const compileMicrosass = dom => {
    var list = [];
    var styles = "";
    dom.window.document.querySelectorAll("link[sass]").forEach(item => {
        item.getAttribute("sass").replace(/\n| /g, "").split(",").forEach(function(x){
            list.push(x);
        });
        item.remove();
    });
    list.forEach(x =>{
        if (fs.existsSync(x)) {
            var scss = fs.readFileSync(x, "utf8");
            styles += microsass.convert(scss);
        }
    })
    if (styles) {
        var style = dom.window.document.createElement("style");
        style.innerHTML = styles;
        dom.window.document.querySelector("head").appendChild(style);
    }

    list = list.map(x=>{
        if(x.indexOf("./") === 0){
            x = x.replace("./","");
        }
        return x;
    })

    return {html: dom.serialize(), styleList: list};
}

const babel = code => (
    BABEL.transform(code, {
        minified: true,
        presets: [
            require('@babel/preset-env'),
        ],
        plugins: [
            require("@babel/plugin-transform-template-literals"),
            [require("@babel/plugin-transform-modules-commonjs"), {
                strictMode: false
            }],
        ],
        comments: false 
    }).code
);

const old_process_literals = text => {
    regex(/`([\s\S]*)`/g, text, match =>{
        var result = "";
        var item = match.replace(/'/g,`'+"'"+'`);
    
        regex(/#\${([\s\S][^}]*)}|\${([\s\S][^}]*)}/g, item, (val, type) => {
            if (type === "#") {
                item = item.replace("#$"+"{"+val+"}",`#'+${val}+'`);
            } else {
                item = item.replace("$"+"{"+val+"}",`'+${val}+'`);
            }
        });
    
        var list = item.split(/\r?\n|\r/);
        list.forEach((x, index) =>{
            result += `'${x}'`;
            if (index !== list.length -1){
                result += "+";
            }
        })
        text = text.replace("`"+match+"`", result);
    })
    return text;
}

process_dupdate = htmldom => {
    htmldom.window.document.querySelectorAll('[d-update]').forEach(x => {
        var html = x.innerHTML;
        regex(/{{([\s\S]*)}}/g, html, (val, type) => {

            var id = process_update(val, babel, d_updated_functions);
            x.innerHTML = html.replace(`{{${val}}}`, `{{DAVURA.get_dupdate('${id}', __data__)}}`);
        })
    });
}

const compile = (file = "index") => {
    var re = /d-import=(.[\s\S]*?)"/g;
    file = `./${file}.html`;
    const fileHtml = fs.readFileSync(file, "utf8");
    var dimport = fileHtml.match(re);
    let compileError = false;
    if (dimport.length) {
        dimport = dimport[0]
            .split('"')[1]
            .replace(/↵/g, "")
            .replace(/\n/g, "")
            .replace(/ /g, "")
            .split(",");
        dimport.forEach(dav => {
            console.info(`Compile component: ${dav}`);
            var dir = `./dmodules/${dav}`;
            let html = `${dir}/${dav}.html`;
            let scss = `${dir}/${dav}.scss`;
            let js = `${dir}/${dav}.js`;

            html = fs.existsSync(html) ? fs.readFileSync(html, "utf8") : false;
            scss = fs.existsSync(scss) ? fs.readFileSync(scss, "utf8") : false;
            js = fs.existsSync(js) ? fs.readFileSync(js, "utf8") : false;
            js = setEl(js, dav);

            // compile scss
            var css = "";
           
            try {
                davura = eval(js);
            } catch (error) {
                compileError = true;
                return console.error(`Syntax error in component: ${dav}`);
            }

            if (davura.style) {
                scss = scss.replace(/this/g,"this&%#");
                css = microsass.convert(scss);
            }

            if (html) {
                // CREATE _cdref in all #
                const htmldom = new JSDOM(html);
                htmldom.window.document.querySelectorAll('*').forEach(x => {
                    Array.prototype.forEach.call(x.attributes, attr => {
                        attr = attr.name;
                        if (attr.indexOf("#") === 0) {
                            x.setAttribute("_ddref", attr.slice(1,attr.length));
                        }
                    });
                });
                process_dupdate(htmldom);
                html = htmldom.window.document.querySelector("body").innerHTML;
            }

            !css && (css = " ");

            js = setFile(js, html, "template");
            js = setFile(js, css, "style");

            js = babel(js);

            // remove end ;
            if (js[js.length - 1] === ";") {
                js = js.slice(0, js.length - 1);
            }

            // remove d = 
            var match = js.match(/d(.[\s\S]*?){/)[0];
            js = js.replace(match, "{");

            // add ,
            if (!isFirst) {
                modules_result += "," + js;
            } else {
                isFirst = false;
                modules_result += js;
            }
        });
        modules_result += ");";

        fs.existsSync("./compile") && fs.removeSync("./compile");
        fs.mkdirSync("./compile");

        modules_result = 'window["_DAVURA_IS_COMPILED"]=true;' + modules_result;

        // add d_update_functions
        modules_result = `DAVURA.d_update_list=${JSON.stringify(d_updated_functions)};${modules_result}`;

        fs.writeFileSync("./compile/d_modules.js", modules_result, "utf8");

        // process file.html to remplace d-import and load c_modules.js
        const dom = new JSDOM(fileHtml);
        dom.window.document.querySelector("link[d-import]").remove();
        const script = dom.window.document.createElement("script");
        script.src = "./d_modules.js";
        dom.window.document.querySelector("body").appendChild(script);

        var {html, styleList} = compileMicrosass(dom);

        var ignoreList = ignore();

        // move other files
        fs.readdirSync("./").forEach(x => {
            if(!ignoreList.includes(x) && x !== file && !styleList.includes(x) ){
                fs.copySync(x, "./compile/" + x);
            }
        });
        
        fs.writeFileSync(`./compile/${file}`, html, "utf8");
        !compileError && console.info("Compile Successful");
    }
};
module.exports = {
    compile
};
