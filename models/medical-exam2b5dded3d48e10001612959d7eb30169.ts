/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MedicalExam2b5dded3d48e100016120452b8710164 } from './medical-exam2b5dded3d48e100016120452b8710164';

/**
 * Current Person
 * @export
 * @interface MedicalExam2b5dded3d48e10001612959d7eb30169
 */
export interface MedicalExam2b5dded3d48e10001612959d7eb30169 {
    /**
     * The date of the last medical exam for a person.
     * @type {string}
     * @memberof MedicalExam2b5dded3d48e10001612959d7eb30169
     */
    'lastExamDate'?: string;
    /**
     * Medical exam notes for a person.
     * @type {string}
     * @memberof MedicalExam2b5dded3d48e10001612959d7eb30169
     */
    'notes'?: string;
    /**
     * Medical exam expiration date for a person.
     * @type {string}
     * @memberof MedicalExam2b5dded3d48e10001612959d7eb30169
     */
    'expirationDate'?: string;
}

