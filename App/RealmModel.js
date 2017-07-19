import Realm from 'realm';

let counter = new Realm({
    schema: [{
    name: 'Incrementer',
    properties: {
        count:'int',
      }
    }]
});

let RealmModel = {

  getAll: function() {
    return counter.objects('Incrementer').length;
  },

  save: function(count) {
    counter.write(() => {
      counter.create('Incrementer', {count: count});
    })
  }
};

module.exports = RealmModel;
