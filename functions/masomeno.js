const masomeno = (req, res) => {
  res.send({
    response_type: "in_channel",
    attachments: [
      {
        image_url:
          "https://imgsvr.radiocut.site/get/thumb/600/600/cuts_logos/ae/23/ae231265-6923-4ee1-b7ab-b1d8b9cb22c3.jpeg",
      },
    ],
  });
};

module.exports = masomeno;
