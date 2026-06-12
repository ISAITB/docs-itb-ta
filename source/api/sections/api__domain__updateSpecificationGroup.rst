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

The payload of the **updateSpecificationGroup** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateSpecificationGroup_request.schema.json>`:

.. literalinclude:: resources/domain/updateSpecificationGroup_request.schema.json
   :language: json
