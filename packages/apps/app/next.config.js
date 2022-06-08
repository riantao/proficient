// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");
const bundleAnalyzer = require("@next/bundle-analyzer");
const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true"
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withBundleAnalyzer(withNx(nextConfig));
