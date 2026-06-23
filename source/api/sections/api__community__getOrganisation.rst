The **getOrganisation** operation is used to retrieve a specific organisation's information. To use it make an
HTTP ``GET`` to path ``/api/rest/organisation/{organisation}`` and include in your request an HTTP header named ``ITB-API-KEY`` set to your
**community API key**. The organisation in question is identified by setting the ``organisation`` path parameter with the
organisation's API key.

Calling this operation will return the specific organisation's data, including its **API key**, **short name** and **full name**.
The following example illustrates a sample response:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "shortName": "Organisation 1",
    "fullName": "Organisation 1"
  }

The name returned for the organisation help you in identifying it, whereas the API key serves as the key to use in
other organisation-specific API operations.

.. _api__community__getOrganisation__response:

getOrganisation - response schema
+++++++++++++++++++++++++++++++++

The payload of the **getOrganisation** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-getOrganisation_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/getOrganisation_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the getOrganisation operation response payload",
     "type": "object",
     "properties": {
       "apiKey": {
         "description": "The organisation's API key.",
         "type": "string"
       },
       "shortName": {
         "description": "The organisation's short name.",
         "type": "string"
       },
       "fullName": {
         "description": "The organisation's full name.",
         "type": "string"
       }
     },
     "required": [
       "apiKey",
       "shortName",
       "fullName"
     ],
     "additionalProperties": false
   }
