module.exports = {
  name: "owoify",
  code: `$sendMessage[$getObjectProperty[response];no]
$createObject[$jsonRequest[https://apiv1.spapi.ga/fun/owofy?text=$toLowercase[$replaceText[$message; ;+;-1]]]
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions to owoify text]
$onlyIf[$message!=;you need to provide me something to owoify it]
  `
}
