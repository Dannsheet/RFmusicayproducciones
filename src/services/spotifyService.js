export const spotifyService = {
  getEmbedUrl(spotifyUrl) {
    // Convert Spotify URL to embed URL
    if (!spotifyUrl) return null;
    
    // Extract the ID from various Spotify URL formats
    const patterns = [
      /open\.spotify\.com\/track\/([a-zA-Z0-9]+)/,
      /open\.spotify\.com\/album\/([a-zA-Z0-9]+)/,
      /open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/,
      /open\.spotify\.com\/artist\/([a-zA-Z0-9]+)/,
    ];

    for (const pattern of patterns) {
      const match = spotifyUrl.match(pattern);
      if (match) {
        const id = match[1];
        const type = pattern.source.match(/track|album|playlist|artist/)[0];
        return `https://open.spotify.com/embed/${type}/${id}`;
      }
    }

    return null;
  },

  getEmbedUrlFromId(id, type = 'track') {
    return `https://open.spotify.com/embed/${type}/${id}`;
  }
};
