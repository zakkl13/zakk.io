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
