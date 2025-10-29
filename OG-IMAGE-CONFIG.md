# Open Graph Image Configuration - What Changed

## Summary of Changes

I've optimized the Open Graph (OG) metadata configuration for better **WhatsApp compatibility** and **link preview reliability**.

## What Was Changed

### Before:
```typescript
images: [
  {
    url: '/opengraph-image',  // ❌ Relative URL
    secureUrl: 'https://lebonclick.fr/opengraph-image',
    // ...
  },
  {
    url: '/og-image.png',  // ❌ Relative URL + duplicate fallback
    secureUrl: 'https://lebonclick.fr/og-image.png',
    // ...
  },
]
```

### After:
```typescript
images: [
  {
    url: 'https://lebonclick.fr/opengraph-image',  // ✅ Absolute URL
    secureUrl: 'https://lebonclick.fr/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Lebonclick - Votre concierge numérique de confiance - Le Perreux-sur-Marne - 07 44 98 57 23',
    type: 'image/png',
  },
]
```

## Why These Changes Matter for WhatsApp

### 1. **Absolute URLs** ✅
- **WhatsApp's crawler** prefers absolute URLs
- Some social platforms don't properly resolve relative URLs
- Ensures consistency across all sharing platforms

### 2. **Single Primary Image** ✅
- Multiple images can confuse some crawlers
- WhatsApp typically uses the **first image** in the array
- Having one clear, high-quality image is better than multiple options

### 3. **Dynamic Image First** ✅
- `/opengraph-image` is dynamically generated with all your branding
- Always up-to-date with latest content
- The static `/og-image.png` is kept in `public/` as an emergency fallback but not in metadata

## What This Means for Link Sharing

When someone shares `https://lebonclick.fr` on WhatsApp, they'll see:

### Preview Card Shows:
- 🖼️ **Image**: Your beautiful gradient card with "Votre concierge numérique de confiance"
- 📱 **Title**: "Lebonclick - Votre concierge numérique de confiance"
- 📝 **Description**: "Service de proximité au Perreux-sur-Marne..."
- 📞 **Phone**: "07 44 98 57 23" (visible in the image)
- 🏠 **Location**: "Le Perreux-sur-Marne" (visible in the image)

### Small Icon Shows:
- The favicon/icon with "L" on teal background (#14b8a6)

## Testing Checklist

After deploying to production:

1. ✅ **Test with Facebook Debugger**
   - Go to: https://developers.facebook.com/tools/debug/
   - Enter: `https://lebonclick.fr`
   - Click "Scrape Again" to clear cache
   - Verify the OG image shows correctly

2. ✅ **Test with WhatsApp Link Preview Tool**
   - Go to: https://www.bannerbear.com/tools/whatsapp-link-preview-generator/
   - Enter: `https://lebonclick.fr`
   - Preview how it will look on mobile

3. ✅ **Test in Real WhatsApp**
   - Send the URL to yourself: `https://lebonclick.fr`
   - Wait 5-10 seconds for preview to load
   - Verify image, title, and description appear

4. ✅ **Test on Other Platforms**
   - Twitter/X (uses twitter:image metadata)
   - LinkedIn (uses og:image metadata)
   - Facebook (uses og:image metadata)
   - iMessage (uses og:image metadata)

## Files Modified

- ✅ `src/app/layout.tsx` - Updated OG and Twitter image URLs to absolute paths

## Files Already in Place (No Changes Needed)

- ✅ `src/app/opengraph-image.tsx` - Generates the 1200x630 image
- ✅ `src/app/twitter-image.tsx` - Generates Twitter card
- ✅ `src/app/icon.tsx` - Small 32x32 favicon
- ✅ `src/app/apple-icon.tsx` - Apple touch icon
- ✅ `src/app/favicon.ico` - Browser favicon
- ✅ `public/og-image.png` - Static fallback (kept for emergencies)

## Technical Details

### Why One Image Instead of Multiple?

When you have multiple OG images:
- **WhatsApp** uses the first one
- **Facebook** uses the first one
- **LinkedIn** uses the first one
- **Twitter** uses its own `twitter:image` (which we set separately)

Having multiple images only makes sense if:
- You want different images for different pages (we'll set this up per page later)
- You need different aspect ratios (but OG standard is 1200x630)

Since we have one primary image that works everywhere, we simplified to just that one.

### Why Absolute URLs?

According to Open Graph protocol best practices:
- `url` property should be **absolute** for reliable sharing
- While Next.js's `metadataBase` can resolve relative URLs, some crawlers don't respect this
- WhatsApp's crawler has been known to have issues with relative URLs in some cases
- Absolute URLs are **guaranteed to work** everywhere

## Next Steps

1. **Deploy to production** (Vercel/your hosting)
2. **Wait 5 minutes** for DNS/CDN to propagate
3. **Test with Facebook Debugger** to verify OG tags
4. **Test on WhatsApp** by sharing the link
5. **Clear cache** if you shared before (add `?v=1` to URL)

## Troubleshooting

### If preview doesn't show on WhatsApp:

1. **Check the URL is HTTPS** ✅ (lebonclick.fr should be)
2. **Use Facebook Debugger** to see what WhatsApp sees
3. **Add a version parameter**: `https://lebonclick.fr?v=2`
4. **Wait 30 seconds** after sending (first scrape takes time)
5. **Clear WhatsApp cache** (wait ~7 days or use query params)

### If wrong image shows:

1. Check Facebook Debugger shows correct image URL
2. Verify `/opengraph-image` route returns an image (test in browser)
3. Rebuild and redeploy
4. Clear cache with `?v=2` parameter

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [WhatsApp FAQ on Link Previews](https://faq.whatsapp.com/539178204760819)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

