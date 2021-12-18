const { Telegraf } = require('telegraf');
var weather = require('weather-js');

const bot = new Telegraf('5089235592:AAFm4IpywsSB2CCQLxV1uNg2uoxOGcN8W0E');

bot.on('text', (ctx) => {
	if (ctx?.message?.text?.slice(0, 15).toLowerCase() === 'какая погода в ') {
		weather.find(
			{ search: ctx?.message?.text?.slice(15), degreeType: 'C' },
			function (err, result) {
				ctx.reply(
					`Температура в ${ctx?.message?.text?.slice(15)} равна ${
						result[0]?.current?.temperature
					}`
				);
			}
		);
	}
});

bot.launch();
