import OpenAI from "openai";
export const sendMsg=async(message)=>{
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});
const res = await openai.completions.create({
  model: "text-davinci-003",
  prompt: message,
  temperature: 0.5,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0
});
return res.choices[0].text
}

