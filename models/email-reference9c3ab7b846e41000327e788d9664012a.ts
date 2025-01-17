/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmailReference9c3ab7b846e41000327e788d9664012aAllOf } from './email-reference9c3ab7b846e41000327e788d9664012a-all-of';
import { Usage9c3ab7b846e4100032b68c2b58c80134 } from './usage9c3ab7b846e4100032b68c2b58c80134';

/**
 * 
 * @export
 * @interface EmailReference9c3ab7b846e41000327e788d9664012a
 */
export interface EmailReference9c3ab7b846e41000327e788d9664012a {
    /**
     * 
     * @type {Usage9c3ab7b846e4100032b68c2b58c80134}
     * @memberof EmailReference9c3ab7b846e41000327e788d9664012a
     */
    'usage'?: Usage9c3ab7b846e4100032b68c2b58c80134;
    /**
     * The email address.
     * @type {string}
     * @memberof EmailReference9c3ab7b846e41000327e788d9664012a
     */
    'emailAddress'?: string;
    /**
     * Comment associated with the email.
     * @type {string}
     * @memberof EmailReference9c3ab7b846e41000327e788d9664012a
     */
    'emailComment'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof EmailReference9c3ab7b846e41000327e788d9664012a
     */
    'id'?: string;
}

