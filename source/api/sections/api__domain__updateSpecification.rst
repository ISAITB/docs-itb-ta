The **updateSpecification** operation is used to update an existing specification. To use it make an HTTP ``POST`` to path ``/api/rest/specification/{specification}``,
setting ``{specification}`` to the target specification's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY``
set to a **community API key**. This API key identifies the community that is able to manage the specification's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the specification's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Order creation specification"
  }

In case you want to altogether remove a property, such as the the specification's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

You can also use this operation to manage the specification's grouping. Setting the ``group`` property to a specification group's API key
will place it within the target group, removing it from its previous group (if defined). If you simply want to remove the specification
from its current group you can specify the ``group`` property as an empty string:

.. code-block:: json

  {
    "group": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateSpecification__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateSpecification__request:

updateSpecification - request schema
++++++++++++++++++++++++++++++++++++

The payload of the **updateSpecification** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-updateSpecification_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/updateSpecification_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the updateSpecification operation request payload",
       "type": "object",
       "properties": {
           "shortName": {
               "description": "The specification's short name. Skip this if no update should be made.",
               "type": "string"
           },
           "fullName": {
               "description": "The specification's full name. Skip this if no update should be made.",
               "type": "string"
           },
           "description": {
               "description": "The specification's description. Skip this if no update should be made or provide as an empty string to remove the current value.",
               "type": "string"
           },
           "reportMetadata": {
               "description": "The specification's additional metadata for XML reports.",
               "type": "string"
           },
           "hidden": {
               "description": "Whether the specification should be hidden. Skip this if no update should be made.",
               "type": "boolean"
           },
           "displayOrder": {
               "description": "The specification's display order relative to other groups and specifications. Skip this if no update should be made or set to a negative value to remove the ordering altogether.",
               "type": "number"
           },
           "group": {
               "description": "The API key of the specification group within which to move the specification. Skip this if no update should be made or provide as an empty string to remove the specification from its current group.",
               "type": "string"
           }
       },
       "additionalProperties": false
     }
