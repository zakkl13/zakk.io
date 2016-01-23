function page(id, url, ext_bool) {
  var base = "Zakk Lefkowits | ";
  this.id = id;
  this.url = url;
  this.external = ext_bool;
  this.hide = function() {
    document.getElementById(this.id).style.display = "none";
    document.getElementsByClassName(this.id)[0].style.backgroundColor = "";
    };
  this.show = function() {
    document.getElementById(this.id).style.display = "";
    document.getElementsByClassName(this.id)[0].style.backgroundColor = "#10a7d6";
    document.title = base + this.id.charAt(0).toUpperCase() + this.id.slice(1);
  };
}

function make_buttons() {

}

var pages = [new page("home", "http://zakk.io"), new page("resume", "http://zakk.io/resume"), new page("blog", "http://zakk.io/blog")];
var current_page;

// for (var i = 0; i < pages.length; i++){
//   pages[i].hide();
// }
//
// current_page.show();

function change_page(idx) {
  pages[current_page].hide();
  pages[idx].show();
  current_page = idx;
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

document.addEventListener("DOMContentLoaded", function(event) {
  var url = String(location.href);
  current_page = 0;
  var page_idx = 0;
  for (var q = 0; q < pages.length; q++) {
    if (url.indexOf("#" + pages[q].id) != -1) {
      current_page = q;
      break;
    }
  }
  pages[current_page].show();
  });


// window.onload = function () {
  // console.log(location.href);
  // var url = String(location.href);
  // current_page = 0;
  // var page_idx = 0;
  // for (var q = 0; q < pages.length; q++) {
    // if (url.indexOf("#" + pages[q].id) != -1) {
      // console.log("hit on " + q);
      // current_page = q;
      // break;
    // }
  // }
  // pages[current_page].show();


// }
