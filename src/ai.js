import "dotenv/config";
import OpenAI from "openai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
const openai = new OpenAI({
    apiKey: process.env.CHEFCLAUDE_API_KEY,
    dangerouslyAllowBrowser: true,
})




export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "GPT-4o",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}