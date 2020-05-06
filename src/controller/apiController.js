const { sendMessage, sendMessageWhatsapp } = require("../lib/twilio");
const MessagingReponse = require("twilio").twiml.MessagingResponse;

const apiIndexController = (req, res) => {
  const response = {
    message: "Este es el index",
  };
  res.json(response);
};

// const sendMessage = (req, res) => {
//   const { message } = req.body;
//   const env_port = process.env.port;
//   console.log(message);
//   const msjResponse = {
//     status: "Message sended2",
//     port: env_port,
//   };
//   res.json(msjResponse);
// };

const postMessage = async (req, res) => {
  const { message, phone } = req.body;
  const result = await sendMessage(message, phone);
  console.log(result.sid);
  res.json(result);
};

const postMessageWhatsapp = async (req, res) => {
  const { message, phone } = req.body;
  const result = await sendMessageWhatsapp(message, phone);
  console.log(result.sid);
  res.json(result);
};

module.exports = {
  apiIndexController,
  postMessage,
  postMessageWhatsapp,
};
