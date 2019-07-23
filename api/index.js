module.exports = (req, res) => {
  { res.send(process.env.BASE) }
}

// https://zeit.co/guides/deploying-a-mongodb-powered-api-with-node-and-now/?query=api