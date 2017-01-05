var str = '/board?row=a&col=b'

function parseThis(val) {
  var obj = {};
  var data = val.split('?')
  console.log(data);
  var path = data[0]
  console.log(path);
  var queryString = data[1]
  var queryParams = queryString.split('&');
  console.log(queryParams);
  var query = {};
  queryParams.forEach(function(val) {
    var parts = val.split('=');
    var key = parts[0];
    var value = parts[1]
    query[key] = value;
  })
  obj.path = path;
  obj.query = query;
  console.log(obj);
}


parseThis(str);
