import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { genresService } from '../../../services/genresService';
import { artistsService } from '../../../services/artistsService';
import './Productions.css';

const ArtistCard = ({ artist }) => {
  const artistImage = artist.foto || 'https://via.placeholder.com/400x400/1A1A1A/00D4FF?text=Artist';
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="artist-card"
    >
      <div className="artist-card-cover">
        <img 
          src={artistImage} 
          alt={artist.nombre}
          loading="lazy"
          className="artist-card-image"
        />
      </div>
      <div className="artist-card-info">
        <h3 className="artist-card-name">{artist.nombre}</h3>
        <div className="artist-card-meta">
          <span className="artist-card-genre">{artist.generos?.nombre || 'Unknown'}</span>
        </div>
      </div>
    </motion.div>
  );
};

const SkeletonCard = () => (
  <div className="artist-card skeleton">
    <div className="artist-card-cover skeleton-cover">
      <div className="skeleton-image" />
    </div>
    <div className="artist-card-info">
      <div className="skeleton-name" />
      <div className="skeleton-genre" />
    </div>
  </div>
);

const Productions = () => {
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [genresData, artistsData] = await Promise.all([
        genresService.getAll(),
        artistsService.getAll(),
      ]);
      
      setGenres(genresData);
      setArtists(artistsData);
      setFilteredArtists(artistsData);
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Failed to load artists');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (!selectedGenre) {
      setFilteredArtists(artists);
    } else {
      setFilteredArtists(artists.filter(a => a.genero_id === selectedGenre));
    }
  }, [selectedGenre, artists]);

  return (
    <section id="produccion" className="productions-section">
      <div className="productions-gradient" />
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="productions-header"
        >
          <h2 className="productions-title">Colaboraciones</h2>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="productions-filter-bar"
        >
          <button
            className={`filter-pill ${!selectedGenre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(null)}
          >
            Todos
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`filter-pill ${selectedGenre === genre.id ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre.id)}
            >
              {genre.nombre}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="productions-grid">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : error ? (
            <div className="productions-error">
              <p>{error}</p>
              <button onClick={loadData} className="retry-button">
                Reintentar
              </button>
            </div>
          ) : filteredArtists.length === 0 ? (
            <div className="productions-empty">
              <p>No hay artistas disponibles</p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredArtists.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  artist={artist}
                />
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default Productions;
