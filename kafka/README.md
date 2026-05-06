# Kafka POC in Node.js

This is a simple Proof of Concept (POC) for using Apache Kafka with a Node.js Express service using the KafkaJS library.

## Prerequisites

- Node.js installed
- Apache Kafka running locally on `localhost:9092`

To start Kafka locally using Docker:

```bash
docker run -p 9092:9092 apache/kafka:latest
```

Or follow the official Kafka documentation to set up a local cluster.

## Installation

```bash
npm install
```

## Usage

Start the service:

```bash
npm start
```

The service will start on port 3000 and begin consuming messages from the 'test-topic'.

### API Endpoints

- `GET /`: Health check
- `POST /produce`: Send a message to Kafka
  - Body: `{ "message": "Your message here" }`

Example using curl:

```bash
curl -X POST http://localhost:3000/produce -H "Content-Type: application/json" -d '{"message": "Hello Kafka!"}'
```

You should see the message logged in the service console.

## Files

- `index.js`: Main Express service with producer and consumer
- `producer.js`: Standalone producer script
- `consumer.js`: Standalone consumer script