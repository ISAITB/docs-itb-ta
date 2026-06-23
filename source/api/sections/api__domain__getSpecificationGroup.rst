The **getSpecificationGroup** operation is used to retrieve a given specification group. To call it make an HTTP ``GET``
to path ``/api/rest/group/{group}`` and including an HTTP header named ``ITB-API-KEY`` set with a **community API key**.
This API key identifies the community that is able to manage the specification group, either by being directly linked to
its domain or being linked to no domain. The group in question is identified by passing its API key as the value of the
``group`` path variable.

This operation returns the information for the group, specifically its **short name**, **full name**, **description**,
**report metadata**, **display order** and **API key**. The following is an example response received after calling the operation:

.. code-block:: json

  {
    "shortName": "Data package",
    "fullName": "Data package specification",
    "description": "This is a set of requirements for data packages.",
    "displayOrder": 0,
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

The returned name and description help to identify the group in question, whereas the API key is used in other domain
management operations.

.. _api__domain__getSpecificationGroup__response:

getSpecificationGroup - response schema
+++++++++++++++++++++++++++++++++++++++

The payload of the **getSpecificationGroup** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-getSpecificationGroup_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/getSpecificationGroup_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the getSpecificationGroup operation response payload",
     "type": "object",
     "properties": {
       "shortName": {
         "description": "The group's short name.",
         "type": "string"
       },
       "fullName": {
         "description": "The group's full name.",
         "type": "string"
       },
       "description": {
         "description": "The group's description.",
         "type": "string"
       },
       "reportMetadata": {
         "description": "The group's additional metadata for XML reports.",
         "type": "string"
       },
       "displayOrder": {
         "description": "The group's display order relative to other groups and specifications.",
         "type": "number"
       },
       "apiKey": {
         "description": "The group's API key.",
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
