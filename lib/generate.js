var fs = require('fs');
const _d
=`d={
    template:true,
    style:true,
    data:{
        constructor(){

        }
    }
}
`;
const generateJS =(name)=>{
    return new Promise(done => {
        var text =_d;
        fs.writeFile(`./dmodules/${name}/${name}.js`, text, function(err) {
            if(err) { return console.log(err); }
            done();
        });
    })
}
const generateHTML =(name)=>{
    return new Promise( done =>{
        var text ="";
        fs.writeFile(`./dmodules/${name}/${name}.html`, text, function(err) {
            if(err) { return console.log(err); }
            done();
        });
    })
}
const generateSCSS =(name)=>{
    return new Promise( done => {
        var text =
`this {

}`;
        fs.writeFile(`./dmodules/${name}/${name}.scss`, text, function(err) {
            if(err) { return console.log(err); }
            done();
        });
    })
}
module.exports={
    generateJS,
    generateHTML,
    generateSCSS
}
