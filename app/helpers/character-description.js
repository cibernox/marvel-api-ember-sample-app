var defaultCharacterDescription = "The past of this character still a mistery...";
export default Ember.Handlebars.makeBoundHelper(function(description) {
  return description || defaultCharacterDescription;
});