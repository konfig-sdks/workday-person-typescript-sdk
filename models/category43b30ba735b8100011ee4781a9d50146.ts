/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { INSTANCEMODELREFERENCE } from './instancemodelreference';

/**
 * Returns the category of a Business Process Attachment.
 * @export
 * @interface Category43b30ba735b8100011ee4781a9d50146
 */
export interface Category43b30ba735b8100011ee4781a9d50146 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof Category43b30ba735b8100011ee4781a9d50146
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof Category43b30ba735b8100011ee4781a9d50146
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof Category43b30ba735b8100011ee4781a9d50146
     */
    'href'?: string;
}
