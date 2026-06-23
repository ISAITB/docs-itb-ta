The **updateActor** operation is used to update an existing actor. To use it make an HTTP ``POST`` to path ``/api/rest/actor/{actor}``,
setting ``{actor}`` to the target actor's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY``
set to a **community API key**. This API key identifies the community that is able to manage the actor's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the actor's ``name``, leaving other information unchanged:

.. code-block:: json

  {
    "name": "Order supplier"
  }

In case you want to altogether remove a property, such as the the actor's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateActor__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateActor__request:

updateActor - request schema
++++++++++++++++++++++++++++

The payload of the **updateActor** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-updateActor_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/updateActor_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the updateActor operation request payload",
       "type": "object",
       "properties": {
           "identifier": {
               "description": "The actor's unique identifier in the specification, used to refer to it from test cases. Skip this if no update should be made.",
               "type": "string"
           },
           "name": {
               "description": "The actor's display name. Skip this if no update should be made.",
               "type": "string"
           },
           "description": {
               "description": "The actor's description. Skip this if no update should be made or provide as an empty string to remove the current value.",
               "type": "string"
           },
           "reportMetadata": {
               "description": "The actor's additional metadata for XML reports.",
               "type": "string"
           },
           "default": {
               "description": "Whether the actor should be considered as the default choice for new conformance statements within its specification. Skip this if no update should be made.",
               "type": "boolean"
           },
           "hidden": {
               "description": "Whether the actor should be hidden. Skip this if no update should be made.",
               "type": "boolean"
           },
           "displayOrder": {
               "description": "The actor's display order relative to other actors when presented in test execution diagrams. Skip this if no update should be made or set to a negative value to remove the ordering altogether.",
               "type": "number"
           }
       },
       "additionalProperties": false
   }
