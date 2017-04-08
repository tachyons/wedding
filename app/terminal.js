var greeting_text = "__  __ _  __  _  ____  ____   ____  _   _    __    __ ____  ____   ____      ____   __  _   __   ____   _     _ \r\n\\ \\\/ \/| ||  \\| || ===|| ===| (_ (_`| |_| |   \\ \\\/\\\/ \/| ===|| _) \\ (_ (_`    \/ () \\ |  \\| |__) | \/ () \\ | |__ | |\r\n \\__\/ |_||_|\\__||____||____|.__)__)|_| |_|    \\_\/\\_\/ |____||____\/.__)__)   \/__\/\\__\\|_|\\__|\\___\/\/__\/\\__\\|____||_|"

var help_text = "\n\n__  __ _  __  _  ____  ____   ____  _   _    __    __ ____  ____   ____      ____   __  _   __   ____   _     _ \r\n\\ \\\/ \/| ||  \\| || ===|| ===| (_ (_`| |_| |   \\ \\\/\\\/ \/| ===|| _) \\ (_ (_`    \/ () \\ |  \\| |__) | \/ () \\ | |__ | |\r\n \\__\/ |_||_|\\__||____||____|.__)__)|_| |_|    \\_\/\\_\/ |____||____\/.__)__)   \/__\/\\__\\|_|\\__|\\___\/\/__\/\\__\\|____||_|\r\n\r\n\n\n  \n\nUsage: wedding [options]\r\n\r\n  Options:\r\n\r\n    -h, --help      output usage information\r\n    -V, --version   output the version number\r\n    -l, --location  Get location\r\n    -b, --bride     Bride details\r\n    -g, --groom     Groom details\r\n    -d, --date      Date of marriage"

var location_text = "Madayi Coorporative Rural Auditorium"
var bride_text = "Anjali N\nSoftware Engineer\nFacebook: https://www.facebook.com/anjali.nandanam.1"
var groom_text = "Vineesh NP\nSoftware Engineer at TechJini Solutions Pvt. Ltd. Bangalore\nFacebook: http://www.facebook.com/vineeshvalsalan"

var wedding_url = "https://www.google.co.in/maps/dir/''/''/data=!4m5!4m4!1m0!1m2!1m1!1s0x3ba414b6d4b9066d:0xab737784febcb1d4?sa=X&ved=0ahUKEwj8qq_sqpTTAhWKqo8KHfxGAAsQ9RcICzAA"

var installation = "-- wedding@1.0.0 \r\n  +-- bootstrap@3.3.7 \r\n  +-- commander@2.9.0 \r\n  | `-- graceful-readlink@1.0.1 \r\n  +-- jquery@3.2.1 \r\n  +-- jquery.terminal@1.1.0 \r\n  | `-- jquery@2.2.4 \r\n  +-- opn@4.0.2 \r\n  | +-- object-assign@4.1.1 \r\n  | `-- pinkie-promise@2.0.1 \r\n  |   `-- pinkie@2.0.4 "

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
  $('#terminal-content').terminal(function(command, term) {
    if(command == "npm install wedding") {
      this.echo(installation);
    } else {
      try {
        option = command.trim().match(/\S+/g)[1];
      } catch (exception) {
        option = "unknown"
      }
      switch (option) {
        case '-V':
        case '--version':
          this.echo("0.0.1")
          break;
        case '-h':
        case '--help':
          this.echo(help_text);
          break;
        case '-l':
        case '--location':
          this.echo(location_text);
          term.push(function(command, term) {
            if (/y(es){0,1}/.test(command)) {
              window.open(wedding_url, '_blank');
            }
          term.pop();
        }, {
          prompt: 'Do you want to open this link in the browser? (yes/no) ',
          greetings: null
        });

          break;

        case '-b':
        case '--bride':
          this.echo(bride_text)
          break;

        case '-g':
        case '--groom':
          this.echo(groom_text)
          break;

        default:
          this.echo("Sorry, system could not recognize the command you entered \n \n");
          this.echo(help_text);
      }
    }
  }, { 
    prompt: 'guest@marriage ~$ ', 
    name: 'vineesh_weds_anjali',
    greetings: greeting_text,
    onInit: function(term) {
      term.insert("npm install wedding");
      term.history().clear();
    },
    completion: function(string, callback) {
      callback(['npm install wedding', 'wedding --location', 'wedding --help', 'wedding --groom', 'wedding --date', 'wedding --bride']);
    },
    tabcompletion: true
  });
});
