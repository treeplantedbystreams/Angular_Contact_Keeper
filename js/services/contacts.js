app.factory('contacts', [function() {
  var dummyData = {
    posts: [
      {
        name:'David',
        phone:'(205)232-2323',
        email:'Shalom',
      },
      {
        name:'David',
        phone:'(205)232-2323',
        email:'Shalom',
      },
      {
        name:'David',
        phone:'(205)232-2323',
        email:'Shalom',
      }
    ]
  }
  return dummyData
}]);