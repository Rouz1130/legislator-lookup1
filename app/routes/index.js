import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.tranitionTo('results', params.zip);
    }
  }
});
