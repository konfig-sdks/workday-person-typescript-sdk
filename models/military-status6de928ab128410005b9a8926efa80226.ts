/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Country6de928ab128410005b9a894c5c67022a } from './country6de928ab128410005b9a894c5c67022a';
import { MilitaryStatus6de928ab128410005b9a8926efa80226AllOf } from './military-status6de928ab128410005b9a8926efa80226-all-of';

/**
 * 
 * @export
 * @interface MilitaryStatus6de928ab128410005b9a8926efa80226
 */
export interface MilitaryStatus6de928ab128410005b9a8926efa80226 {
    /**
     * The military status description.
     * @type {string}
     * @memberof MilitaryStatus6de928ab128410005b9a8926efa80226
     */
    'description'?: string;
    /**
     * 
     * @type {Country6de928ab128410005b9a894c5c67022a}
     * @memberof MilitaryStatus6de928ab128410005b9a8926efa80226
     */
    'country'?: Country6de928ab128410005b9a894c5c67022a;
    /**
     * The military status code.
     * @type {string}
     * @memberof MilitaryStatus6de928ab128410005b9a8926efa80226
     */
    'code'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof MilitaryStatus6de928ab128410005b9a8926efa80226
     */
    'descriptor'?: string;
}
