import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('article', {
            friend: this.modelFor('friend/show')
        });
    },

    actions: {
        save: function() {
            var _this = this;
            var model = this.modelFor('articles/new');

            model.save().then(function() {
                _this.transitionTo('articles');
            });
        },

        cancel: function() {
            this.transitionTo('articles');
        }
    }
});
