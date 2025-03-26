import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: '',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: '',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: '_posts/',
        fields: [
          {
            name: 'layout',
            type: 'string',
            label: 'Layout',
            required: true,
            options: ['post'],
          },
          {
            name: 'date',
            type: 'datetime',
            label: 'Date',
            required: true,
          },
          {
            name: 'title',
            type: 'string',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            name: 'headerImg',
            type: 'image',
            label: 'Header Image',
            required: true,
          },
          {
            name: 'body',
            type: 'rich-text',
            label: 'Body',
            isBody: true,
          },
          {
            name: 'description',
            type: 'rich-text',
            label: 'Description',
            required: true,
          },
          {
            name: 'tags',
            type: 'string',
            list: true,
            label: 'Tags',
            required: true,
          },
          {
            name: 'permalink',
            type: 'string',
            list: false,
            label: 'Permalink',
            required: false,
          },
          {
            name: 'eleventyExcludeFromCollections',
            type: 'boolean',
            list: true,
            label: 'Draft',
            required: false,
          },
        ],
      },
    ],
  },
});
