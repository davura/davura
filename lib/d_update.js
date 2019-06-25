// PROCESS {{}} in d-update
var _id = 0;
const get_id = () => `_${_id++}${Math.random().toString(36).substr(2, 10)}`;

const unscape_string = function(s) {
    var re = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
    var unescaped = {
      '&amp;': '&',
      '&#38;': '&',
      '&lt;': '<',
      '&#60;': '<',
      '&gt;': '>',
      '&#62;': '>',
      '&apos;': "'",
      '&#39;': "'",
      '&quot;': '"',
      '&#34;': '"'
    };
    return s.replace(re, function (m) {
      return unescaped[m];
    });
}
const process_update = (val, babel, functions) => {
    var id = get_id();
    val = unscape_string(val);
    var result = babel(val);

    functions[id] = result;
    return id;
}

module.exports = {
    process_update
}