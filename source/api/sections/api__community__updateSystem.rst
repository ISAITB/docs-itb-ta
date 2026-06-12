The **updateSystem** operation is used to update an existing system. To use it make an HTTP ``POST`` to path ``/api/rest/system/{system}``,
setting ``{system}`` to the target system's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY`` set to the
**community API key** of the community containing the system.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to
be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of the system's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Amazing purchasing system"
  }

In case you want to altogether remove a property, such as the the system's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__community__updateSystem__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__community__updateSystem__request:

updateSystem - request schema
+++++++++++++++++++++++++++++

The payload of the **updateSystem** operation's request is defined by the following :download:`JSON Schema<resources/community/updateSystem_request.schema.json>`:

.. literalinclude:: resources/community/updateSystem_request.schema.json
   :language: json
