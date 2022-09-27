
import { Song } from './song.js';

document.addEventListener('DOMContentLoaded', () => {
    let titleEl = document.getElementById('s-title');
    let durationEl = document.getElementById('s-duration');
    let listingEl = document.getElementById('s-listing');
    let countEl = document.getElementById('s-count');

    document.getElementById('s-add').addEventListener('click', () => {
        let s = new Song(titleEl.value, durationEl.value);
        listingEl.innerText = Song.songListing();
        countEl.innerText = Song.storedSongCount();
    });
});