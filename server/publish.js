Meteor.publish('pending_accepted_user', function() {
  if (this.userId) {
    return PendingAcceptedUser.find({appOnwer: this.userId});
  }
});

Meteor.publish('todos', function(listId) {
  check(listId, String);
  
  return Todos.find({listId: listId});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'appOwner': isAppOwner(this.userId), 'accepted': isAccepted(this.userId)}});
  } else {
    this.ready();
  }
});

var isAppOwner = function(userId) {
  return false;
},
    isAccepted = function(userId) {
      return false;
    }