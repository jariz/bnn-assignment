import 'server-only';
import { getSdk, type Requester } from '@/generated/api';
import { type DocumentNode } from 'graphql';
import { cache } from 'react';

const fetcher = async (queryName: string, variables: string, options?: NextFetchRequestConfig) => {
    const doc = await importQuery(queryName);
    if (!doc) {
        throw new Error(`No query found for ${queryName}`);
    }

    return fetch(`https://graphql-pokeapi.graphcdn.app/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: doc.loc?.source.body,
            variables: variables ? JSON.parse(variables) : {},
        }),
        next: {
            tags: [queryName, variables ?? '<empty>'],
            revalidate: 600,
            ...options,
        },
    })
        .then(res => res.json())
        .then(res => {
            if (res.errors) {
                throw new Error(res.errors[0].message);
            }
            return res.data;
        })
        .catch(err => {
            throw new Error(err as string);
        });
};

/**
 * This is a cache wrapper around the fetch function. As we use a POST request
 * (for graphql) the response will
 * not be cached. React's `cache` function will dedupe the request and cache the
 * response, but only if the given arguments are shallowly equal. Thus, we
 * stringify the variables and use the query name as the key (we could also use
 * the query itself, but that would be a lot of data).
 */
const cachedFetcher = cache(fetcher);

const requester: Requester<NextFetchRequestConfig> = async (doc, variables) => {
    const docName = extractOperationName(doc.loc?.source.body || '') ?? '';
    const stringifiedVariables = JSON.stringify(variables);
    return cachedFetcher(docName, stringifiedVariables);
};

/**
 * This is a wrapper around the API for the
 * GraphQL queries and mutations that are defined in the `src/gql` folder.
 */
const sdk = getSdk(requester);

export default sdk;

function extractOperationName(query: string) {
    const operationNameRegex = /^\s*(?:query|mutation|subscription)?\s*(\w+)/i;
    const matches = query.match(operationNameRegex);

    if (matches && matches.length >= 2) {
        return matches[1];
    }

    return '';
}

function importQuery(queryName: string) {
    return import(`@/generated/api`).then(mod => mod[`${queryName}Document` as keyof typeof mod] as DocumentNode);
}
