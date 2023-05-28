module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.2-3]
  $description[
    **Developer message**
   Hey folks! Another bug fix test update for 1.0.2 as 1.0.3 still hasn't released yet! This version fixes the issue with \`start\` command which suddenly became unusable.

   **what happened**
   The official akinator api npm package which Askers uses for akinator experience has been experiencing some strange issues. 
   The certificates was installed incorrectly which caused all discord bots that uses the package to not function at all, and so Askers got affected by this.

   Please remember that 1.0.2-3 will be in testing circle for quiet sometime to make sure that this fix does not damage the bot in any sort of way. You're welcome to test this release but be careful when using it. Have a nice day!

   
  ]
  $color[Yellow]

`
}
