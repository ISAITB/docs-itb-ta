The **createActor** operation is used to create a new actor. To use it make an HTTP ``PUT`` to path ``/api/rest/actor``
and include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**. This API key identifies the community
that is able to manage the actor's domain, either by being directly linked to it or being linked to no domain.

In the request's body you specify the information of the new actor, of which the ``identifier``, ``name`` and ``specification`` are mandatory as defined
in the payload's :ref:`schema <api__domain__createActor__request>`. The ``specification`` property identifies the specification
under which the actor is to be created, and needs to be set with the specification's API key.

The following example shows how you can create an actor with the provided data:

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "specification": "1A748C4DXBFD6X4FD3XA196X969D9B695244"
  }

Calling this operation, the Test Bed will create the actor and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "specification": "1A748C4DXBFD6X4FD3XA196X969D9B695244",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_ACTOR"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createActor__request:

createActor - request schema
++++++++++++++++++++++++++++

The payload of the **createActor** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-createActor_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/createActor_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createActor operation request payload",
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
               "description": "The API key to set for the actor. If this key is already assigned, a new one will be generated.",
               "type": "string"
           },
           "specification": {
               "description": "The API key of the specification within which to create the actor.",
               "type": "string"
           }
       },
       "required": [
           "identifier",
           "name",
           "specification"
       ],
       "additionalProperties": false
   }

.. _api__domain__createActor__response:

createActor - response schema
+++++++++++++++++++++++++++++

The payload of the **createActor** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-apiKey_response.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/apiKey_response",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema to signal an assigned API key response",
       "type": "object",
       "properties": {
           "apiKey": {
             "description": "The API key value.",
             "type": "string"
           }
         },
         "required": [
           "apiKey"
         ],
         "additionalProperties": false
     }
