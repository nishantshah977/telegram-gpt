require("replup").config();

const token= process.env['token'];
const gpt= process.env['api_key_gpt3'];
const { Configuration, OpenAIApi } = require("openai");


  const Telegraf = require('telegraf');
  const bot = new Telegraf(process.env.token);

  async function gptFunc(msg){

    
const configuration = new Configuration({
  apiKey: process.env.api_key_gpt3,
});
const openai = new OpenAIApi(configuration);
const output = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Write about or reply  ${msg}`,
  temperature: 1,
  max_tokens:500,
});
      let ans = output.data.choices[0].text;
      return ans;
  
}

bot.command("start",(ctx)=>{
  ctx.reply("Hello, Welcome to @studentforumbot . Get answers to your questions using Natural Language processing. \n\n\n Got any queries https://studentforum.xyz");
})

bot.use(async (ctx) => {
  if(ctx.message != null || ctx.message != undefined){
    let msg = ctx.message.text;
    let ans = await gptFunc(msg);
    ctx.reply(ans + "\n\n\n studentforum.xyz");
  }
});



bot.launch();




  


