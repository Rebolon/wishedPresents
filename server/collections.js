var collectionsCheck = {
  "onlyConnected": function(userId, doc) {
    if (!userId) return false;
    
    doc.ownerId = userId;
    
    return true;
  },
  
  "onlyOwner": function(userId, doc) {
    if (userId
        && userId == doc.ownerId) return true;
    
    return false;
  }
};

Lists.allow({
  "insert": collectionsCheck.onlyConnected,
  
  "update": function(userId, doc, fieldNames, modifier) {
    console.log("update", arguments);
    if (userId
       && userId == doc.userId) return true;
    
    return false;
  },
  
  "remove": collectionsCheck.onlyOwner
});

Todos.allow({
  "insert": collectionsCheck.onlyConnected,
  
  "update": function(userId, doc, fieldNames, modifier) {
    if (!userId) return false;
    
    if (!doc.userIds) doc.userIds = [];
    
    if (!_.contains(doc.userIds, userId)) doc.userIds.push(userId);
    
    return true;
  },
  
  "remove": collectionsCheck.onlyOwner
});