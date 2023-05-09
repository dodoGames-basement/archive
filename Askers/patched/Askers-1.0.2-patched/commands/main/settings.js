module.exports = {
  name: "settings",
  aliases: "setting",
  code: `
  $title[Askers Settings]
  $description[here are the general options that you can change:
  
  **Button**: enable buttons mode
  **Mode**: change the game mode
  **Language**: change current language of akinator game
  
  **Status**
  Button: \`$getGuildVar[akin_buttons]\`
  Mode: \`$getGuildVar[akin_gametype]\`
  Language: \`$getGuildVar[akin_language]\`
  
 **Warning**
NSFW are not supported and it will never be added to Askers, attempting to guess an nsfw character will result in an message saying "I know who you are thinking of, but I believe this is not for young people"

  ]
  $addButton[1;Language;1;language_$authorID;false]
  $addButton[1;Mode;1;mode_$authorID;false]
  $addButton[1;Button;1;button_$authorID;false]
  $color[Yellow]
  $onlyPerms[manageguild;you need \`MANAGE_SERVER\` Permission in order to change on how i should start akinator game]
  `
}
