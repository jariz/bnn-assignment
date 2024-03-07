import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://graphql-pokeapi.graphcdn.app/',
    documents: ['src/gql/*.graphql'],
    generates: {
        'src/generated/api.ts': {
            documents: './src/graphql/**/*.graphql',
            plugins: [
                {
                    add: {
                        content: '/* eslint-disable */',
                    },
                },
                'typescript',
                'typescript-operations',
                'typescript-generic-sdk',
            ],
        },
        'src/schemas/api.graphql': {
            plugins: ['schema-ast'],
        },
    },
};
export default config;
