import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'github', repo: 'byahmadfarooq/ahmadportfolio' },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        tag: fields.text({ label: 'Tag', description: 'e.g. Internal platform, Brand + website' }),
        description: fields.text({ label: 'Short description', multiline: true }),
        problem: fields.text({ label: 'The problem', multiline: true }),
        built: fields.text({ label: 'What I built', multiline: true }),
        result: fields.text({ label: 'The result', multiline: true }),
        stack: fields.text({ label: 'Tech stack' }),
        url: fields.text({ label: 'Live URL', description: 'Optional' }),
        order: fields.integer({ label: 'Display order', defaultValue: 0 }),
        body: fields.mdx({ label: 'Full case study' }),
      },
    }),
    'lab-notes': collection({
      label: 'Lab Notes',
      slugField: 'title',
      path: 'src/content/lab-notes/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: (props) => props.value }),
        body: fields.mdx({ label: 'Content' }),
      },
    }),
  },
  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'src/content/site',
      schema: {
        name: fields.text({ label: 'Site name', defaultValue: 'Ahmad Farooq' }),
        tagline: fields.text({ label: 'Tagline' }),
        email: fields.text({ label: 'Email', defaultValue: 'ahmad@zotirlabs.com' }),
        calLink: fields.text({ label: 'Cal.com booking link', description: 'Your Cal.com event URL slug' }),
        linkedin: fields.url({ label: 'LinkedIn' }),
        github: fields.url({ label: 'GitHub' }),
        twitter: fields.url({ label: 'X / Twitter' }),
        instagram: fields.url({ label: 'Instagram' }),
      },
    }),
  },
});
