import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    article: null,
    articleStates: null,

    autoSave: function() {
        var article = this.get('article');
        if (!article.get('isNew')) {
            this.sendAction('save', article);
        }
    },

    stateChanged: function() {
        var article = this.get('article');
        if(article.get('isDirty') && !article.get('isSaving')) {
            Ember.run.once(this, this.autoSave);
        }
    }.on('init').observes('article.state')
});
