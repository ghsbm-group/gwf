
export const OAUTH2_REDIRECT_URI = process.env.NEXT_PUBLIC_REACT_API_BASE_URL + '/oauth2/redirect'

export const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_REACT_API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = process.env.NEXT_PUBLIC_REACT_API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;