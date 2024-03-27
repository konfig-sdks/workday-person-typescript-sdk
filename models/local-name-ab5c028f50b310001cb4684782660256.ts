/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocalNameAb5c028f50b310001cb4684782660256AllOf } from './local-name-ab5c028f50b310001cb4684782660256-all-of';

/**
 * 
 * @export
 * @interface LocalNameAb5c028f50b310001cb4684782660256
 */
export interface LocalNameAb5c028f50b310001cb4684782660256 {
    /**
     * The person\'s secondary family name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'secondaryLast'?: string;
    /**
     * The person\'s secondary last name in second local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'secondaryLast2'?: string;
    /**
     * The person\'s last name in second local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'last2'?: string;
    /**
     * The person\'s given name in second local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'first2'?: string;
    /**
     * The person\'s given name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'first'?: string;
    /**
     * The person\'s second middle name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'middle2'?: string;
    /**
     * The person\'s last name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'last'?: string;
    /**
     * The person\'s middle name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'middle'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof LocalNameAb5c028f50b310001cb4684782660256
     */
    'descriptor'?: string;
}

