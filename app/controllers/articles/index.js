import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['show'],
    possibleStates: ['borrowed', 'returned']
});
