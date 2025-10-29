# WhatsApp & Social Media Sharing Setup

## What We've Configured

To ensure your logo/favicon appears when sharing your URL on WhatsApp and other platforms, we've set up the following:

### 1. Icons & Favicons

- **favicon.ico** - Located in `src/app/favicon.ico` (automatically served by Next.js)
- **icon.tsx** - Generates a 32x32 dynamic icon with "L" logo
- **apple-icon.tsx** - Generates a 180x180 Apple touch icon

### 2. Social Media Images

- **opengraph-image.tsx** - Generates the Open Graph image (1200x630) for Facebook, LinkedIn, WhatsApp, etc.
- **twitter-image.tsx** - Generates the Twitter/X card image (1200x630)

### 3. Metadata Configuration

The `layout.tsx` includes comprehensive metadata for:
- Multiple icon formats (ICO, PNG, SVG)
- Open Graph tags (used by WhatsApp, Facebook, LinkedIn)
- Twitter/X Card tags
- Apple touch icons

## How WhatsApp Link Previews Work

When you share a link on WhatsApp:

1. **WhatsApp scrapes** the URL for Open Graph meta tags
2. It looks for:
   - `og:image` - The preview image
   - `og:title` - The title to display
   - `og:description` - The description text
   - `og:site_name` - The site name
   - Favicon/icons for the small icon

3. **Our setup provides**:
   - Primary OG image: `/opengraph-image` (dynamically generated)
   - Fallback OG image: `/og-image.png` (static file)
   - Favicon: Multiple formats for maximum compatibility

## Testing the Setup

### 1. Build and Deploy
```bash
npm run build
npm run start
# Or deploy to production
```

### 2. Test Open Graph Tags

Use these tools to verify your meta tags:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **WhatsApp Preview**: https://www.bannerbear.com/tools/whatsapp-link-preview-generator/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 3. Clear WhatsApp Cache

If you've shared the link before and it's not showing the new image:

1. WhatsApp caches link previews for ~7 days
2. To force a refresh, you can:
   - Wait for the cache to expire
   - Add a query parameter: `https://lebonclick.fr?v=1`
   - Use the WhatsApp Business API to clear the cache

### 4. Manual Testing in WhatsApp

1. Open WhatsApp on your phone
2. Send yourself the URL: `https://lebonclick.fr`
3. Wait a few seconds for the preview to load
4. You should see:
   - The OG image with "Votre concierge numérique de confiance"
   - Title: "Lebonclick - Votre concierge numérique de confiance"
   - Description about your service
   - Phone number: 07 44 98 57 23

## Files Created/Modified

### New Files
- `src/app/favicon.ico` - Favicon for browsers
- `src/app/twitter-image.tsx` - Twitter/X card image generator

### Modified Files
- `src/app/layout.tsx` - Enhanced metadata with comprehensive icon and OG tag configuration

### Existing Files (Already Configured)
- `src/app/icon.tsx` - Small icon (32x32)
- `src/app/apple-icon.tsx` - Apple touch icon (180x180)
- `src/app/opengraph-image.tsx` - Main OG image (1200x630)
- `public/favicon.png` - Static favicon
- `public/favicon.svg` - SVG favicon
- `public/apple-touch-icon.png` - Static Apple icon
- `public/og-image.png` - Static fallback OG image

## Icon Hierarchy

Next.js will serve icons in this order:

1. **Dynamic icons** (icon.tsx, apple-icon.tsx) - Generated on-demand
2. **Static files** (favicon.ico, favicon.png) - Fallbacks
3. **Multiple formats** - SVG for modern browsers, ICO/PNG for older ones

## Troubleshooting

### Preview not showing in WhatsApp?

1. **Check metadata**: Use Facebook Debugger to verify OG tags are present
2. **Clear cache**: Add `?v=2` to the URL to bypass cache
3. **Check HTTPS**: WhatsApp requires HTTPS for previews
4. **Image size**: OG image should be 1200x630 (which ours is)
5. **Wait**: First scrape can take 10-30 seconds

### Wrong image showing?

1. Clear the WhatsApp cache (see above)
2. Verify the `metadataBase` in layout.tsx is correct: `https://lebonclick.fr`
3. Check that `/opengraph-image` route is accessible in production

### No favicon in browser?

1. Clear browser cache (Cmd+Shift+R on Mac)
2. Check that favicon.ico exists in `src/app/`
3. Verify build output shows icon routes

## Next Steps

1. **Deploy to production** so the HTTPS URL is available
2. **Test with Facebook Debugger** first (easier to see errors)
3. **Test on WhatsApp** by sharing the URL
4. **Monitor** using the tools above after any metadata changes

## Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Open Graph Protocol](https://ogp.me/)
- [WhatsApp Link Preview](https://faq.whatsapp.com/539178204760819)

