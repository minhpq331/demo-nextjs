import { GetServerSideProps } from 'next';
import { NEXT_PUBLIC_APP_PUBLIC_KEY, NEXT_PUBLIC_APP_ENV, API_BASE_URL, RUNTIME_API_KEY } from '../config/environment';

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log('Server: API_BASE_URL:', API_BASE_URL);
    console.log('Server: RUNTIME_API_KEY:', RUNTIME_API_KEY);
    console.log('Server: NEXT_PUBLIC_APP_PUBLIC_KEY:', NEXT_PUBLIC_APP_PUBLIC_KEY);
    console.log('Server: NEXT_PUBLIC_APP_ENV:', NEXT_PUBLIC_APP_ENV);
    return {
        props: {},
    };
};

function Page() {
    // render if post is found
    // if post is not found redirect to index
    console.log('Client: API_BASE_URL:', API_BASE_URL);
    console.log('Client: RUNTIME_API_KEY:', RUNTIME_API_KEY);
    console.log('Client: NEXT_PUBLIC_APP_PUBLIC_KEY:', NEXT_PUBLIC_APP_PUBLIC_KEY);
    console.log('Client: NEXT_PUBLIC_APP_ENV:', NEXT_PUBLIC_APP_ENV);
    return (
        <div>
            <h1>Configuration</h1>
            <p>API_BASE_URL: {API_BASE_URL}</p>
            <p>RUNTIME_API_KEY: {RUNTIME_API_KEY}</p>
            <p>NEXT_PUBLIC_APP_PUBLIC_KEY: {NEXT_PUBLIC_APP_PUBLIC_KEY}</p>
            <p>NEXT_PUBLIC_APP_ENV: {NEXT_PUBLIC_APP_ENV}</p>
        </div>
    );
}

export default Page;
