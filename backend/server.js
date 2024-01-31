import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
});

async function getQuestions(top, exp, num, sty) {
    let topic = top;
    let expertise = exp;
    let numQuestions = num;
    let style = sty;
    let prompt = 
    `Please generate ${numQuestions} ${expertise} level ${topic} quiz/test questions and make sure you do not answer any of the questions.
    Please word the questions as if you were ${style}, make sure to integrate this in each question but keep the questions based on ${topic}.
    Please make sure the mention ${topic} in each question.
    Make sure to format your response as an array with each question being a string value in the array.
    Please do not number the questions.
    Please do not include any other text in the response.`;
  const completion = await openai.chat.completions.create({
    messages: [{role: "user", content: prompt}],
    model: "gpt-3.5-turbo",
  });
  try {
    console.log(completion.choices[0].message.content)
    console.log(JSON.parse(`{"Questions": ${completion.choices[0].message.content}}`));
    return JSON.parse(`{"Questions": ${completion.choices[0].message.content}}`);
  } catch (error) {
    console.log({
        error: "Invalid response from GPT. Please try again."});
    return {
      error: "Invalid response from GPT. Please try again."}
  }
}

// getQuestions('javascript', 'novice', 5, 'Captain Jack Sparrow');

async function getEvaluation(ques, sub) {
    let question = ques;
    let submission = sub;
    let prompt = `Please provide answer for the following question: '${question}' then compare that answer to the possible submission: '${submission}' to determine if that submission is correct or incorrect with an explanation why.
    Make sure you do not repeat the submission or question in your response.
    Make sure you do not use quotation marks in your evaluation or explanation.
    Make sure to format the response as a JSON object with only two values: 'evalutaion' and 'explanation'.
    Please do not use any line breaks in your response.`
    const completion = await openai.chat.completions.create({
      messages: [{role: "user", content: prompt}],
      model: "gpt-3.5-turbo",
    });
    try {
      console.log(completion.choices[0].message.content)
      console.log(JSON.parse(completion.choices[0].message.content))
      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.log({
          error: "Invalid response from GPT. Please try again."});
      return {
        error: "Invalid response from GPT. Please try again."}
    }
}

// getEvaluation('Ahoy there! What be the symbol for strict equality in JavaScript?', 'The symbol is ===');