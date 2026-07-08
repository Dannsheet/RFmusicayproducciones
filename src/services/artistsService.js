import { supabase } from './supabaseClient';

export const artistsService = {
  async getAll() {
    const { data, error } = await supabase
      .from('artistas')
      .select(`
        *,
        generos (*)
      `)
      .order('nombre');

    if (error) throw error;
    
    console.log('Raw artists data:', data);
    
    // Get public URLs for images
    const artistsWithUrls = data.map(artist => {
      console.log('Processing artist:', artist.nombre, 'foto:', artist.foto);
      
      if (artist.foto) {
        // If it's already a full URL, use it as is
        if (artist.foto.startsWith('http://') || artist.foto.startsWith('https://')) {
          console.log('Already a full URL:', artist.foto);
          return artist;
        }
        // Otherwise, get public URL from Supabase storage
        const { data: publicUrlData } = supabase.storage
          .from('imagenes')
          .getPublicUrl(artist.foto);
        console.log('Generated public URL:', publicUrlData.publicUrl);
        return {
          ...artist,
          foto: publicUrlData.publicUrl
        };
      }
      console.log('No foto for artist:', artist.nombre);
      return artist;
    });
    
    console.log('Final artists with URLs:', artistsWithUrls);
    return artistsWithUrls;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('artistas')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async getWithProjects(artistId) {
    const { data, error } = await supabase
      .from('artistas')
      .select(`
        *,
        proyectos (*)
      `)
      .eq('id', artistId)
      .single();

    if (error) throw error;
    return data;
  }
};
