const getActivitiesHome = (req, res) => {
  res.render("pages/activities");
};

const postActivity = (req, res) => {
  let errors = validationResult(req);

  // If there are errors
  if (!errors.isEmpty()) {
    res.render("pages/signUp", {
      errors: errors.array(),
    });
  } else {
    let data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    };

    let newUser = new User(data);

    newUser
      .save()
      .then(() => {
        console.log(
          `${data.firstName}'s Order Saved!\nHere is the data: ${JSON.stringify(
            data
          )}`
        );
      })
      .catch((error) => {
        console.log(error.message);
      });

    res.render("pages/thankYouPage", {
      data,
    });
  }
};

module.exports = { getActivitiesHome, postActivity };
