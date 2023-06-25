import { Message, Whatsapp } from "venom-bot";

async function greet(client: Whatsapp) {
  
  // client.onMessage((message: Message) => {

  //   const { isNewMsg, from, body } = message;

  //   console.log(
  //     "isNewMessage", isNewMsg
  //   );

  //   console.log(message);

  //   client.sendText(from, body)

  // });
  client.onAnyMessage((message: Message) => {

    const { isNewMsg, from, body } = message;


    console.log(from, isNewMsg)

    console.log(message.body);
  })

} 

export = {
  name: "greet",
  hook: greet
}