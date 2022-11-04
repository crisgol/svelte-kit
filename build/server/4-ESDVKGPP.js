import {
  redirect
} from "./chunk-WQ5WAMOO.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/admin/user/_id_/_page.js
var page_exports = {};
__export(page_exports, {
  load: () => load
});
async function load({ parent }) {
  const session = await parent();
  if (!session.token || session.user && session.user.role !== "admin") {
    throw redirect(302, "/");
  }
}

// .svelte-kit/adapter-node/nodes/4.js
var index = 4;
var component = async () => (await import("./_page.svelte-B46DLARG.js")).default;
var file = "_app/immutable/components/pages/admin/user/_id_/_page.svelte-275d1b26.js";
var imports = ["_app/immutable/components/pages/admin/user/_id_/_page.svelte-275d1b26.js", "_app/immutable/chunks/index-5031b6ad.js", "_app/immutable/chunks/api-c0e3e547.js", "_app/immutable/chunks/variables-5c3e082a.js", "_app/immutable/chunks/index-9ff150c3.js", "_app/immutable/chunks/timeAgo-a92d5063.js", "_app/immutable/chunks/stores-bf527588.js", "_app/immutable/chunks/singletons-9fa75235.js", "_app/immutable/chunks/Tabs-ac3d5bd5.js", "_app/immutable/chunks/Loader-cf2f2cb3.js", "_app/immutable/modules/pages/admin/user/_id_/_page.js-60f743a5.js", "_app/immutable/chunks/index-d9e95725.js", "_app/immutable/chunks/_page-f74dcc83.js"];
var stylesheets = ["_app/immutable/assets/_page-0d880b0a.css", "_app/immutable/assets/api-5ca8a06d.css", "_app/immutable/assets/Tabs-4afc9f25.css", "_app/immutable/assets/Loader-930fdbc0.css"];
export {
  component,
  file,
  imports,
  index,
  page_exports as shared,
  stylesheets
};
//# sourceMappingURL=4-ESDVKGPP.js.map
