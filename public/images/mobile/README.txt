Drop your dedicated MOBILE hero banners in this folder, named to match
the mobileImage paths in lib/data.ts, e.g.:

  hero-1-mobile.png   (1080x1600 or 1080x1920)
  hero-2-mobile.png
  hero-6-mobile.png
  hero-5-mobile.png
  hero-7-mobile.png

Each image should be a self-contained vertical banner design that already
includes: product photo, heading, short description, CTA button, and any
feature badges baked into the artwork - the same way the existing desktop
hero-*.jpg files already contain the full desktop banner.

Until you add a file here, lib/data.ts falls back to the desktop image for
mobileImage so the site never shows a broken image - just update the path
once your mobile artwork is ready.
