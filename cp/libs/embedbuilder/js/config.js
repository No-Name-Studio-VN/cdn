
        /**
         * This script file will (or atleast should) run before the main script file runs.
         * This file should contain stuff like options, global variables (etc.) to be used by the main script.
         */

        // Options

        // URL options can override the options below.
        // Options set through the menu can override both until the page is refreshed.
        options = {
            username: localStorage["ebUsername"] || "✰๖ۣۜNσ ๖ۣۜNαмε✰",
            avatar: localStorage["ebAvatarurl"] || 'https://cdn.discordapp.com/avatars/736915194772586598/b710c74dad123c4a583b39cca12ea77d.webp',
            verified: true,
            noUser: false,
            data: null,
            guiTabs: ['author', 'description'],
            useJsonEditor: false,
            reverseColumns: false,
            allowPlaceholders: false,
            autoUpdateURL: false,
            autoParams: false,
            hideEditor: false,
            hidePreview: false,
            hideMenu: false,
            single: false,
            noMultiEmbedsOption: false,
            sourceOption: false, // Display link to source code in menu.
        }

        // Default JSON object
        const defaultembed = {
            content: "# Hello, welcome to our ~~least~~most extensive `Discord Embed Builder`\n```js\nconst data = fetch(\"https://gayporg.edu.vn\");\nconsole.log(data.movies[0]);\n```\n*italics* or _italics_     __*underline italics*__\n**bold**     __**underline bold**__\n***bold italics***  __***underline bold italics***__\n__underline__     ~~Strikethrough~~",
            embed: {
            title: "Hello ~~people~~ world :wave:",
            description: "You can use [links](https://cp.nnsvn.me) or emojis :smile: 😎\n```\nAnd also code blocks\n```",
            color: 0x41f097,
            timestamp: new Date().toISOString(),
            url: "https://cp.nnsvn.me",
            author: {
                name: "<%= bot.user.username %>",
                url: "https://cp.nnsvn.me",
                icon_url: "<%= botavatar %>"
            },
            thumbnail: {
                url: "<%= botavatar %>"
            },
            image: {
                url: "https://glitchii.github.io/embedbuilder/assets/media/banner.png"
            },
            footer: {
                text: "No Name Studio",
                icon_url: "https://cdn.nnsvn.me/img/brand/logo.svg"
            },
            fields: [{
                name: "Field 1, *lorem* **ipsum**, ~~dolor~~",
                value: "Field value"
                },
                {
                name: "Field 2",
                value: "You can use custom emojis <:nyancat:844571400522170369>. <:GangstaBlob:742256196295065661>",
                inline: false
                },
                {
                name: "Inline field",
                value: "Fields can be inline",
                inline: true
                },
                {
                name: "Inline field",
                value: "*Lorem ipsum*",
                inline: true
                },
                {
                name: "Inline field",
                value: "value",
                inline: true
                },
                {
                name: "Another field",
                value: "> Nope, didn't forget about this",
                inline: false
                }
            ]
            }
        }


        json = localStorage.getItem("embedbuilderjson") !== undefined ? JSON.parse(localStorage.getItem("embedbuilderjson")) : defaultembed;
        // Write any code under the 'DOMContentLoaded' event to run after the page has loaded.
        addEventListener('DOMContentLoaded', () => {
            // console.log('Hello 👋');

            // Remove the colour picker
            // document.querySelector('.colors').remove()
        })