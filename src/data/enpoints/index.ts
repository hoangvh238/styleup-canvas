
const prefixAuth: string = "/core";
const prefixBase: string = "/api/v1";
const prefixOther: string = "/api/core";

const prefixApiAuth: string = `/api/core`;

const prefixUser: string = "/api";
const endpointAuth = {
  SIGN_IN: `${prefixUser}/Identity/login`,
  VERIFY_TOKEN: `token/verify/`,
  SIGN_UP: `${prefixUser}/Identity/register`,
  EMAIL: `${prefixUser}/Identity/verify-mail`,
  LOGIN_GOOGLE: `${prefixUser}/Identity/login-google`,
};

const endpointUsersManagement = {
  GET_ALL_USERS: `${prefixBase}/user-managements/`,
};

const endpointEventsManagement = {
  GET_ALL_EVENTS: `${prefixBase}/event/`,
  ADMIN_GET_ALL_EVENTS: `${prefixBase}/event/admin`,
  MANAGER_GET_ALL_EVENTS: `${prefixBase}/event/`,
  GET_EVENT_DETAIL: `${prefixBase}/event/{id}`,
  CREATE_EVENT: `${prefixBase}/event/`,
  DELETE_EVENT: `${prefixBase}/event/{id}`,
  UPDATE_EVENT: `${prefixBase}/event/{id}`,
  REGISTER_EVENT: `${prefixBase}/event/{id}/register`,
  EVENT_REGISTRATIONS: `${prefixBase}/event/{id}/registrations`,
  TAKE_ATTENDANCE: `${prefixBase}/event/attendance`,
};

const endpointCart = {
  GET_CART: `${prefixUser}/Cart/`,
  GET_CURRENT_CART: `${prefixUser}/Cart/{id}`,
  ADD_NEW_CART: `${prefixUser}/Cart/{id}`,
  DELETE_CART: `${prefixUser}/Cart/delete/{id}`,
  ADD_CART: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/Cart/add-to-cart`,
};

const endpointProduct = {
  GET_ALL_PRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/TemplateCanvas/get-basic`,
  GET_PRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/TemplateCanvas/{id}`,
  GET_SUBPRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/CustomCanvas/{id}`,
  ADD_NEW_PRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/TemplateCanvas`,
  ADD_NEW_SUBPRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/CustomCanvas`,
  GET_ALL_SUBPRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/CustomCanvas/get-basic`,
  DELETE_PRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/CustomCanvas/delete/{id}`,
  DELETE_SUBPRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/TemplateCanvas/delete/{id}`,
  FILLTER_PRODUCT: `${ process.env.NEXT_PUBLIC_APP_URL}${prefixUser}/TemplateCanvas/get-all-fillter`,
};

const endpointProvider = {
  GET_COLORS: `${prefixUser}/Provider/color-support/{id}`,
  GET_SIZES: `${prefixUser}/Provider/size-support/{id}`,
};

const endpointOrder = {
  GET_ALL_ORDER: `${prefixUser}/Order/get-basic`,
  CHANGE_STATUS: `${prefixUser}/Order/change-status`,
  GET_DETAIL_ORDER: `${prefixUser}/Order/get-order-by-code`,
  GET_ORDER: `${prefixUser}/Order/{id}`,
  ADD_NEW_ORDER: `${prefixUser}/Transaction`,
};

const endpointScheduleManagement = {};

const endpointOther = {
  CALCULATE_SHIPPING: "https://sandbox.goship.io/api/v2/rates",
  LOGIN_GOSHIP: "https://sandbox.goship.io/api/v2/login",
  GET_PROVINCE: "https://sandbox.goship.io/api/v2/cities",
  GET_DISTRICT: "https://sandbox.goship.io/api/v2/cities/{id}/districts",
  GET_WARDS: "https://sandbox.goship.io/api/v2/districts/{id}/wards",
};

export {
  endpointAuth,
  endpointUsersManagement,
  endpointScheduleManagement,
  endpointEventsManagement,
  endpointCart,
  endpointProduct,
  endpointOrder,
  endpointOther,
  endpointProvider,
};
