import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.filterablelistpicker',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  useLegacyWorkflow: false,
  appPath: 'app',
} as NativeScriptConfig
