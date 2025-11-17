import type { NextConfig } from "next";

const nextConfig: NextConfig = {

      outputFileTracingIncludes: {

       '/api/**/*': ['./app/generated/.prisma/client/**/*'],
        '/*': ['./app/generated/.prisma/prisma/client/**/*'],

   },
};

export default nextConfig;
