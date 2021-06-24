const app = require("express");
app.get('/', (req, res) => res.send("RaooF"));
module.exports = () => {
    app.listen(3000);
}
