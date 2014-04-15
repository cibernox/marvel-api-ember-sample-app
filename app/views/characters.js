export default Ember.View.extend({
  classNames: ['characters-section'],
  addBackground: function(){
    $('#main-content .background-placeholder').addClass('bg-characters');
  }.on('didInsertElement'),
  removeBackground: function() {
    $('#main-content .background-placeholder').removeClass('bg-characters');
  }.on('willDestroyElement')
});