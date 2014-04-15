export default Ember.View.extend({
  templateName: 'characters/entry',
  tagName: 'article',

  backgroundImage: function(){
    return 'background-image: url('+this.get('context.imageUrl')+');';
  }.property()
});