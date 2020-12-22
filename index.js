const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
    console.log('켯다.');
});

client.on('message', (mesaage) => {
    if(mesaage.content === '검키우기') {
        mesaage.reply('검키우기 게임을 시작합니다');
        mesaage.reply('1.강화 2.검공격력 3.패치 4.공격력순위 5.이용정보')
    }
});

client.login(token);

client.on('message', (mesaage) => {
    if(mesaage.content === '이용정보') {
        mesaage.reply('이용정보 킴');
        mesaage.reply('개발자 버전 -1.0.0 검을 강화시켜 공격력을 높이세요. 검공격력 이라 쳐 공격력 확인이 가능합니다. 또한 공격력순위로 통해 순위 확인이 가능합니다. 다음내용은 패치에 나와있습니다. ')
    }
});

client.on('message', (mesaage) => {
    if(mesaage.content === '강화') {
        mesaage.reply('검 공격력 1+');}})
