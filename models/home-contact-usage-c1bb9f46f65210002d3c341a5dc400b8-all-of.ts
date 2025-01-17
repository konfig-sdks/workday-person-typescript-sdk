/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsageBehavior33e26848dc0010003a3c3827858901b4 } from './usage-behavior33e26848dc0010003a3c3827858901b4';
import { UsageTypeC1bb9f46f65210002d3c343d773200bc } from './usage-type-c1bb9f46f65210002d3c343d773200bc';

/**
 * 
 * @export
 * @interface HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf
 */
export interface HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf {
    /**
     * Returns the description for a given communication method.
     * @type {string}
     * @memberof HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf
     */
    'comment'?: string;
    /**
     * Is Public Visibility
     * @type {boolean}
     * @memberof HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf
     */
    'public'?: boolean;
    /**
     * Is Primary
     * @type {boolean}
     * @memberof HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf
     */
    'primary'?: boolean;
    /**
     * Used For
     * @type {Array<UsageBehavior33e26848dc0010003a3c3827858901b4>}
     * @memberof HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf
     */
    'usedFor'?: Array<UsageBehavior33e26848dc0010003a3c3827858901b4>;
    /**
     * 
     * @type {UsageTypeC1bb9f46f65210002d3c343d773200bc}
     * @memberof HomeContactUsageC1bb9f46f65210002d3c341a5dc400b8AllOf
     */
    'usageType'?: UsageTypeC1bb9f46f65210002d3c343d773200bc;
}

