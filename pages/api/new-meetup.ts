// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient} from "mongodb";

type Data = {
    message: string
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const client = new MongoClient('mongodb+srv://nextMongoTest:5eOtSwj53MtMjH1n@cluster0.3ztt4yj.mongodb.net/?retryWrites=true&w=majority')
    await client.connect();
    const db = client.db('nextMongo');
    const collection = db.collection('meetups');

    await collection.insertOne(req.body);

    await client.close(true)
    return res.status(201).json({message: 'Meetup saved'})
}

export default handler
// 5eOtSwj53MtMjH1n
// nextMongoTest