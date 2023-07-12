module.exports = [{
    name: 'meme',
    code: `#(newEmbed
        #(setTitle #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | title))
        #(setURL #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | url))
        #(setImage #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | image))
        #(setFooter 👍 #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | upvotes) %BAR% 💬 #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | comments))
        )
        #(newActionRow
         #(addButton Primary | Next Meme (soon) | next | true | ➡ )
         #(addButton Danger | Stop | stop | true | 🛑 ) 
         )  `
},{
  name: 'next',
  type: 'buttonInteraction',
  code: `#(interactionUpdate #(newEmbed
        #(setTitle #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | title))
        #(setURL #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | url))
        #(setImage #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | image))
        #(setFooter 👍 #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | upvotes) %BAR% 💬 #(httpsGet https:%SLASH%%SLASH%api.popcat.xyz%SLASH%meme | comments))
        )
         #(newActionRow
         #(addButton Primary | Next Meme | next | false | ➡ )
         #(addButton Danger | Stop | stop | false | 🛑 ) 
         )
         )
        `
},{
  name: 'stop',
  type: 'buttonInteraction',
  code: `#(deleteMessage)`
}]