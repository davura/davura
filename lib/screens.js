const version = require('./version');
const white_spaces = num => {
    while ( num-- >= 0) console.log(" ");
}
const get_color = name => {
    const names = [
        "white",
        "cyan",
        "blue",
        "purple",
        "yellow",
        "green",
        "red",
        "gray",
        "blink"
    ];
    const codes = [
        "\x1b[5m", // white
        "\x1b[36m", // cyan
        "\x1b[94m", // blue
        "\x1b[35m", // purple
        "\x1b[33m", // yellow
        "\x1b[92m", // green
        "\x1b[91m", // red
        "\x1b[90m", // gray
    ];
    var index = names.indexOf(name);
    if (index < 0) return codes[0];

    return codes[index];
}
const set = (color, msg) => {
    const create = ($color, $msg) => {
        $color = get_color($color);
        return $color + $msg + $color
    }
    let message = create(color, msg);
    // Factory
    return {
        set(color, msg) {
            message += create(color, msg);
            return this;
        },
        print() {
            console.log(message);
        },
        get() {
            return message + "\n";
        }
    }
}
const about = () => {
    var log = "\n";
    log += set("yellow", "              %%%,%%%,").get();
    log += set("yellow", "            %%%%%/       %%%%").get();
    log += set("yellow", "          %%%%%%%%    %,     %").get();
    log += set("yellow", "        %%%%%%%%%%%   %%%%%%%%       ").set("red", "%%%%%      %%    %     %#  %(    %   %%%%/     %%").get();
    log += set("yellow", "      %%%%%%%%%%%%%    %%%    %      ").set("red", "%    %    %.%%   ,%    %   %(    %   %   %    ,% %").get();
    log += set("yellow", "      %%%%%%%%%%%%%%   (%%%   %      ").set("red", "%    %/   %  %    %#  %    %(    %   %%%%     %  %%").get();
    log += set("yellow", "      %%%%%%%%%%%%%%    %%%   ,#     ").set("red", "%    %   %    %    % %(    %#    %   %  %%   %.   %").get();
    log += set("yellow", "       %%%%%%%%%%%     %%%%#   %     ").set("red", "%%%%%   %%    %%   /%%      %%%%%    %   %% #%     %").get();
    log += set("yellow", "       %%%%%%%%%%%%%%%%%%%    (%").get();
    log += set("yellow", "        %%%%%%%%%%%%%%%%    ,%       ").set("purple", `version: ${version}`).get();
    log += set("yellow", "        %%%%%%%%%%%%%%%    %         ").set("blue", "https://davura.github.io").get();
    log += set("yellow", "         %%%%%%%%%%%%%%%%%           ").set("green", "BONARJA").get();
    log += set("yellow", "                 %%%%%%%").get();
    log += set("white", "").get();
    return log;
}
const print = (msg, color = "white") => set(msg, color).print();
module.exports = {
    about,
    print
}



      
     
    
       
   