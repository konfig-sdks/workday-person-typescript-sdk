/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocalNameAb5c028f50b310001cb4684782660256 } from './local-name-ab5c028f50b310001cb4684782660256';

/**
 * Returns the local person name from the name.
 * @export
 * @interface LocalPersonNameE08d883b5eae10000403d7cd713c02ec
 */
export interface LocalPersonNameE08d883b5eae10000403d7cd713c02ec {
    /**
     * The person\'s secondary family name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'secondaryLast'?: string;
    /**
     * The person\'s secondary last name in second local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'secondaryLast2'?: string;
    /**
     * The person\'s last name in second local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'last2'?: string;
    /**
     * The person\'s given name in second local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'first2'?: string;
    /**
     * The person\'s given name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'first'?: string;
    /**
     * The person\'s second middle name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'middle2'?: string;
    /**
     * The person\'s last name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'last'?: string;
    /**
     * The person\'s middle name in local script.  Workday only tracks local names for countries where a non-Latin script is commonly used.
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'middle'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof LocalPersonNameE08d883b5eae10000403d7cd713c02ec
     */
    'descriptor'?: string;
}

