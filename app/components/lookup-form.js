import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };              //zipLookup is the action we declared in our template file
      this.sendAction('zipLookup', params);
    }
  }
});
//lookup From component(template) contains action LookUp that collects zip from
//the form and sends it up through the component to index route handler.
