const redis = require("redis");

const redisHost = "redis-12832.c15.us-east-1-4.ec2.cloud.redislabs.com:12832";
const redisPort = process.argv[3] || 12345;
const redisAuth = "WW65YsRnjbbPH4FlmH4JrzMxaAhlYmgg";

module.exports = () => {
  return redis
    .createClient({ port: redisPort, host: redisHost })
    .auth(redisAuth, (err, response) => {
      if (err) {
        console.log(err);
      }
    });
};
