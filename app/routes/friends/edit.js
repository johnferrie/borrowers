import Ember from 'ember';

export default Ember.Route.extend({
    deactivate: function() {
        var model = this.modelFor('friends/edit');
        model.rollback();
    }
});
