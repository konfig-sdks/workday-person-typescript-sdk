/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { INSTANCEMODELREFERENCE } from './instancemodelreference';

/**
 * The address reference instance from the Alternate Work Location (Primary Work Address) that links to the Work Contact Change event.
 * @export
 * @interface AlternateWorkLocationD72a8353f91e1000169a83b894e7046e
 */
export interface AlternateWorkLocationD72a8353f91e1000169a83b894e7046e {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof AlternateWorkLocationD72a8353f91e1000169a83b894e7046e
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof AlternateWorkLocationD72a8353f91e1000169a83b894e7046e
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof AlternateWorkLocationD72a8353f91e1000169a83b894e7046e
     */
    'href'?: string;
}

