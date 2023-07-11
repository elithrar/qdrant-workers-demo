# Example: Query Embeddings in a Qdrant vector database from Cloudflare Workers

**Note**: 🧪 This is a example application and is not officially supported by Cloudflare.

An example application that connects to a [Qdrant Cloud](https://qdrant.tech/documentation/cloud/) database from [Cloudflare Workers](https://workers.dev/) — allowing you to run vector search queries across collections stored in your Qdrant cluster(s).

This uses [Qdrant's TypeScript client](https://github.com/qdrant/qdrant-js) and deploys directly to Cloudflare Workers.

## Cloning the Repo

To deploy this quickly (assuming you have a Cloudflare account):    

1. Clone the repo: `git clone git@github.com:elithrar/qdrant-workers-demo.git`
2. Sign up for Qdrant Cloud (https://cloud.qdrant.io/) and get an API key + cluster URL
3. Set the API key as a secret: `wrangler secret put QDRANT_API_KEY` (follow the prompts)
4. Update `wrangler.toml` and set the `QDRANT_CLUSTER` variable to the address for _your_ newly created cluster.
5. Install the dependencies: `npm i`
6. Deploy with `wrangler deploy`

## License

Copyright Cloudflare, Inc (2023). Apache-2.0 licensed. See the LICENSE file for details.
