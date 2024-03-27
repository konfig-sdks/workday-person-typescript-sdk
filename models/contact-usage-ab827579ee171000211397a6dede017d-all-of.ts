/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsageBehavior33e26848dc0010003a3c3827858901b4 } from './usage-behavior33e26848dc0010003a3c3827858901b4';
import { UsageType901718dd5e7910000cb06dace3950299 } from './usage-type901718dd5e7910000cb06dace3950299';

/**
 * 
 * @export
 * @interface ContactUsageAb827579ee171000211397a6dede017dAllOf
 */
export interface ContactUsageAb827579ee171000211397a6dede017dAllOf {
    /**
     * True if the communication method has any  primary usage type.
     * @type {boolean}
     * @memberof ContactUsageAb827579ee171000211397a6dede017dAllOf
     */
    'primary'?: boolean;
    /**
     * 
     * @type {UsageType901718dd5e7910000cb06dace3950299}
     * @memberof ContactUsageAb827579ee171000211397a6dede017dAllOf
     */
    'usageType'?: UsageType901718dd5e7910000cb06dace3950299;
    /**
     * Usage behaviors for the communication method, such as mailing, billing shipping etc.
     * @type {Array<UsageBehavior33e26848dc0010003a3c3827858901b4>}
     * @memberof ContactUsageAb827579ee171000211397a6dede017dAllOf
     */
    'usedFor'?: Array<UsageBehavior33e26848dc0010003a3c3827858901b4>;
    /**
     * True if the communication method is public. If no results are returned, the communication method is private.
     * @type {boolean}
     * @memberof ContactUsageAb827579ee171000211397a6dede017dAllOf
     */
    'public'?: boolean;
}
