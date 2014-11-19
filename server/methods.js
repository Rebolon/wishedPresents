Meteor.methods({
  'acceptUser': function (userId, accepted) {
    if (!isAppOwner(Meteor.UserId)) throw new Meteor.Error();
    
    Check(accepted, boolean);
    
    Meteor.users.update({_id: userId}, {$set: {accepted: accepted}});
    PendingAcceptedUser.remove({_id: userId});
    
    return true;
  }
});