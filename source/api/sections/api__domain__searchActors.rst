The **searchActors** operation is used to search for actors under a given specification, possibly also filtering them by name.
To call the operation make an HTTP ``GET`` to path ``/api/rest/specification/{specification}/actors``
setting ``{specification}`` to the relevant specification's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to a **community API key**. This API key identifies the community that is able to manage the actors'
domain, either by being directly linked to it or being linked to no domain.

The operation returns an array of actor data, including for each actor its **identifier**, **name**, **description**,
**report metadata**, **default** and **hidden** status, **display order** and **API key**. The following is an example response received after
calling the operation:

.. code-block:: json

  [
    {
      "identifier": "supplier",
      "name": "Supplier",
      "description": "Actor supplying goods and creating purchase orders.",
      "default": false,
      "hidden": false,
      "displayOrder": 0,
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    },
    {
      "identifier": "consumer",
      "name": "Consumer",
      "description": "Actor consuming goods.",
      "default": false,
      "hidden": false,
      "displayOrder": 1,
      "apiKey": "491235ECX4F64X4EBDX9392X7726BA2D1297"
    }
  ]

The returned names and descriptions help to identify the actors, whereas the API keys are used in other domain
management operations.

When calling the operation using path ``/api/rest/specification/{specification}/actors`` it will return all the actors
under the given specification. These can be filtered by passing also a query parameter named ``name``, in which case the
actors returned will be those whose identifier or name match the provided value. Matching takes place in a case-insensitive
manner and using wildcard matching. As an example, calling ``/api/rest/specification/SPECIFICATION_API_KEY/actors?name=supplier`` would return
a matching actor as follows:

.. code-block:: json

  [
    {
      "identifier": "supplier",
      "name": "Supplier",
      "description": "Actor supplying goods and creating purchase orders.",
      "default": false,
      "hidden": false,
      "displayOrder": 0,
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    }
  ]

.. _api__domain__searchActors__response:

searchActors - response schema
++++++++++++++++++++++++++++++

The payload of the **searchActors** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-searchActors_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/searchActors_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the searchActors operation response payload",
     "type": "array",
     "items": {
       "$ref": "#/definitions/Actor"
     },
     "definitions": {
       "Actor": {
         "description": "An actor.",
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
     }
   }
