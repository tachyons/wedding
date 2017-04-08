var greeting_text = "__  __ _  __  _  ____  ____   ____  _   _    __    __ ____  ____   ____      ____   __  _   __   ____   _     _ \r\n\\ \\\/ \/| ||  \\| || ===|| ===| (_ (_`| |_| |   \\ \\\/\\\/ \/| ===|| _) \\ (_ (_`    \/ () \\ |  \\| |__) | \/ () \\ | |__ | |\r\n \\__\/ |_||_|\\__||____||____|.__)__)|_| |_|    \\_\/\\_\/ |____||____\/.__)__)   \/__\/\\__\\|_|\\__|\\___\/\/__\/\\__\\|____||_|"

var help_text = "__  __ _  __  _  ____  ____   ____  _   _    __    __ ____  ____   ____      ____   __  _   __   ____   _     _ \r\n\\ \\\/ \/| ||  \\| || ===|| ===| (_ (_`| |_| |   \\ \\\/\\\/ \/| ===|| _) \\ (_ (_`    \/ () \\ |  \\| |__) | \/ () \\ | |__ | |\r\n \\__\/ |_||_|\\__||____||____|.__)__)|_| |_|    \\_\/\\_\/ |____||____\/.__)__)   \/__\/\\__\\|_|\\__|\\___\/\/__\/\\__\\|____||_|\r\n\r\n  Usage: wedding [options]\r\n\r\n  Options:\r\n\r\n    -h, --help      output usage information\r\n    -V, --version   output the version number\r\n    -l, --location  Get location\r\n    -b, --bride     Bride details\r\n    -g, --groom     Groom details\r\n    -d, --date      Date of marriage"
var ul;
var cmd;
var empty = {
    options: [],
    args: []
};
var commands = {
    'get-command': {
        options: ['name', 'age', 'description', 'address'],
        args: ['clear']
    },
    'wedding': {
        args: ['location', 'muhoortham', 'rsvp', 'bride', 'groom'],
    }
};

$( document ).ready(function() {
  $('#terminal-content').terminal(function(command) {
    option = command.trim().match(/\S+/g)[1];
    switch (option) {
      case '--groom':
      case '-g':
        text = "vineesh"
        break;
      case '-V':
      case '--version':
        text = "0.0.1"
        break;
      
      default:
        text = "In valid argument \n";
        text += help_text
    }
    this.echo(text);
  }, { prompt: 'guest@marriage ~$ ', 
    name: 'vineesh_weds_anjali',
    greetings: greeting_text });
});
