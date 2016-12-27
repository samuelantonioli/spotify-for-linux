
function FindProxyForURL(url, host) {
    /**
     * block unwanted stuff
     * side effect: no ads between tracks
     *
     * -- please be aware of possible violations
     *    of Spotify's ToS
     *
     * unfortunately nwjs currently doesn't support
     * any other method to block stuff,
     * the chrome webRequest and tabs api's
     * aren't ready yet.
     *
     * so we just block stuff using a pac proxy file
     **/
    if (
        dnsDomainIs(host, 'bs.serving-sys.com') ||
        dnsDomainIs(host, '.2mdn.net') ||
        dnsDomainIs(host, '.research.de.com') ||
        dnsDomainIs(host, 'g.doubleclick.net') ||
        dnsDomainIs(host, 'adsafeprotected.com') ||
        dnsDomainIs(host, 'sociomantic.com') ||
        dnsDomainIs(host, '.facebook.com') ||
        dnsDomainIs(host, 'tpc.googlesyndication.com') ||
        // ...
        shExpMatch(url, 'https://d3jfuiz4ixupna.cloudfront.net/mp3-ad/*')
    ) {
        return 'PROXY 127.0.0.1:65432';
    }
    return 'DIRECT';
}

