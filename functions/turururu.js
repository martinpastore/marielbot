const turururu = (req, res) => {
  res.send({
    response_type: "in_channel",
    attachments: [
      {
        image_url:
          "https://media1.tenor.com/images/d6cc94c4a3cf20996cbab7a03b6204e0/tenor.gif?itemid=16737844",
      },
    ],
  });
};

module.exports = turururu;
