const basta = (req, res) => {
  res.send({
    response_type: "in_channel",
    attachments: [
      {
        image_url:
          "https://i.pinimg.com/originals/5c/f2/12/5cf2128a3764e6efb10267ae1d5ab66f.jpg",
      },
    ],
  });
};

module.exports = basta;
