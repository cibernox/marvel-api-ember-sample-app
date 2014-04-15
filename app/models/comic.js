export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  description: DS.attr('string'),
  isbn: DS.attr('string'),
  thumbnail: DS.attr('thumbnail'),
  // Relations
  serie: DS.belongsTo('serie', {async: true}),
  characters: DS.hasMany('character', {async: true}),
  events: DS.hasMany('event', {async: true}),
  stories: DS.hasMany('story', {async: true})
});