const express = require('express');
const { sendMessage } = require('./producer');
const { startConsumer } = require('./consumer');

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Kafka POC Service is running');
});

app.post('/produce', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('Message is required');
  }

  try {
    await sendMessage(message);
    res.send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Error sending message');
  }
});

const start = async () => {
  try {
    await startConsumer();
    console.log('Consumer connected');
  } catch (error) {
    console.error('Error connecting consumer:', error.message);
  }

  app.listen(3000, () => {
    console.log('Kafka POC Service listening on port 3000');
  });
};

start();