import { Hono } from "hono";
import { McpServer, StreamableHttpTransport } from "mcp-lite";

// Create MCP server with Zod converter
const mcp = new McpServer({
	name: "example-server",
	version: "1.0.0",
});

// Add a tool using json schema (zod, etc also possible)
mcp.tool("echo", {
	description: "Echoes the input message",
	inputSchema: {
		type: "object",
		properties: {
			message: { type: "string" },
		},
		required: ["message"],
	},
	handler: (args: { message: string }) => ({
		content: [{ type: "text", text: args.message }],
	}),
});

// Create HTTP transport
const transport = new StreamableHttpTransport();
const mcpHandler = transport.bind(mcp);

// Integrate with HTTP framework
const app = new Hono();

app.all("/mcp", async (c) => {
	const response = await mcpHandler(c.req.raw);
	return response;
});

export default app;
