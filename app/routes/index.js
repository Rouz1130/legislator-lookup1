import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.tranitionTo('results', params.zip);
    }
  }
});

// Summarry off what has happend in this project up too this point.
//Now, when we submit the form in our lookup-form component located on the index, the component will grab the parameters from the form, pass the zipLookup() action and its parameters from the component, through the index template, and to the index route. Once on the index route handler, we will transition to the results route using zip code from the form (currently located in params) to fill the dynamic portion of the results route's URL.
