// ______   __  __     ______     __            _____     ______     __   __   ______     __         ______     ______   __    __     ______     __   __     ______  
// /\  ___\ /\ \/\ \   /\  ___\   /\ \          /\  __-.  /\  ___\   /\ \ / /  /\  ___\   /\ \       /\  __ \   /\  == \ /\ "-./  \   /\  ___\   /\ "-.\ \   /\__  _\ 
// \ \  __\ \ \ \_\ \  \ \  __\   \ \ \____     \ \ \/\ \ \ \  __\   \ \ \'/   \ \  __\   \ \ \____  \ \ \/\ \  \ \  _-/ \ \ \-./\ \  \ \  __\   \ \ \-.  \  \/_/\ \/ 
//  \ \_\    \ \_____\  \ \_____\  \ \_____\     \ \____-  \ \_____\  \ \__|    \ \_____\  \ \_____\  \ \_____\  \ \_\    \ \_\ \ \_\  \ \_____\  \ \_\\"\_\    \ \_\ 
//   \/_/     \/_____/   \/_____/   \/_____/      \/____/   \/_____/   \/_/      \/_____/   \/_____/   \/_____/   \/_/     \/_/  \/_/   \/_____/   \/_/ \/_/     \/_/ 

const { Client, Discord } = require('discord.js')
require('./handler/load')(new Client({ partials: ['MESSAGE', 'REACTION', 'CHANNEL'] }))