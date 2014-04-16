export default Ember.View.extend({
  templateName: 'comics/entry',
  tagName: 'article',

  backgroundImage: function(){
    return 'background-image: url('+this.get('context.thumbnail.url')+');';
  }.property()
});