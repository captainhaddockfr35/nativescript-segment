import { Common } from './segment.common';

export class Segment extends Common {
    static apiKey: string = "";


    public static init(key: string): void {
        Segment.apiKey = key;
        console.log("INIT");
        let configuration: SEGAnalyticsConfiguration = SEGAnalyticsConfiguration.configurationWithWriteKey(key);
        SEGAnalytics.debug(true);
        SEGAnalytics.setupWithConfiguration(configuration);
      }

    public static track(): void {
        SEGAnalytics.sharedAnalytics().track("Application Started");
        SEGAnalytics.sharedAnalytics().trackPropertiesOptions("Event Test", Segment.dictionaryOfData({version: "0.0.1", message: "Test"}), null);

        console.log("ON TRACK");
    }

    private static dictionaryOfData(data?: any): NSDictionary<any, any> {
        if (data) {
          let dict = NSMutableDictionary.dictionary();
          for (let key in data) {
            dict.setObjectForKey(data[key], key);
          }
          return dict;
        }
        return null;
      }
}
