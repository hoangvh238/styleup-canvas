
const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const API_SERVER_SOCKET = process?.env?.NEXT_PUBLIC_SERVER_SOCKET_URL;
const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL;
const SITE_URL = '/';

const GOSHIP = {
  PASSWORD: process.env.NEXT_PUBLIC_GOSHIP_PASSWORD,
  CLIENT_ID: process.env.NEXT_PUBLIC_GOSHIP_CLIENT_ID,
  CLIENT_SECRET: process.env.NEXT_PUBLIC_GOSHIP_CLIENT_SECRET,
};

const USER_INFO = '_user_info';
const USER_ID = '_user_id';
const ACCESS_TOKEN = '_access_token';
const ACCESS_TOKEN_GOSHIP = '_access_token_goship';
const REFRESH_TOKEN = '_refresh_token';
const IS_AUTH = '_is_auth';

const MAX_SUB_ACCOUNT = 4;

const SUB_ACCOUNT_ID = '_sub_account_id';
const SUB_ACCOUNT_INFO = '_sub_account_info';

const SCRIPT_JITSI = 'https://meet.jit.si/external_api.js';

const ASSETS_URL_IMAGE = 'https://api.cloudinary.com/v1_1/dmeetnppd/image/upload';

const constants = {
  API_SERVER,
  USER_ID,
  ASSETS_URL,
  SITE_URL,
  ASSETS_URL_IMAGE,
  USER_INFO,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  IS_AUTH,
  MAX_SUB_ACCOUNT,
  SUB_ACCOUNT_ID,
  SUB_ACCOUNT_INFO,
  SCRIPT_JITSI,
  API_SERVER_SOCKET,
  GOSHIP,
  ACCESS_TOKEN_GOSHIP,
};

export default constants;
