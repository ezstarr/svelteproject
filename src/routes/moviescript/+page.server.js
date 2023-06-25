import { apiKey } from '$env/static/private'
import { Configuration, OpenAIApi } from 'openai'

//@ts-check
/** @type {import('./$types').PageServerLoad} */
// Above comment is called JSDoc

const url="https://api.openai.com/v1/completions"

export async function load({fetch}) {
    let flag = true
    /** @type {float} */ 
    let thing = 23.5
    const reply = ""

    if (flag) {
        
        const configuration = new Configuration({
            apiKey: { apiKey }
        })

        const openai = new OpenAIApi(configuration)

        async function fetchBotReply(outline) {
            const response = await openai.createCompletion({
              model: 'text-davinci-003',
              prompt: `Generate a short message to enthusiastically say "${outline}" sounds interesting and that you need some minutes to think about it. Mention one aspect of the sentence.`,
              // max_tokens: 60    
            })
        reply = response.data.choices[0].text.trim()
        console.log(reply)
        }
    }

    return { reply };
};