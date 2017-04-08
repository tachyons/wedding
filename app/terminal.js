var greeting_text = "__  __ _  __  _  ____  ____   ____  _   _    __    __ ____  ____   ____      ____   __  _   __   ____   _     _ \r\n\\ \\\/ \/| ||  \\| || ===|| ===| (_ (_`| |_| |   \\ \\\/\\\/ \/| ===|| _) \\ (_ (_`    \/ () \\ |  \\| |__) | \/ () \\ | |__ | |\r\n \\__\/ |_||_|\\__||____||____|.__)__)|_| |_|    \\_\/\\_\/ |____||____\/.__)__)   \/__\/\\__\\|_|\\__|\\___\/\/__\/\\__\\|____||_|"

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
    if (command == 'wedding') {
      this.echo("welcome");
    } else {
      this.echo('unknown command');
    }
  }, { prompt: 'guest@marriage ~$ ', 
    name: 'vineesh_weds_anjali',
    greetings: greeting_text });
});
