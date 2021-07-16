declare module 'flickr-sdk' {

    interface PublicPhotoFeed {
        title: string;
        link: string;
        description: string;
        modified: string;
        generator: string;
        items: FeedItem[];
    }

    interface FeedItem {
        title: string;
        link: string;
        media: FeedItemMedia;
        date_taken: string;
        description: string;
        published: string;
        author: string;
        author_id: string;
        tags: string;
    }

    interface FeedItemMedia {
        m: string;
    }


    class Feeds {
        constructor(args?: { format: 'json', lang: 'en-us' });

        favePhotos(args: any): Request;

        forum(args: any): Request;

        friendsPhotos(args: any): Request;

        groupDiscussions(args: any): Request;

        groupPool(args: any): Request;

        publicPhotos(args?: { id?: string; ids?: string; tags?: string; tagmode?: 'all' | 'any'; format?: 'json'; lang?: 'en-us'; }): Request;

        recentActivity(args: any): Request;

        recentComments(args: any): Request;

    }

    class OAuth {
        constructor(consumerKey: any, consumerSecret: any);

        authorizeUrl(requestToken: any, perms: any): any;

        parse(res: any, fn: any): void;

        plugin(oauthToken: any, oauthTokenSecret: any): any;

        request(oauthCallback: any): any;

        verify(oauthToken: any, oauthVerifier: any, tokenSecret: any): any;

        static createPlugin(consumerKey: any, consumerSecret: any, oauthToken: any, oauthTokenSecret: any): any;

    }

    class Replace {
        constructor(auth: any, photoID: any, file: any, args: any)
    };

    class Upload {
        constructor(auth: any, file: any, args: any)
    }
}

