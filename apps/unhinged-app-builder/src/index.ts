import { Hono } from "hono";
import { McpServer, StreamableHttpTransport } from "mcp-lite";

// Create MCP server for unhinged app building
const mcp = new McpServer({
	name: "unhinged-app-builder",
	version: "1.0.0",
});

// Prompt for generating completely insane website concepts
mcp.prompt("insane-website-concept", {
	description:
		"Generate an absolutely unhinged website concept that defies all conventional wisdom",
	arguments: {
		type: "object",
		properties: {
			theme: {
				type: "string",
				description:
					"Base theme or topic (e.g., 'cats', 'space', 'conspiracy theories')",
			},
			chaos_level: {
				type: "string",
				enum: ["mild", "moderate", "extreme", "reality-breaking"],
				description: "How unhinged should this get?",
			},
			target_audience: {
				type: "string",
				description: "Who is this madness for?",
			},
		},
		required: ["theme", "chaos_level"],
	},
	handler: (args: {
		theme: string;
		chaos_level: string;
		target_audience?: string;
	}) => ({
		description: "Unhinged website concept generation",
		messages: [
			{
				role: "user",
				content: {
					type: "text",
					text: `Create the most UNHINGED, reality-defying website concept about "${args.theme}" with ${args.chaos_level} chaos level${args.target_audience ? ` for ${args.target_audience}` : ""}. 

Make it so bizarre that it would make Salvador Dalí question reality. Include:
- A completely nonsensical navigation structure
- Interactive elements that serve no logical purpose
- Color schemes that hurt the soul
- Typography choices that make Comic Sans look professional
- Content that exists in multiple dimensions simultaneously
- Features that actively confuse the user
- At least 3 completely unnecessary animations
- A footer that's somehow also the header

Make this so unhinged that even the internet would be embarrassed. GO ABSOLUTELY WILD.`,
				},
			},
		],
	}),
});

// Prompt for generating chaotic UI component ideas
mcp.prompt("chaotic-ui-component", {
	description:
		"Generate UI components that exist to cause maximum confusion and chaos",
	arguments: {
		type: "object",
		properties: {
			component_type: {
				type: "string",
				description: "Type of component (button, form, navigation, etc.)",
			},
			dysfunction_level: {
				type: "string",
				enum: ["quirky", "problematic", "cursed", "eldritch-horror"],
				description: "How dysfunctional should this component be?",
			},
			special_powers: {
				type: "string",
				description: "What weird abilities should this component have?",
			},
		},
		required: ["component_type", "dysfunction_level"],
	},
	handler: (args: {
		component_type: string;
		dysfunction_level: string;
		special_powers?: string;
	}) => ({
		description: "Chaotic UI component generation",
		messages: [
			{
				role: "user",
				content: {
					type: "text",
					text: `Design the most CHAOTIC ${args.component_type} component with ${args.dysfunction_level} dysfunction level${args.special_powers ? ` that has the power to ${args.special_powers}` : ""}.

This component should:
- Actively work against user expectations
- Have hover states that are more like hover nightmares
- Include at least 2 completely unnecessary sound effects
- Change its behavior based on the phase of the moon
- Have a loading state that never actually loads anything
- Include tooltips that provide misinformation
- Respond to clicks by doing something completely different
- Have animations that make users question their life choices

Make this component so chaotic that it becomes a work of anti-UX art. Embrace the madness!`,
				},
			},
		],
	}),
});

// Prompt for generating absurd website layouts
mcp.prompt("absurd-layout-generator", {
	description:
		"Generate website layouts that defy the laws of physics and good design",
	arguments: {
		type: "object",
		properties: {
			layout_style: {
				type: "string",
				description:
					"Base layout approach (grid, flexbox, absolute chaos, etc.)",
			},
			reality_distortion: {
				type: "string",
				enum: [
					"slight-bend",
					"moderate-warp",
					"reality-optional",
					"physics-is-a-lie",
				],
				description: "How much should this layout break reality?",
			},
			screen_size: {
				type: "string",
				description: "Target screen size or device",
			},
			forbidden_elements: {
				type: "array",
				items: { type: "string" },
				description:
					"Elements that should definitely NOT be used (but will be anyway)",
			},
		},
		required: ["layout_style", "reality_distortion"],
	},
	handler: (args: {
		layout_style: string;
		reality_distortion: string;
		screen_size?: string;
		forbidden_elements?: string[];
	}) => ({
		description: "Absurd layout generation",
		messages: [
			{
				role: "user",
				content: {
					type: "text",
					text: `Create the most ABSURD website layout using ${args.layout_style} with ${args.reality_distortion} reality distortion${args.screen_size ? ` optimized for ${args.screen_size}` : ""}${args.forbidden_elements ? ` while definitely using these forbidden elements: ${args.forbidden_elements.join(", ")}` : ""}.

This layout must:
- Have sections that overlap in impossible ways
- Include at least one element that scrolls in the wrong direction
- Feature a sidebar that's actually the main content
- Have a header that follows you around like a lost puppy
- Include floating elements that serve no purpose except chaos
- Use z-index values that break mathematics
- Have responsive breakpoints at completely random widths
- Include at least one element that exists outside the viewport on purpose
- Feature content that appears in different orders on refresh

Make this layout so absurd that CSS itself would file a restraining order. MAXIMUM CHAOS!`,
				},
			},
		],
	}),
});

// Prompt for generating ridiculous content strategies
mcp.prompt("ridiculous-content-strategy", {
	description:
		"Generate content strategies that make no sense but somehow work in an unhinged way",
	arguments: {
		type: "object",
		properties: {
			website_purpose: {
				type: "string",
				description: "What is this website supposedly for?",
			},
			content_madness: {
				type: "string",
				enum: [
					"slightly-off",
					"completely-bonkers",
					"reality-questioning",
					"existential-crisis",
				],
				description: "Level of content madness",
			},
			writing_style: {
				type: "string",
				description: "What writing style should we completely destroy?",
			},
		},
		required: ["website_purpose", "content_madness"],
	},
	handler: (args: {
		website_purpose: string;
		content_madness: string;
		writing_style?: string;
	}) => ({
		description: "Ridiculous content strategy generation",
		messages: [
			{
				role: "user",
				content: {
					type: "text",
					text: `Create a RIDICULOUS content strategy for a website about "${args.website_purpose}" with ${args.content_madness} madness level${args.writing_style ? ` that parodies ${args.writing_style} writing style` : ""}.

This content strategy should include:
- Headlines that actively mislead users
- Body text that starts about one topic and ends up somewhere completely different
- Call-to-action buttons that ask users to do impossible things
- Product descriptions that describe everything except the actual product
- About pages that are entirely about someone else
- FAQ sections where the questions and answers don't match
- Testimonials from fictional characters, historical figures, or inanimate objects
- Blog posts that exist in reverse chronological order within each paragraph
- Contact information that leads to interdimensional portals

Make this content strategy so ridiculous that even spam emails would be embarrassed to associate with it!`,
				},
			},
		],
	}),
});

// Prompt for generating completely nonsensical interactive features
mcp.prompt("nonsensical-features", {
	description:
		"Generate interactive features that serve no purpose except to confuse and delight",
	arguments: {
		type: "object",
		properties: {
			feature_category: {
				type: "string",
				description: "Type of feature (animation, interaction, widget, etc.)",
			},
			absurdity_factor: {
				type: "string",
				enum: [
					"mildly-confusing",
					"deeply-puzzling",
					"reality-bending",
					"cosmic-horror",
				],
				description: "How absurd should this feature be?",
			},
			user_confusion_goal: {
				type: "string",
				description: "What specific type of confusion should this create?",
			},
			impossible_requirement: {
				type: "string",
				description: "One completely impossible thing this feature must do",
			},
		},
		required: ["feature_category", "absurdity_factor"],
	},
	handler: (args: {
		feature_category: string;
		absurdity_factor: string;
		user_confusion_goal?: string;
		impossible_requirement?: string;
	}) => ({
		description: "Nonsensical interactive feature generation",
		messages: [
			{
				role: "user",
				content: {
					type: "text",
					text: `Create the most NONSENSICAL ${args.feature_category} feature with ${args.absurdity_factor} absurdity${args.user_confusion_goal ? ` designed to cause ${args.user_confusion_goal}` : ""}${args.impossible_requirement ? ` while somehow managing to ${args.impossible_requirement}` : ""}.

This feature must:
- Respond to user actions that haven't happened yet
- Have states that exist in parallel universes
- Include sound effects that are actually just descriptions of sounds
- Change functionality based on the user's browser's mood
- Have a help system that makes things more confusing
- Include easter eggs that are actually just regular eggs
- Feature progress bars that go backwards when you're not looking
- Have keyboard shortcuts that require keys that don't exist
- Include drag-and-drop functionality where you can drop items into the void
- Feature a settings menu that changes the settings of other websites

Make this feature so nonsensical that it becomes performance art. The goal is maximum bewilderment with a side of existential dread!`,
				},
			},
		],
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
