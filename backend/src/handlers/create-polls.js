const { v4 } = require("uuid");

module.exports = db => {
  return async (request, response) => {
    const data = {
      _id: v4(),
      title: request.body.title,
      choice: request.body.choices.map(choice => ({
        name: choice,
        count: 0,
        _id: v4(),
      })),
    };
    await db.collection("polls").insertOne(data);

    return response.json({
      message: "Poll Created",
      pollId: data._id,
      data,
    });
  };
};
