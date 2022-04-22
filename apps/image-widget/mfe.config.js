module.exports = {
  name: 'image-widget',
  exposes: {
    './Module': 'apps/image-widget/src/app/remote-entry/entry.module.ts',
    './Component': 'apps/image-widget/src/app/remote-entry/entry.component.ts',
  },
};
