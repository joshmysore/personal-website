# Website Usage Guide

## Overview
Your personal website has been completely redesigned with a modern, icon-based navigation system and password-protected dev mode for easy content management.

## Main Features

### 1. **Home Page**
- Clean, single-page design with no scrolling
- Typing animation that cycles through all your categories
- 8 custom icon buttons for navigation:
  - **Coding** - Your development projects
  - **Poetry** - Your poems and verses
  - **Short Stories** - Your narrative works
  - **Philosophy** - Your philosophical writings
  - **Photography** - Photo albums (life experiences + headshots)
  - **Modeling** - Your modeling portfolio
  - **Music** - Your music tracks (SoundCloud integration ready)
  - **Blog** - Your blog posts and updates

### 2. **Dev Mode** (Password Protected)
- **Password**: `Phantom14`
- **Access**: Click the tiny dot at the bottom of the home page, or go to `/dev`
- **Security**: Password is obfuscated in the code using base64 encoding
- **Session-based**: Authentication lasts for your browser session

### 3. **Photography Albums**
The photography page supports multiple albums:
- **Headshots Album** - Professional headshot portfolio
- **Life Experience Albums** - Create albums for different years/events (e.g., "Life 2024", "Summer Adventures")
- Click an album to view all photos
- Click a photo to open lightbox with navigation

## How to Add Content (via Dev Mode)

### Adding Photos to Albums

1. Go to `/dev` and enter password `Phantom14`
2. Navigate to the Photography section in dev mode
3. Create a new album or add to existing ones
4. Upload photos with captions and dates

**Album Structure:**
```typescript
{
  id: 'unique-id',
  title: 'Album Title',
  description: 'Album description',
  coverImage: '/photos/album-name/cover.jpg',
  photos: [
    { 
      id: '1', 
      url: '/photos/album-name/1.jpg', 
      caption: 'Photo caption',
      date: '2024-01-15' 
    }
  ]
}
```

### Adding Other Content

Through dev mode, you can add:
- **Coding Projects** - GitHub repos with stars, forks, languages, tags
- **Poetry** - Poems with titles and dates
- **Short Stories** - Stories with read time and excerpts
- **Philosophy** - Essays and reflections
- **Modeling** - Portfolio images with descriptions
- **Music** - Tracks with SoundCloud embeds
- **Blog Posts** - Blog entries with tags and read time

## Design Philosophy

### Spacing & Layout
- Consistent padding and margins throughout
- Generous whitespace for readability
- Cards with hover effects for interactivity
- Responsive grid layouts

### Color Scheme
- Each category has its own accent color
- Clean gray backgrounds
- White cards with shadows
- Smooth transitions and animations

### Typography
- Large, bold headings
- Readable body text
- Consistent font sizing

## Development

### Running Locally
```bash
npm run dev
```
Visit `http://localhost:3000`

### Building for Production
```bash
npm run build
```

### Deploying
Push to GitHub - automatic deployment via GitHub Actions to `joshmysore.me`

## Security Notes

- Dev mode password is stored using base64 encoding (not plain text)
- Authentication is session-based (cleared on browser close)
- Only you can access dev mode to make changes
- All content changes are saved to the database/files

## Future Enhancements

Consider adding:
- Backend API for content management
- Database integration (Supabase, Firebase)
- Image optimization and CDN
- Search functionality
- Comments system
- Analytics integration

## Support

For any issues or questions, check the code comments or reach out to your developer.

---

**Password Reminder**: `Phantom14` (hidden in `/src/lib/auth.ts`)
