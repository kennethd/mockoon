export const IPCMainListenerChannels = [
  'APP_APPLY_UPDATE',
  'APP_UPDATE_MENU_STATE',
  'APP_LOGS',
  'APP_QUIT',
  'APP_HIDE_WINDOW',
  'APP_UPDATE_ENVIRONMENT',
  'APP_WRITE_CLIPBOARD',
  'APP_OPEN_FILE',
  'APP_SHOW_FILE',
  'APP_SHOW_FOLDER',
  'APP_ZOOM',
  'APP_AUTH',
  'APP_AUTH_STOP_SERVER'
];

export const IPCMainHandlerChannels = [
  'APP_GET_MIME_TYPE',
  'APP_GET_HASH',
  'APP_GET_FILENAME',
  'APP_BUILD_STORAGE_FILEPATH',
  'APP_GET_BASE_PATH',
  'APP_REPLACE_FILEPATH_EXTENSION',
  'APP_OPENAPI_CONVERT_FROM',
  'APP_OPENAPI_CONVERT_TO',
  'APP_SERVER_GET_PROCESSED_DATABUCKET_VALUE',
  'APP_READ_CLIPBOARD',
  'APP_READ_FILE',
  'APP_READ_ENVIRONMENT_DATA',
  'APP_READ_SETTINGS_DATA',
  'APP_SHOW_OPEN_DIALOG',
  'APP_SHOW_SAVE_DIALOG',
  'APP_START_SERVER',
  'APP_STOP_SERVER',
  'APP_WRITE_FILE',
  'APP_WRITE_ENVIRONMENT_DATA',
  'APP_WRITE_SETTINGS_DATA',
  'APP_GET_OS',
  'APP_UNWATCH_FILE',
  'APP_UNWATCH_ALL_FILE'
];

export const IPCRendererHandlerChannels = [
  'APP_MENU',
  'APP_SERVER_EVENT',
  'APP_UPDATE_AVAILABLE',
  'APP_AUTH_CALLBACK',
  'APP_CUSTOM_PROTOCOL',
  'APP_FILE_EXTERNAL_CHANGE'
];
