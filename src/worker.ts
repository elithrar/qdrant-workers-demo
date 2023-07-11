import { QdrantClient } from '@qdrant/js-client-rest';
import { Hono } from 'hono';

export interface Env {
	QDRANT_API_KEY: string;
	QDRANT_CLUSTER: string;
}

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// Initializes a new Qdrant Cloud client against our cluster
		const client = new QdrantClient({
			url: env.QDRANT_CLUSTER,
			apiKey: env.QDRANT_API_KEY,
		});

		const app = new Hono();

		app.onError((err, c) => {
			console.error(err);
			return c.json({ error: err }, 500);
		});

		app.get('/api/collections', async (c) => {
			let resp = await client.getCollections();
			return c.json(resp);
		});

		app.get('/', async (c) => {
			return c.json({});
		});

		return app.fetch(req, env, ctx);
	},
};
