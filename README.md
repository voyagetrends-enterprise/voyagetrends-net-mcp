# voyagetrends-net-mcp

VoyageTrends MCP server - unified MCP for VoyageTrends LLC (Digital-Shore, Shore All in One, The Voyage Vault)

## Status
- Repository created and ready
- Target domain on Whop: `voyagetrends-net.whop.site` (ready)
- Vercel project `voyagetrends-net-mcp` exists (domain connection pending team permissions)

## Next steps for connection
1. Push MCP server code to this repository (main branch).
2. Connect the repo to Vercel project `voyagetrends-net-mcp` (or deploy manually).
3. Point or use `voyagetrends-net.whop.site` as the public endpoint for the MCP product.
4. Create the corresponding product/membership on the Whop account linked to that domain.

## Structure (suggested)
```
/
├── README.md
├── package.json          # or requirements.txt / go.mod depending on stack
├── src/ or mcp/         # MCP server implementation
└── .env.example
```

Owner: VoyageTrends LLC / Milton Maradiaga
