// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: number;
    message: string;
    data: {
        id: number;
        username: string;
        password: string;
    };
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        status: 0,
        message: 'OK',
        data: {
            id: 1,
            username: req.body.username,
            password: req.body.password,
        },
    });
}
