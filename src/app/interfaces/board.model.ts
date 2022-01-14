export interface Board {
    name: string;
    desc: string;
    descData: DescData;
    closed: boolean;
    dateClosed: null;
    idOrganization: string;
    idEnterprise: null;
    limits: null;
    pinned: null;
    shortLink: string;
    powerUps: any[];
    dateLastActivity: Date;
    idTags: any[];
    datePluginDisable: null;
    creationMethod: null | string;
    ixUpdate: null;
    enterpriseOwned: boolean;
    idBoardSource: null;
    idMemberCreator: string;
    id: string;
    starred: null;
    url: string;
    prefs: Prefs;
    subscribed: boolean;
    labelNames: LabelNames;
    shortUrl: string;
    templateGallery: null;
    premiumFeatures: string[];
    memberships: Membership[];
}

export interface DescData {
    emoji: Emoji;
}

export interface Emoji {
}

export interface LabelNames {
    green: string;
    yellow: string;
    orange: string;
    red: string;
    purple: string;
    blue: string;
    sky: string;
    lime: string;
    pink: string;
    black: string;
}

export interface Membership {
    id: string;
    idMember: string;
    memberType: string;
    unconfirmed: boolean;
}

export interface Prefs {
    permissionLevel: string;
    hideVotes: boolean;
    voting: string;
    comments: string;
    invitations: string;
    selfJoin: boolean;
    cardCovers: boolean;
    isTemplate: boolean;
    cardAging: string;
    calendarFeedEnabled: boolean;
    isPluginHeaderShortcutsEnabled: boolean;
    enabledPluginBoardButtons: any[];
    background: string;
    backgroundImage: null;
    backgroundImageScaled: null;
    backgroundTile: boolean;
    backgroundBrightness: string;
    backgroundColor: string;
    backgroundBottomColor: string;
    backgroundTopColor: string;
    canBePublic: boolean;
    canBeEnterprise: boolean;
    canBeOrg: boolean;
    canBePrivate: boolean;
    canInvite: boolean;
}
