Meteor.publish('publicLists', function() {
  return Lists.find();
});

Meteor.publish('todos', function(listId) {
  check(listId, String);
  
  return Todos.find({listId: listId});
});