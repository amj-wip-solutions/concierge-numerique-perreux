// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lebonclick.fr'

    // Define your critical service/location routes here
    const routes = [
        '/depannage-nogent-sur-marne', // Future specific page
        '/depannage-bry-sur-marne',    // Future specific page
        '/formation-ia-seniors',       // Future specific page
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}