const express=require('express');
const reload = require('reload');
const app=express();
const port=8000;

//Dynamically route files:
app.use(express.static(__dirname+'/public'));


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
reload(app);
