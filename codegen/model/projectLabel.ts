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



export class ProjectLabel {
    'categoryTitle'?: string;
    'client'?: string;
    'endDate'?: string;
    'highlights'?: string;
    'id'?: string;
    'products'?: string;
    'roles'?: string;
    'startDate'?: string;
    'summary'?: string;
    'title'?: string;
    'website'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryTitle",
            "baseName": "categoryTitle",
            "type": "string"
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "highlights",
            "baseName": "highlights",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProjectLabel.attributeTypeMap;
    }
}

