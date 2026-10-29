import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';

const handler = createMcpHandler((server) => {
  server.registerTool(
    'get_brands_status',
    {
      description: 'Get status of VoyageTrends LLC brands: Digital-Shore, Shore All in One, TheVoyageVault',
      inputSchema: z.object({}),
    },
    async () => {
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            digital_shore: { status: 'active', domain: 'digital-shore.com' },
            shore_all_in_one: { status: 'active', focus: 'all-in-one shore services' },
            thevoyagevault: { status: 'active', focus: 'vault / premium products' },
            mcp_endpoint: 'voyagetrends-net.whop.site',
            owner: 'VoyageTrends LLC / Milton Maradiaga'
          }, null, 2)
        }]
      };
    }
  );

  server.registerTool(
    'get_ops_summary',
    {
      description: 'Operational summary for the three brands under VoyageTrends LLC',
      inputSchema: z.object({ brand: z.string().optional() }),
    },
    async ({ brand }) => {
      const summary = {
        message: brand ? `Summary for ${brand}` : 'Full ops summary',
        brands: ['digital-shore', 'shore all in one', 'thevoyagevault'],
        mcp: 'unified',
        next: 'Connect domain and create Whop product'
      };
      return {
        content: [{ type: 'text', text: JSON.stringify(summary, null, 2) }]
      };
    }
  );
});

export { handler as GET, handler as POST };
