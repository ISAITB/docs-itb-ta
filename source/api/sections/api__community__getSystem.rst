The **getSystem** operation is used to retrieve a specific system's information. To use it make an
HTTP ``GET`` to path ``/api/rest/system/{system}`` and include in your request an HTTP header named ``ITB-API-KEY`` set to your
**community API key**. The system in question is identified by setting the ``system`` path parameter with the
system's API key.

Calling this operation will return the specific system's data, including its **API key**, **short name**, **full name**,
**description** and **version**. The following example illustrates a sample response:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "shortName": "System 1",
    "fullName": "System 1",
    "description": "Description for system 1",
    "version": "1.0"
  }

The name returned for the system helps you in identifying it, whereas the API key serves as the key to use in
other system-specific API operations, or operations linked to conformance statements.

.. _api__community__getSystem__response:

getSystem - response schema
+++++++++++++++++++++++++++

The payload of the **getSystem** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-getSystem_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/getSystem_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the getSystem operation response payload",
     "type": "object",
     "properties": {
       "apiKey": {
         "description": "The system's API key.",
         "type": "string"
       },
       "shortName": {
         "description": "The system's short name.",
         "type": "string"
       },
       "fullName": {
         "description": "The system's full name.",
         "type": "string"
       },
       "description": {
         "description": "The system's description.",
         "type": "string"
       },
       "version": {
         "description": "The system's version information.",
         "type": "string"
       }
     },
     "required": [
       "apiKey",
       "shortName",
       "fullName",
       "description",
       "version"
     ],
     "additionalProperties": false
   }
