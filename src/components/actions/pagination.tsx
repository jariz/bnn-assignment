'use client';

import ReactPaginate from 'react-paginate';
import { buttonVariants } from '@/components/actions/button';
import { PAGE_SIZE } from '@/lib/const';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ count }: { count: number }) => {
    const router = useRouter();
    const params = useSearchParams();

    return (
        <ReactPaginate
            pageCount={(count ?? 0) / PAGE_SIZE}
            className="flex"
            forcePage={Math.floor(parseInt(params.get('offset') ?? '0') / PAGE_SIZE)}
            onPageChange={({ selected }) => router.push(`?offset=${selected * PAGE_SIZE}`)}
            activeLinkClassName={buttonVariants({ variant: 'default' })}
            nextLinkClassName={buttonVariants({ variant: 'outline' })}
            disabledLinkClassName={buttonVariants({ variant: 'disabled' })}
            pageLinkClassName={buttonVariants({ variant: 'outline' })}
            previousLinkClassName={buttonVariants({ variant: 'outline' })}
            breakLinkClassName={buttonVariants({ variant: 'ghost' })}
            hrefBuilder={page => `?offset=${page * PAGE_SIZE}`}
        />
    );
};
export default Pagination;
