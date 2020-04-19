const express = require('express');
const app = express();
const rtr = express.Router();
const path = require('path');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// for body parser. to collect data that sent from the client.
app.use(express.urlencoded( { extended : false}));

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

rtr.use(bodyParser.json());
rtr.use(bodyParser.urlencoded({extended: false}));
rtr.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


// Server port
app.set('port', process.env.PORT || 3000);

// router file type (.ejs)
app.set('view engine','ejs');
app.set('views','./views');


// file includes (Routers)
app.use(express.static('./public'));
app.use(express.static('./node_modules'));
app.use('/blogdesc', express.static('./public'));
app.use(require('./routers/test'));  //testing


// Server Start
var Server = app.listen(app.get('port'), function(){
   console.log('listen to port '+app.get('port'));
 });
