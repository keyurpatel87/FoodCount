/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"phtGPpvGA9VkoRyyNjsxoR9sTkYB4fxF"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"9RHbXhQdG8YH9LCPe04CP21XiCvdyUHU"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"hnxOMpXsBdo3Spi49nG9RLouGjOvlDrp"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"D7OJWYIeZj3FZac9Cm5kiErSV0U5jsSz"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"7TAVze6nNttczGGxyyqwDY8lMkLuL93i"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"4ohk4BlzHmflI2oJEbCNMT0CamUJnx9t"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
