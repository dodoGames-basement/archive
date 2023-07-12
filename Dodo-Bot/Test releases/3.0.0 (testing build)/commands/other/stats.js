module.exports = {
    name: 'botinfo',
    aliases: ['stats'],
    code: `#(newEmbed
        #(setTitle stats)
        #(addField version | 3.0.0)
        #(addField hytescript.js | #(version))
        )`
}