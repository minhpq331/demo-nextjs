// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: number;
    message: string;
    data?: {
        id: number;
        title: string;
        description: string;
    };
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.query.id !== '1') {
        res.status(404).json({ status: 1, message: 'Post not found' });
    } else {
        res.status(200).json({
            status: 0,
            message: 'OK',
            data: {
                id: 1,
                title: 'test',
                description: 'test',
            },
        });
    }
}
