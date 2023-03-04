//1
// קישור לספריית פרוטוקול עבודה באינטרנט
const http = require('http');
const app = require('./app');
//שם הפורט שמחזיק את השרת
const port = 3030;

//כאן יוצרים את פונקציה שתנהל את השרת
const server = http.createServer(app);
// כאן "נאזין" לשרת שלנו
server.listen(port);