const router = require('express').Router();

router.get("/", (req, res) => {
  const meta = {
    page_title: "Home Page",
    page_link: "/"
  };
  res.render("front/index", { meta });
});

router.get("/about", (req, res) => {
  const meta = {
    page_title: "About Page",
    page_link: "/"
  };
  res.render("front/pages/about", { meta });
});

module.exports = router;