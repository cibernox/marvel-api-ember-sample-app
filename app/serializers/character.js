import ApplicationSerializer from "marvel-api-ember-sample-app/serializers/application";

var idRegex = /\d*$/,
  idExtractor = function(item){
    return item.resourceURI.match(idRegex)[0];
  };

export default ApplicationSerializer.extend({
  normalize: function(type, hash, prop) {
    if (Ember.isArray(hash)){
      hash.forEach(this.normalizeCharacter);
    } else {
      this.normalizeCharacter(hash);
    }
    return this._super(type, hash, prop);
  },
  normalizeCharacter: function(recordJson){
    recordJson.links = {
      series: recordJson.series.collectionURI,
      comics: recordJson.comics.collectionURI,
      events: recordJson.events.collectionURI,
      stories: recordJson.stories.collectionURI
    };
    recordJson.series = recordJson.series.items.map(idExtractor);
    recordJson.comics = recordJson.comics.items.map(idExtractor);
    recordJson.events = recordJson.events.items.map(idExtractor);
    recordJson.stories = recordJson.stories.items.map(idExtractor);
  }
});