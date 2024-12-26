var obj = {name: 'John', age: 30};
var json = JSON.stringify(obj);
res.writeHeader(200, {"Content-Type": "application/json"});
res.write(json);
res.end();
