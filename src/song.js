export class Song {
    static songStore = [];

    constructor(title, duration) {
        this._title = title;
        this._duration = duration;

        Song.songStore.push(this);
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get duration() {
        return this._duration;
    }

    set duration(dur) {
        this._duration = dur;
    }

    static storedSongCount() {
        return Song.songStore.length;
    }

    static songListing() {
        return Song.songStore
        .map((x, i) => x.toString(i + 1))
        .reduce((acc, x) => `${acc}\n${x}`);
    }

    toString(i) {
        return `${(typeof i == 'undefined' ? '' : `${i} > `)}${this.title} (${this.duration} másodperc)`;
    }
}