var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource('characters', function(){
    this.route('show', {path: '/:id'});
  });
  this.resource('series', function(){
    this.route('show', {path: '/:id'});
  });
  this.resource('comics', function(){
    this.route('show', {path: '/:id'});
  });
});

export default Router;
