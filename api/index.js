module.exports = (req, res) => {
  { res.end(process.env.base) }
}

// https://zeit.co/guides/deploying-a-mongodb-powered-api-with-node-and-now/?query=api