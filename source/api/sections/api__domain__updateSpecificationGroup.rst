The **updateSpecificationGroup** operation is used to update an existing specification group. To use it make an HTTP ``POST`` to path ``/api/rest/group/{group}``,
setting ``{group}`` to the target specification group's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY``
set to a **community API key**. This API key identifies the community that is able to manage the group's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the specification group's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Amazing data package specification"
  }

In case you want to altogether remove a property, such as the the group's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateSpecificationGroup__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateSpecificationGroup__request:

updateSpecificationGroup - request schema
+++++++++++++++++++++++++++++++++++++++++

The payload of the **updateSpecificationGroup** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-updateSpecificationGroup_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/updateSpecificationGroup_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the updateSpecificationGroup operation request payload",
       "type": "object",
       "properties": {
           "shortName": {
               "description": "The group's short name. Skip this if no update should be made.",
               "type": "string"
           },
           "fullName": {
               "description": "The group's full name. Skip this if no update should be made.",
               "type": "string"
           },
           "description": {
               "description": "The group's description. Skip this if no update should be made or provide as an empty string to remove the current value.",
               "type": "string"
           },
           "reportMetadata": {
               "description": "The group's additional metadata for XML reports.",
               "type": "string"
           }
       },
       "additionalProperties": false
     }
