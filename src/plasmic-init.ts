import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "n22P5UCTG6TSvQEwcAgng5",  // ID of a project you are using
      token: "XZqCbLORzGJDoFjuoiTUMipbUk87ttHFvzjz0pwImq59dcbQ3gzWxFYotkoDXpYMH8rxjCxE4EbCjaztLDA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})