import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'marvel-api-ember-sample-app', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'marvel-api-ember-sample-app');

export default App;
