var greeting_text = "__     ___                      _      __        __       _          _           _       _ _ \r\n\\ \\   \/ (_)_ __   ___  ___  ___| |__   \\ \\      \/ \/__  __| |___     \/ \\   _ __  (_) __ _| (_)\r\n \\ \\ \/ \/| | \'_ \\ \/ _ \\\/ _ \\\/ __| \'_ \\   \\ \\ \/\\ \/ \/ _ \\\/ _` \/ __|   \/ _ \\ | \'_ \\ | |\/ _` | | |\r\n  \\ V \/ | | | | |  __\/  __\/\\__ \\ | | |   \\ V  V \/  __\/ (_| \\__ \\  \/ ___ \\| | | || | (_| | | |\r\n   \\_\/  |_|_| |_|\\___|\\___||___\/_| |_|    \\_\/\\_\/ \\___|\\__,_|___\/ \/_\/   \\_\\_| |_|\/ |\\__,_|_|_|\r\n                                                                              |__\/           "
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
        options: ['amend', 'hard', 'version', 'help']
    },
    'get-name': empty,
    'get-age': empty,
    'get-money': empty
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
