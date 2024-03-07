import { PropsWithChildren } from 'react';

export default async function Home({ children }: PropsWithChildren) {
    return (
        <div className="container flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">{children}</div>
        </div>
    );
}
