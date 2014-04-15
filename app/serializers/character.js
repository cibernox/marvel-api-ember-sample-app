import ApplicationSerializer from "marvel-api-ember-sample-app/serializers/application";

var idRegex = /\d*$/,
  idExtractor = function(item){
    return item.resourceURI.match(idRegex)[0];
  };

export default ApplicationSerializer.extend({
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
    return recordJson;
  },
  extractSingle: function(store, type, payload) {
    var json = this._super(store, type, payload);
    return this.normalizeCharacter(json);
  },
  extractArray: function(store, type, payload){
    var jsonsAry = this._super(store, type, payload);
    return jsonsAry.map(this.normalizeCharacter);
  }
});