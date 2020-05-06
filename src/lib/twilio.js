const config = require("../../config");
const client = require("twilio")(config.accountSid, config.authToken);
const clientWhatsapp = require("twilio")(
  config.accountSidWhatsapp,
  config.authTokenWhatsapp
);
async function sendMessage(body, phone) {
  try {
    const message = await client.messages.create({
      to: phone,
      from: process.env.PHONE_NUMBER,
      body,
    });
    return message;
  } catch (error) {
    console.log(error);
  }
}

async function sendMessageWhatsapp(body, phone) {
  try {
    const message = await clientWhatsapp.messages.create({
      to: "whatsapp:" + phone,
      from: "whatsapp:" + process.env.PHONE_NUMBER_WHATSAPP,
      body,
    });
    return message;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sendMessage, sendMessageWhatsapp };
