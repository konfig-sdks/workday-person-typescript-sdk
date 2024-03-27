/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsageAb827579ee171000225b0b528418019f } from './usage-ab827579ee171000225b0b528418019f';
import { WebAddress33e26848dc0010003893a0202ced0165AllOf } from './web-address33e26848dc0010003893a0202ced0165-all-of';

/**
 * 
 * @export
 * @interface WebAddress33e26848dc0010003893a0202ced0165
 */
export interface WebAddress33e26848dc0010003893a0202ced0165 {
    /**
     * The comment associated with the web address.
     * @type {string}
     * @memberof WebAddress33e26848dc0010003893a0202ced0165
     */
    'comment'?: string;
    /**
     * The complete URL address for the web address.
     * @type {string}
     * @memberof WebAddress33e26848dc0010003893a0202ced0165
     */
    'url'?: string;
    /**
     * 
     * @type {UsageAb827579ee171000225b0b528418019f}
     * @memberof WebAddress33e26848dc0010003893a0202ced0165
     */
    'usage'?: UsageAb827579ee171000225b0b528418019f;
    /**
     * Id of the instance
     * @type {string}
     * @memberof WebAddress33e26848dc0010003893a0202ced0165
     */
    'id'?: string;
}
