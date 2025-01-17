/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Type33e26848dc00100037bb584480fe014a } from './type33e26848dc00100037bb584480fe014a';
import { UsageAb827579ee1710002266db48222201a4 } from './usage-ab827579ee1710002266db48222201a4';

/**
 * 
 * @export
 * @interface InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf
 */
export interface InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf {
    /**
     * The comment associated with the instant messenger account.
     * @type {string}
     * @memberof InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf
     */
    'comment'?: string;
    /**
     * 
     * @type {Type33e26848dc00100037bb584480fe014a}
     * @memberof InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf
     */
    'type'?: Type33e26848dc00100037bb584480fe014a;
    /**
     * The instant messenger account username.
     * @type {string}
     * @memberof InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf
     */
    'userName'?: string;
    /**
     * 
     * @type {UsageAb827579ee1710002266db48222201a4}
     * @memberof InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf
     */
    'usage'?: UsageAb827579ee1710002266db48222201a4;
    /**
     * Id of the instance
     * @type {string}
     * @memberof InstantMessengerAccount33e26848dc00100036f723337ebb0132AllOf
     */
    'id'?: string;
}

