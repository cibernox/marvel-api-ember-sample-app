export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  description: DS.attr('string'),
  modified: DS.attr('date'),
  rating: DS.attr('string'),
  startYear: DS.attr('number'),
  thumbnail: DS.attr('image'),
  type: DS.attr('string'),
  url: DS.attr('string'),
  // Relations
  // nothing yet
});