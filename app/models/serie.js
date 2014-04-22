export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  description: DS.attr('string'),
  modified: DS.attr('date'),
  rating: DS.attr('string'),
  startYear: DS.attr('number'),
  thumbnail: DS.attr('thumbnail'),
  type: DS.attr('string'),
  url: DS.attr('string'),
  // Relations
  // characters: DS.hasMany('character', {async: true}),
  // comics: DS.hasMany('comic', {async: true})
});