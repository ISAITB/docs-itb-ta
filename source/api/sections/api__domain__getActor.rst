The **getActor** operation is used to retrieve a specific actor. To call it make an HTTP ``GET``
to path ``/api/rest/actor/{actor}`` and including an HTTP header named ``ITB-API-KEY`` set with a **community API key**.
This API key identifies the community that is able to manage the actor, either by being directly linked to
its domain or being linked to no domain. The actor in question is identified by passing its API key as the value of the
``actor`` path variable.

This operation returns the information for the actor, specifically its **identifier**, **name**, **description**,
**report metadata**, **default** and **hidden** status, **display order** and **API key**. The following is an example response received after
calling the operation:

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "description": "Actor supplying goods and creating purchase orders.",
    "default": false,
    "hidden": false,
    "displayOrder": 0,
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

The returned name and description help to identify the actor in question, whereas the API key is used in other domain
management operations.

.. _api__domain__getActor__response:

getActor - response schema
++++++++++++++++++++++++++

The payload of the **getActor** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-getActor_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/getActor_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the getActor operation response payload",
     "type": "object",
     "properties": {
       "identifier": {
         "description": "The actor's unique identifier in the specification, used to refer to it from test cases.",
         "type": "string"
       },
       "name": {
         "description": "The actor's display name.",
         "type": "string"
       },
       "description": {
         "description": "The actor's description.",
         "type": "string"
       },
       "reportMetadata": {
         "description": "The actor's additional metadata for XML reports.",
         "type": "string"
       },
       "default": {
         "description": "Whether the actor should be considered as the default choice for new conformance statements within its specification.",
         "type": "boolean",
         "default": false
       },
       "hidden": {
         "description": "Whether the actor should be hidden.",
         "type": "boolean",
         "default": false
       },
       "displayOrder": {
         "description": "The actor's display order relative to other actors when presented in test execution diagrams.",
         "type": "number"
       },
       "apiKey": {
         "description": "The actor's API key.",
         "type": "string"
       }
     },
     "required": [
       "identifier",
       "name",
       "apiKey"
     ],
     "additionalProperties": false
   }
