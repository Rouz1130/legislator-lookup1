import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
                        // dynamic segment
  this.route('results', {path: '/results/:zip'});
});

export default Router;
