/**
 * karmacv-ws
 * Restful web service for resumes of resumerise app.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: eltonmarku@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
* The resume class
*/
export class Publication {
    'created'?: Date;
    'id'?: string;
    'name'?: string;
    'publisher'?: string;
    'releaseDate'?: Date;
    'summary'?: string;
    'updated'?: Date;
    'website'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "string"
        },
        {
            "name": "releaseDate",
            "baseName": "releaseDate",
            "type": "Date"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Publication.attributeTypeMap;
    }
}

