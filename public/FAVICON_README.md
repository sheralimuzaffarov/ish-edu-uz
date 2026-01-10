# Favicon Generation Instructions

The following PNG favicon files need to be generated from `/public/favicon.svg`:

- `favicon-16x16.png` (16x16 pixels)
- `favicon-32x32.png` (32x32 pixels)
- `apple-touch-icon.png` (180x180 pixels)
- `android-chrome-192x192.png` (192x192 pixels)
- `android-chrome-512x512.png` (512x512 pixels)

## Generation Methods

### Option 1: Online Tools
1. Use an online SVG to PNG converter (e.g., CloudConvert, Convertio)
2. Upload `favicon.svg` and convert to PNG at the required sizes
3. Save files to the `public/` directory

### Option 2: ImageMagick (Command Line)
```bash
# Install ImageMagick if not already installed
# Then run:
convert -background none -resize 16x16 public/favicon.svg public/favicon-16x16.png
convert -background none -resize 32x32 public/favicon.svg public/favicon-32x32.png
convert -background none -resize 180x180 public/favicon.svg public/apple-touch-icon.png
convert -background none -resize 192x192 public/favicon.svg public/android-chrome-192x192.png
convert -background none -resize 512x512 public/favicon.svg public/android-chrome-512x512.png
```

### Option 3: Design Software
- Use Figma, Adobe Illustrator, or similar tools
- Import `favicon.svg`
- Export at each required size as PNG

### Option 4: Favicon Generator Websites
- Use services like https://realfavicongenerator.net/
- Upload the SVG and download the generated favicon package

## Note
The SVG favicon (`favicon.svg`) will work for modern browsers, but PNG files are needed for:
- Older browser compatibility
- Apple touch icons
- Android Chrome icons
- Better performance on some devices
