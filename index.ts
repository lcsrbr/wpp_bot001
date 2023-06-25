// Supports ES6
import { create, Whatsapp } from 'venom-bot';
import { hookEvents } from './events';


async function bootstrap() {
  try {
    
    const client = await create({ session: "session-name" })

    hookEvents(client);

  } catch (err) {

    console.log(err, "bootstrap err")

  }
}

bootstrap();
