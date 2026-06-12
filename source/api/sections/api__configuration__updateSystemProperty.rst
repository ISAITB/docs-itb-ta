The **updateSystemProperty** operation is used to update the definition of a system property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/system``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a system property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "description": "The API endpoint root."
  }

In case you want to altogether remove a value, you specify it as an empty string or array (depending on its type):

.. code-block:: json

  {
    "key": "encrypt",
    "allowedValues": [],
    "defaultValue": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateSystemProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateSystemProperty__request:

updateSystemProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **updateSystemProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/systemPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/systemPropertyInfo_request.schema.json
   :language: json
