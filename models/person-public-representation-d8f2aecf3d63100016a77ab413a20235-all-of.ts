/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressReference9c3ab7b846e4100009e5ec55fa530024 } from './address-reference9c3ab7b846e4100009e5ec55fa530024';
import { EmailReference9c3ab7b846e41000327e788d9664012a } from './email-reference9c3ab7b846e41000327e788d9664012a';
import { InstantMessengerAccount33e26848dc00100036f723337ebb0132 } from './instant-messenger-account33e26848dc00100036f723337ebb0132';
import { PhoneReferenceDf014bc8b5fa10000af0fe7cb0ab00dd } from './phone-reference-df014bc8b5fa10000af0fe7cb0ab00dd';
import { WebAddress33e26848dc0010003893a0202ced0165 } from './web-address33e26848dc0010003893a0202ced0165';

/**
 * 
 * @export
 * @interface PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf
 */
export interface PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf {
    /**
     * The public instant messenger account references for the person.
     * @type {Array<InstantMessengerAccount33e26848dc00100036f723337ebb0132>}
     * @memberof PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf
     */
    'instantMessengers'?: Array<InstantMessengerAccount33e26848dc00100036f723337ebb0132>;
    /**
     * The public phone number references for the person.
     * @type {Array<PhoneReferenceDf014bc8b5fa10000af0fe7cb0ab00dd>}
     * @memberof PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf
     */
    'phoneNumbers'?: Array<PhoneReferenceDf014bc8b5fa10000af0fe7cb0ab00dd>;
    /**
     * The public address references for the person.
     * @type {Array<AddressReference9c3ab7b846e4100009e5ec55fa530024>}
     * @memberof PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf
     */
    'addresses'?: Array<AddressReference9c3ab7b846e4100009e5ec55fa530024>;
    /**
     * The public web address references for the person.
     * @type {Array<WebAddress33e26848dc0010003893a0202ced0165>}
     * @memberof PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf
     */
    'webAddresses'?: Array<WebAddress33e26848dc0010003893a0202ced0165>;
    /**
     * The public email references for the person.
     * @type {Array<EmailReference9c3ab7b846e41000327e788d9664012a>}
     * @memberof PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235AllOf
     */
    'emails'?: Array<EmailReference9c3ab7b846e41000327e788d9664012a>;
}
