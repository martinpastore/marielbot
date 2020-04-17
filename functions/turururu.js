const turururu = (req, res) => {
  res.send({
    response_type: "in_channel",
    attachments: [
      {
        image_url:
          "https://media1.tenor.com/images/00d08a83f7f225e95a0d5b46dec6dec7/tenor.gif?itemid=16790194",
      },
    ],
  });
};

module.exports = turururu;
