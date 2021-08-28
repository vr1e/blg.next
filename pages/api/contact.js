import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		// Store in a database
		const newMessage = { email, name, message };
		let client;

		try {
			client = await MongoClient.connect(
				`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.9f6zh.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
			);
		} catch (error) {
			res.status(500).json({ message: 'Could not connect to database!' });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Storing data failed!' });
			return;
		}

		client.close();

		res.status(201).json({
			message: 'Successfully stored the message!',
			payload: newMessage,
		});

		return;
	}

	res.status(405).json({ message: 'Invalid request.' });
}
