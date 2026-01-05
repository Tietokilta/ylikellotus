import {defineConfig} from "next/dist/experimental/testmode/playwright";

export default defineConfig([{
    rule: {
        "@next/next/no-img-element": "off",
    }
}])