import { McpServer, StreamableHttpTransport } from "mcp-mcp-mcp";

// Create MCP server
const mcp = new McpServer({
	name: "example-server",
	version: "1.0.0",
});

// Add a tool
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
export const mcpHandler = transport.bind(mcp);
