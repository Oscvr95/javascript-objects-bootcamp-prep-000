var playlist = {KidCudi: 'Day N Night'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}
 function removeFromPlaylist(playlist, KidCudi) {
   delete playlist.KidCudi

   return playlist
 }
