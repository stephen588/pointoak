import { initBotId } from "botid/client/core";

// Vercel BotID: attaches the invisible bot check to contact form submissions (checked in app/api/contact/route.ts).
initBotId({
  protect: [{ path: "/api/contact/", method: "POST" }],
});
