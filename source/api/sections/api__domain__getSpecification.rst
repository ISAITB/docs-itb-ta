The **getSpecification** operation is used to retrieve a given specification. To call it make an HTTP ``GET``
to path ``/api/rest/specification/{specification}`` and including an HTTP header named ``ITB-API-KEY`` set with a **community API key**.
This API key identifies the community that is able to manage the specification, either by being directly linked to
its domain or being linked to no domain. The specification in question is identified by passing its API key as the value of the
``specification`` path variable.

This operation returns the information for the specification, specifically its **short name**, **full name**, **description**,
**report metadata**, **hidden** status, **display order** and **API key**. The following is an example response received after
calling the operation:

.. code-block:: json

  {
    "shortName": "Create order",
    "fullName": "Create order specification",
    "description": "Requirements for creating purchase orders.",
    "hidden": false,
    "displayOrder": 0,
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

The returned name and description help to identify the specification in question, whereas the API key is used in other domain
management operations.

.. _api__domain__getSpecification__response:

getSpecification - response schema
++++++++++++++++++++++++++++++++++

The payload of the **getSpecification** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-getSpecification_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/getSpecification_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the getSpecification operation response payload",
     "type": "object",
     "properties": {
       "shortName": {
         "description": "The specification's short name.",
         "type": "string"
       },
       "fullName": {
         "description": "The specification's full name.",
         "type": "string"
       },
       "description": {
         "description": "The specification's description.",
         "type": "string"
       },
       "reportMetadata": {
         "description": "The specification's additional metadata for XML reports.",
         "type": "string"
       },
       "hidden": {
         "description": "Whether the specification should be hidden.",
         "type": "boolean",
         "default": false
       },
       "displayOrder": {
         "description": "The specification's display order relative to other groups and specifications.",
         "type": "number"
       },
       "apiKey": {
         "description": "The specification's API key.",
         "type": "string"
       }
     },
     "required": [
       "shortName",
       "fullName",
       "apiKey"
     ],
     "additionalProperties": false
   }
