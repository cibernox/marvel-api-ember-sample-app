export default DS.Model.extend({
  // Attributes
  name: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr('thumbnail'),
  // Relations
  series: DS.hasMany('serie', {async: true}),
  // comics: DS.hasMany('comic', {async: true}),   Model not defined yet.
  // events: DS.hasMany('event', {async: true}),   Model not defined yet.
  // stories: DS.hasMany('story', {async: true}),  Model not defined yet.
  //
});