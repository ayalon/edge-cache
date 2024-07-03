import { type ModuleOptions } from "nuxt-graphql-middleware";
const IS_DEV = process.env.NODE_ENV === "development";

const index: ModuleOptions = {
  graphqlEndpoint: "https://countries.trevorblades.com/graphql",
  downloadSchema: IS_DEV,
  codegenConfig: {},
  outputDocuments: true,
  autoImportPatterns: [
    "./pages/**/*.graphql",
    "./composables/**/*.graphql",
    "./components/**/*.graphql",
    "./layouts/**/*.graphql",
    "./server/**/*.graphql",
  ],
  autoInlineFragments: true,
  codegenSchemaConfig: {
    urlSchemaOptions: {
      headers: {
        authentication: "server-token",
      },
    },
  },

  enableFileUploads: true,
};

export default index;
