module.exports = {
  name: "eval",
  aliases: "e",
  executeAt: "both",
  info: {
    description: "Eval something using aoi.js functions.",
    usage: "a!eval < code to execute >"
  },
  code: `$eval[$message]
  $onlyIf[$message!=;Please evaluate something else to execute!]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]`
}

