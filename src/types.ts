type User = {
  name: string;
  accountName: string;
  image: string;
};

type Body = {
  text: string;
  image?: string;
};

type Analytics = {
  path: string;
  count: number;
}[];

type CommonProps = {
  user: User;
  body: Body;
  analytics: Analytics;
};

type TweetProps = {
  type: "tweet";
};

type RetweetProps = {
  type: "retweet";
  retweetedUser: string;
};

type PromotionProps = {
  type: "promotion";
};

export type TwitterCardProps = CommonProps &
  (TweetProps | RetweetProps | PromotionProps);