var idRegex = /\d*$/,
  idExtractor = function(item){
    return item.resourceURI.match(idRegex)[0];
  };

export default DS.RESTSerializer.extend({
  // extractMeta: function(store, type, payload){
  //   payload.meta = {};
  //   for (var p in payload.data){
  //     if (p !== 'results'){
  //       payload.meta[p] = payload.data[p];
  //       delete payload.data[p];
  //     }
  //   }
  //   this._super(store, type, payload);
  // },
  extractArray: function(store, type, payload){
    var json = {};
    json[type.typeKey] = payload.data.results;
    return this._super(store, type, json);
  },
  extractSingle: function(store, type, payload) {
    var json = {};
    json[type.typeKey] = payload.data.results[0];
    return this._super(store, type, json);
  },
  normalize: function(type, hash, prop) {
    if (Ember.isArray(hash)){
      hash.forEach(this.normalizeEach);
    } else {
      this.normalizeEach(hash);
    }
    return this._super(type, hash, prop);
  },
  normalizeEach: function(recordJson){
    recordJson.links = {};
    ['comics', 'characters'].forEach(function(relationName){
      if (recordJson[relationName]) {
        recordJson.links[relationName] = recordJson[relationName].collectionURI;
        recordJson[relationName] = recordJson[relationName].items.map(idExtractor);
      }
    });
  }
});