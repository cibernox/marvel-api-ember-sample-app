export default DS.RESTAdapter.extend({
  host: "http://gateway.marvel.com:80",
  namespace: "v1/public",
  buildURL: function(record, suffix) {
    return this._super(record, suffix) + this.generateSignature();
  },
  findHasMany: function(store, record, url){
    return this._super(store, record, url + this.generateSignature());
  },
  generateSignature: function(){
    var ts = new Date().valueOf();
    var publicKey = ENV["marvel-public-key"];
    var hash = md5(ts + ENV["marvel-private-key"] + publicKey);
    return "?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash;
  }
});
