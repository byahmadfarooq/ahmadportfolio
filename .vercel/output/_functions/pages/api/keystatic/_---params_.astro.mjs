import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { g as getEnv$1, s as setOnSetGetEnv } from '../../../chunks/runtime_1tkDUGik.mjs';
import { config as config$1, singleton, fields, collection } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

setOnSetGetEnv(() => {
	
});

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _config$clientId, _config$clientSecret, _config$secret;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : getSecret('KEYSTATIC_GITHUB_CLIENT_ID'),
      clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : getSecret('KEYSTATIC_GITHUB_CLIENT_SECRET'),
      secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : getSecret('KEYSTATIC_SECRET')
    }, {
      slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    return new Response(body, {
      status,
      headers
    });
  };
}

const config = config$1({
  storage: { kind: "github", repo: "byahmadfarooq/ahmadportfolio" },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        tag: fields.text({ label: "Tag", description: "e.g. Internal platform, Brand + website" }),
        description: fields.text({ label: "Short description", multiline: true }),
        problem: fields.text({ label: "The problem", multiline: true }),
        built: fields.text({ label: "What I built", multiline: true }),
        result: fields.text({ label: "The result", multiline: true }),
        stack: fields.text({ label: "Tech stack" }),
        url: fields.text({ label: "Live URL", description: "Optional" }),
        order: fields.integer({ label: "Display order", defaultValue: 0 }),
        body: fields.mdx({ label: "Full case study" })
      }
    }),
    "lab-notes": collection({
      label: "Lab Notes",
      slugField: "title",
      path: "src/content/lab-notes/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date" }),
        excerpt: fields.text({ label: "Excerpt", multiline: true }),
        tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags", itemLabel: (props) => props.value }),
        body: fields.mdx({ label: "Content" })
      }
    })
  },
  singletons: {
    site: singleton({
      label: "Site Settings",
      path: "src/content/site",
      schema: {
        name: fields.text({ label: "Site name", defaultValue: "Ahmad Farooq" }),
        tagline: fields.text({ label: "Tagline" }),
        email: fields.text({ label: "Email", defaultValue: "ahmad@zotirlabs.com" }),
        calLink: fields.text({ label: "Cal.com booking link", description: "Your Cal.com event URL slug" }),
        linkedin: fields.url({ label: "LinkedIn" }),
        github: fields.url({ label: "GitHub" }),
        twitter: fields.url({ label: "X / Twitter" }),
        instagram: fields.url({ label: "Instagram" })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ALL,
	all,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
