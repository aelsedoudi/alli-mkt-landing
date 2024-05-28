export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.e8b41d.png","120x120":"/_nuxt/icons/icon_120.e8b41d.png","144x144":"/_nuxt/icons/icon_144.e8b41d.png","152x152":"/_nuxt/icons/icon_152.e8b41d.png","192x192":"/_nuxt/icons/icon_192.e8b41d.png","384x384":"/_nuxt/icons/icon_384.e8b41d.png","512x512":"/_nuxt/icons/icon_512.e8b41d.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
