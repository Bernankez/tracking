import { defineConfig } from "node-modules-inspector";

export default defineConfig({
  name: "@bernankez/tracking",
  defaultFilters: {
    sourceType: "prod",
    excludeWorkspace: true,
    depths: [1, 2],
  },
  defaultSettings: {
    showPublishTimeBadge: true,
    showInstallSizeBadge: true,
    showFileComposition: true,
  },
  excludePackages: [
    "typescript",
    "eslint",
  ],
});
