import { supabase } from './supabaseClient';

export const projectsService = {
  async getAll() {
    const { data, error } = await supabase
      .from('proyectos')
      .select(`
        *,
        artistas (*),
        generos (*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('proyectos')
      .select(`
        *,
        artistas (*),
        generos (*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async getByGenre(genreId) {
    const { data, error } = await supabase
      .from('proyectos')
      .select(`
        *,
        artistas (*),
        generos (*)
      `)
      .eq('genero_id', genreId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getByArtist(artistId) {
    const { data, error } = await supabase
      .from('proyectos')
      .select(`
        *,
        artistas (*),
        generos (*)
      `)
      .eq('artista_id', artistId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};
