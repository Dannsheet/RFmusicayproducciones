import { supabase } from './supabaseClient';

export const genresService = {
  async getAll() {
    const { data, error } = await supabase
      .from('generos')
      .select('*')
      .order('nombre');

    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('generos')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }
};
