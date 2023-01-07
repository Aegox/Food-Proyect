const {db} = require("./src/db.js");
const server = require("./src/app.js");

db.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log("server is running at port 3001");
    })
}).catch((error) => console.log(error))

