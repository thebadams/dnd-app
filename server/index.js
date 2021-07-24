const app = require('./config/server');

app.listen(process.env.PORT, () => {
  console.log(`Server Started on ${process.env.PORT}`);
});
