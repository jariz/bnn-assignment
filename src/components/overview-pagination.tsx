'use client';

import ReactPaginate from 'react-paginate';
import { buttonVariants } from '@/components/ui/button';
import { PAGE_SIZE } from '@/lib/const';
import { useRouter } from 'next/navigation';

const OverviewPagination = ({ count }: { count: number }) => {
    const router = useRouter();

    return (
        <ReactPaginate
            pageCount={(count ?? 0) / PAGE_SIZE}
            className="flex"
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
export default OverviewPagination;
