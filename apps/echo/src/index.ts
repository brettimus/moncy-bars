import { Hono } from "hono";
import { mcpHandler } from "./mcp/server";

// Integrate with HTTP framework
const app = new Hono();

app.all("/mcp", async (c) => {
	const response = await mcpHandler(c.req.raw);
	return response;
});

export default app;
