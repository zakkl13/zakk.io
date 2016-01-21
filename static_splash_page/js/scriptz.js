function page(id, url) {
  this.id = id;
  this.url = url;
  this.hide = function() {
    document.getElementById(this.id).style.display = "none";
  };
  this.show = function() {
    document.getElementById(this.id).style.display = "";
  };
}

var pages = [new page("home", "http://zakk.io"), new page("resume", "http://zakk.io/resume"), new page("blog", "http://zakk.io/blog")];
var current_page = pages[0];

// for (var i = 0; i < pages.length; i++){
//   pages[i].hide();
// }
//
// current_page.show();

function change_page(idx) {
  console.log("changing from: " + current_page + " to: " + pages[idx]);
  current_page.hide();
  pages[idx].show();
  current_page = pages[idx];
}

function change() {
  var base = 'I like to write code and '

  var nouns = ['the Oxford comma.',
      'corporate America.',
                'camelCasing.',
          ' the World Wide Web.',
          '*nix.',
      'input/output.' ]

  var actions = ['argue about ',
      'get lost in thought thinking about ',
      'get into fights over ',
      'fantasize about ',
      'save small children from ']

  var rand_idx_actions = Math.floor(Math.random() * actions.length)
  var rand_idx_nouns = Math.floor(Math.random() * nouns.length)
  document.getElementById("rotate").innerHTML = base + actions[rand_idx_actions] + nouns[rand_idx_nouns];
}
