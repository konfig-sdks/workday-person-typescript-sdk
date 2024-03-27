/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AlternateWorkLocationBdfa2c83ea5e10002b70a80a153e5d68 } from './alternate-work-location-bdfa2c83ea5e10002b70a80a153e5d68';
import { BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c } from './business-process-parameters-bdfa2c83ea5e10002b873037350f5d6c';
import { WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67AllOf } from './work-contact-change-event-view-bdfa2c83ea5e10002b70a7e9f69e5d67-all-of';

/**
 * 
 * @export
 * @interface WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67
 */
export interface WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67 {
    /**
     * 
     * @type {BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c}
     * @memberof WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67
     */
    'businessProcessParameters'?: BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c;
    /**
     * 
     * @type {AlternateWorkLocationBdfa2c83ea5e10002b70a80a153e5d68}
     * @memberof WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67
     */
    'alternateWorkLocation'?: AlternateWorkLocationBdfa2c83ea5e10002b70a80a153e5d68;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67
     */
    'descriptor'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67
     */
    'id'?: string;
}

