import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

/**
 * Auto-discovering sitemap generator.
 * 
 * Scans the /app directory at build time and automatically includes
 * any route that has a page.tsx or page.js file.
 * 
 * To exclude a route: add it to EXCLUDED_PATTERNS below.
 * To set custom priority: add it to PRIORITY_OVERRIDES below.
 * 
 * No manual updates needed when adding new pages — just create
 * the page file and redeploy.
 */

const BASE_URL = 'https://www.pointoak.com'

// Routes matching these patterns will be excluded from the sitemap
const EXCLUDED_PATTERNS = [
  /^\/admin/,    // Admin dashboard
  /^\/api/,      // API routes
  /^\/_/,        // Next.js internal routes
]

// Custom priorities for specific routes (default is 0.7)
const PRIORITY_OVERRIDES: Record<string, number> = {
  '/': 1.0,
  '/our-services': 0.9,
  '/about': 0.8,
  '/contact': 0.7,
}

// Custom change frequencies (default is 'monthly')
const FREQUENCY_OVERRIDES: Record<string, MetadataRoute.Sitemap[0]['changeFrequency']> = {
  '/': 'monthly',
  '/contact': 'yearly',
}

function discoverRoutes(dir: string, basePath: string = ''): string[] {
  const routes: string[] = []
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    // Check if this directory has a page file (it's a route)
    const hasPage = entries.some(
      (e) => e.isFile() && (e.name === 'page.tsx' || e.name === 'page.js' || e.name === 'page.jsx')
    )
    
    if (hasPage) {
      const routePath = basePath || '/'
      const isExcluded = EXCLUDED_PATTERNS.some((pattern) => pattern.test(routePath))
      if (!isExcluded) {
        routes.push(routePath)
      }
    }
    
    // Recurse into subdirectories
    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        !entry.name.startsWith('_') &&
        !entry.name.startsWith('.') &&
        entry.name !== 'node_modules' &&
        entry.name !== 'api'
      ) {
        routes.push(...discoverRoutes(path.join(dir, entry.name), `${basePath}/${entry.name}`))
      }
    }
  } catch {
    // Directory doesn't exist or can't be read — skip
  }
  
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  const routes = discoverRoutes(appDir)
  
  return routes.map((route) => ({
    url: route === '/' ? BASE_URL : `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: FREQUENCY_OVERRIDES[route] || 'monthly',
    priority: PRIORITY_OVERRIDES[route] ?? 0.7,
  }))
}
