let Player = {
    player: null,

    init(domId, playerId, onReady) {
         window.onYouTubeIframeAPIReady = () => {
            this.onIframeReady(domId, playerId, onReady);
        }
        let youtubeScriptTag = document.createElement('script');
        youtubeScriptTag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(youtubeScriptTag)
    },
    onIframeReady(domId, playerId, onReady) {
        this.player = new YT.Player(domId, {
            height: '360',
            width: '420',
            videoId: playerId,
            events: {
                'onReady': (event => onReady(event)),
                'onStateChange': (event => this.onPlayerStateChange(event)),
            }
        });
    },
    onPlayerStateChange(event) {},
    getCurrentTime() { return Math.floor(this.player.getCurrentTime() * 1000); },
    seekTo(milisec) { this.player.seekTo(milisec / 1000); },
}

export default Player;