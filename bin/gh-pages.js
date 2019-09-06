require("dotenv").config();
const ghpages = require("gh-pages");

(async () => {
  await ghpages.publish(
    "dist",
    {
      repo: `https://${process.env.GH_TOKEN}@${process.env.GH_REPOSITORY}`,
      branch: "master",
      message: `Auto-generated commit from build - ${new Date().toLocaleString()}`,
      silent: true,
      add: true
    },
    err => {
      if (err)  console.error(err);

      console.log("Published to Github Pages 🚀");
    }
  );
})();
