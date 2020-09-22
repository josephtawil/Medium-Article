const express =  require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.json());

const apiRoutes = require("./Routes/api-routes");
app.use(apiRoutes);

const clientRoutes = require("./Routes/client-routes");
app.use(clientRoutes);

app.listen(PORT, function(){
    console.log(`Listening at http://localhost:${PORT}`);
});