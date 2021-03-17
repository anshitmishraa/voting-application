const { promisify } = require("util");

module.exports = (db, redisDb) => {
  const saddAsync = promisify(redisDb.sadd).bind(redisDb);
  const smembersAsync = promisify(redisDb.smembers).bind(redisDb);

  return async (request, response) => {
    console.log(await smembersAsync(request.params.poll));
    const result = await db.collection("polls").updateOne(
      {
        _id: request.params.poll,
        choice_id: request.body.choice,
      },
      {
        $inc: {
          "choices.$.count": 1,
        },
      }
    );

    await saddAsync(request.params.poll, request.body.ip);

    return response.json({
      message: "Vote has been registered.",
    });
  };
};
