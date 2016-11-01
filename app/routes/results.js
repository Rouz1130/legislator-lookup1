import Ember from 'ember';

export default Ember.Route.extend({
  model: fucntion(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=[7f9240ce7deb45d795ab7331b4d76214]&zip='+ params.zip;
      return Ember.$.getJson(url).then(function(responseJson) {
        return responseJson.results;
      });
  }
});
