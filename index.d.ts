import * as React from "react";

type TwitterLoginButtonTheme = "dark_short" | "light_short" | "dark" | "light";

interface TwitterLoginProps {
  /**
   * Consumer API key
   */
  consumerKey: string;

  /**
   * Consumer API secret key
   */
  consumerSecret: string;

  /**
   * Callback function which takes two arguments (error, authData)
   */
  authCallback: (error?: any, result?: any) => void;

    /**
   * Callback function which generates the signature so secret can stay hidden
   */
  signatureGenerator: any;

  /**
   * The redirect URI of the application, this should be same as the value in the application registration portal.
   */
  callbackUrl: string;

  /**
   * Name of theme for button style.
   */
  buttonTheme?: TwitterLoginButtonTheme;

  /**
   * Additional class name string.
   */
  className?: string;
}


interface TwitterLoginState {
  isCompleted: boolean;
  popup?: Window;
}

declare class TwitterLogin extends React.Component<
  TwitterLoginProps,
  TwitterLoginState
> {}

export { TwitterLogin, TwitterLoginProps, TwitterLoginState, TwitterLoginButtonTheme };

export default TwitterLogin;

