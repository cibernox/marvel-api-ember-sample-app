export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  description: DS.attr('string'),
  isbn: DS.attr('string'),
  thumbnail: DS.attr('thumbnail'),
  // Relations
  characters: DS.hasMany('character', {async: true}),
  // series: DS.hasMany('serie', {async: true})
});