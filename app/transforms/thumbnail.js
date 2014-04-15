var Thumbnail = Ember.Object.extend({
  url: function(){
    return this.get('path') + '.' + this.get('extension');
  }.property(),
  smallUrl: function() {
    return this.get('path') + '/portrait_uncanny.' + this.get('extension');
  }.property()
});

export default DS.Transform.extend({
  deserialize: function(value) {
    return Thumbnail.create(value);
  }
});