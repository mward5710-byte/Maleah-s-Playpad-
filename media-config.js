/**
 * @typedef {{title:string, src:string, note?:string}} PlaypadSong
 * @typedef {{title:string, url:string, note?:string}} PlaypadExternalLink
 * @type {{greetingAudio:string, songs:PlaypadSong[], externalLinks:PlaypadExternalLink[]}}
 */
window.PLAYPAD_MEDIA_CONFIG = {
  greetingAudio: '',
  songs: [
    {
      title: 'Twinkle Practice (Placeholder)',
      src: '',
      note: 'Add your own lawful recording path, e.g. assets/audio/songs/twinkle.mp3'
    },
    {
      title: 'Counting Song (Placeholder)',
      src: '',
      note: 'Add your own lawful recording path, e.g. assets/audio/songs/counting.mp3'
    }
  ],
  externalLinks: [
    {
      title: 'YouTube Kids Favorites',
      url: '',
      note: 'Paste your curated safe URL (opens externally)'
    },
    {
      title: 'Family Playlist',
      url: '',
      note: 'Paste your lawful playlist URL (opens externally)'
    }
  ]
};
