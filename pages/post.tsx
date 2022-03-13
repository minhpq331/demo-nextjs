import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ApiService } from '../services/api.service';

type Data = { id: number; title: string; description: string };

export const getServerSideProps: GetServerSideProps = async (context) => {
    let post;
    try {
        const id = context.query?.id as string;
        post = await ApiService.getPostById(id);
    } catch (err) {
        post = null;
    }
    if (!post) {
        return {
            redirect: {
                destination: '/empty',
                permanent: false,
            },
        };
    }

    return {
        props: {
            post,
        },
    };
};

function Page({
    post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // render if post is found
    // if post is not found redirect to index
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    );
}

export default Page;
