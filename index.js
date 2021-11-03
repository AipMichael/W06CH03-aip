require("dotenv").config();
const http = require("http");

const {
  addition,
  substraction,
  multiplication,
  division,
} = require("./calculator");

const server = http.createServer();

const port = process.env.SERVER_PORT_ERO || 5000;

const myHtml = (number1, number2) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>This is not a thunk</title>
  </head>
  <body>
    <h1>The calculator has calculated these values for you</h1>
    <li>${number1} + ${number2} = ${addition(number1, number2)}</li>
    <li>${number1} - ${number2} = ${substraction(number1, number2)}</li>
    <li>${number1} * ${number2} = ${multiplication(number1, number2)}</li>
    <li>${number1} / ${number2} = ${division(number1, number2)}</li>

    <p>Bye</p>
  </body>
</html>`;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  const myUrl = new URL(request.url, `http://${request.headers.host}`);
  const myUrlValues = myUrl.searchParams.values();
  const userValues = [];
  for (const value of myUrlValues) {
    userValues.push(+value);
  }

  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.write(myHtml(userValues[0], userValues[1]));
  response.end();
});
