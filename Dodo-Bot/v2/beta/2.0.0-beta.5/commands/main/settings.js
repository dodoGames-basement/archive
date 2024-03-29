module.exports = {
  name: "settings",
  executeAt: "guild",
  aliases: "panel",
  code: `$title[Advanced Settings]
  $description[These settings let you manage any feature or settings of an certain system, for example managing on how trivia should start.]
  $addSelectMenu[1;settingsmenu_$authorID;select an Option;1;1;false;Games:Manage settings related to games.:gamesmenu:false;Bot itself:Customise on how Dodo Bot should Behave.:botmenu:false;Server:Manage settings related to the server.:servermenu:false]
  $cooldown[2s; Slow down! Don't spam the command!
Time left: \`%time%\`]
  $onlyPerms[managemessages; you need \`ManageMessages\` permission to access this panel.]`
}