import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.hay.com",
				pathname: "/**",
			},
			{
				protocol: "http",
				hostname:
					"dev-apne2-kr-evenly-app-lb-1348251896.ap-northeast-2.elb.amazonaws.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
