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
  extractFindHasMany: function(store, type, payload){
    return payload.data.results;
  },
  extractSingle: function(store, type, payload) {
    var json = {};
    json[type.typeKey] = payload.data.results[0];
    return this._super(store, type, json);
  }
});