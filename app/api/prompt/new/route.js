import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  // get prompt details from req
  const { userId, prompt, tag } = await req.json();
  try {
    // connect to DB
    connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create new Prompt", { status: 500 });
  }
};
