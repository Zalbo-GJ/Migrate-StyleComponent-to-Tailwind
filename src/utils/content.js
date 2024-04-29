import {
  Google,
  Apple,
  Logo,
  AndroidLogoWhite,
  IosLogoWhite,
} from "../assets/icons";
import { Avatar1, Avatar2, Avatar3, Avatar4 } from "../assets";

export const title = "PincoPanco";

export const footer = {
  innerLinks: [
    { text: "Privacy", href: "/privacy-policy" },
    { text: "Termini di servizio", href: "/terms-of-service" },
    { text: "Contattaci", href: "/contact-us" },
  ],
  outerImgLinks: [
    {
      text: "Download on google store",
      href: "https://play.google.com/store",
      icon: Google,
    },
    {
      text: "Download on app store",
      href: "https://www.apple.com/ios/app-store/",
      icon: Apple,
    },
  ],
  copyright: "© 2020 Name",
};

export const contactUs = {
  header: "Contattaci",
  information: [
    {
      header: "E-mail per pubbliche relazioni",
      content: "Pippo@pippo.it",
      type: "email",
    },
    { header: "E-mail di feedback", content: "pippo@pippo.it", type: "email" },
    {
      header: "Indirizzo aziendale",
      content:
        " 30 Pasir Panjang Road #15-31A, Mapletree Business City, 117440 - Singapore",
      type: "text",
    },
  ],
};

export const navbar = {
  links: [
    {
      text: "PincoPanco",
      href: "/",
      icon: { Logo },
      visibility: "all",
      type: "link",
    },
  ],
  loginButton: { text: "Login", href: "/login" },
  registerButton: { text: "Register", href: "/register" },
};

export const homepage = {
  headers: {
    first: {
      part1: "A fresh start",
      part2: "for social",
    },
  },
  subHeaders: {
    first: {
      part1: "Openland is a modern social network",
      part2: "built for people, not advertisers",
    },
  },

  secondContent: {
    header2: "Exceptional apps",
    subHeader2: "Beautiful, simple, and ultra-fast",
    icons1: [
      { label: "Messaging", icon: "message", iconProps: { opacity: "0.6" } },
      { label: "Video chat", icon: "video" },
      { label: "Communities", icon: "people", iconProps: { opacity: "0.6" } },
      { label: "Contacts", icon: "label" },
    ],
    icons2: [
      { label: "Discover", icon: "compass" },
      { label: "Payments", icon: "wallet" },
      { label: "Bots", icon: "robot" },
      { label: "Color themes", icon: "color" },
    ],
  },
  thirdContent: {
    header3: "Why join Openland?",

    subContents: [
      {
        header4: "Meaningful relationships",
        subHeader4:
          "Meet new people in communities Build friendships that last",
        icons: [
          { label: "Community for every interest", icon: "people" },
          { label: "World-class messenger and video chat", icon: "message" },
        ],
        inverse: false,
        messageCard: {
          color: "cyan",
          header: "People who loved The Last Jedi",
          messages: [
            {
              avatar: Avatar1,
              message: "I am not alone 🤩",
              position: "left",
            },
            {
              avatar: Avatar2,
              message: "Let's jump on a call!",
              position: "right",
            },
          ],
        },
      },
      {
        header4: "Positive culture",
        subHeader4:
          "Share your stories and emotions Be heard, accepted, and supported",
        icons: [
          { label: "Invite-only groups and communities", icon: "mail" },
          { label: "Moderator-led rules and norms", icon: "pen" },
        ],
        inverse: true,
        messageCard: {
          color: "purple",
          messages: [
            {
              avatar: Avatar3,
              message: "Got a new idea today ✨",
              position: "left",
            },
            {
              message: "Can't wait to hear more!",
              position: "right",
            },
            {
              avatar: Avatar4,
              message: "How can I help?",
              position: "right",
            },
          ],
        },
      },
    ],
  },
  outerImgLinks: [
    {
      text: "Download on app store",
      href: "https://www.apple.com/ios/app-store/",
      icon: IosLogoWhite,
    },
    {
      text: "Download on google store",
      href: "https://play.google.com/store",
      icon: AndroidLogoWhite,
    },
  ],
};
