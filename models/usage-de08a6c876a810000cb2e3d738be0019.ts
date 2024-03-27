/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContactUsage1089da0ab90910000fa7748617db0898 } from './contact-usage1089da0ab90910000fa7748617db0898';
import { UsageBehavior1089da0ab90910000fa6c19789ce0896 } from './usage-behavior1089da0ab90910000fa6c19789ce0896';
import { UsageType51665e7371e310000f554a00d31000f2 } from './usage-type51665e7371e310000f554a00d31000f2';

/**
 * Instant Messenger for the Instant Messenger Reference
 * @export
 * @interface UsageDe08a6c876a810000cb2e3d738be0019
 */
export interface UsageDe08a6c876a810000cb2e3d738be0019 {
    /**
     * Usage behaviors for the communication method, such as mailing, billing shipping etc.
     * @type {Array<UsageBehavior1089da0ab90910000fa6c19789ce0896>}
     * @memberof UsageDe08a6c876a810000cb2e3d738be0019
     */
    'usedFor'?: Array<UsageBehavior1089da0ab90910000fa6c19789ce0896>;
    /**
     * The description for a given communication method.
     * @type {string}
     * @memberof UsageDe08a6c876a810000cb2e3d738be0019
     */
    'comment'?: string;
    /**
     * True if the communication method has any  primary usage type.
     * @type {boolean}
     * @memberof UsageDe08a6c876a810000cb2e3d738be0019
     */
    'primary'?: boolean;
    /**
     * True if the communication method is public. If no results are returned, the communication method is private.
     * @type {boolean}
     * @memberof UsageDe08a6c876a810000cb2e3d738be0019
     */
    'public'?: boolean;
    /**
     * 
     * @type {UsageType51665e7371e310000f554a00d31000f2}
     * @memberof UsageDe08a6c876a810000cb2e3d738be0019
     */
    'usageType'?: UsageType51665e7371e310000f554a00d31000f2;
}

