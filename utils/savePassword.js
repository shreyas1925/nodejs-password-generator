const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const os = require("os");

const savePassword = (password) => {
  fs.open(
    path.join(__dirname, "../", "passwords.txt"),
    "a",
    666,
    (event, index) => {
      fs.write(index, password + os.EOL, null, "utf-8", () => {
        fs.close(index, () => {
          console.log(chalk.green("Password saved to passwords.txt"));
        });
      });
    }
  );
};

module.exports = savePassword;
