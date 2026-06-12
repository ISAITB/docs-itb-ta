The **updateStatementProperty** operation is used to update the definition of a conformance statement (actor) property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/actor``,
setting ``{actor}`` with the API key of the target specification actor. In addition, you need to include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a conformance statement property's ``description``, leaving other information unchanged:

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

.. _api__configuration__updateStatementProperty__request:

updateStatementProperty - request schema
++++++++++++++++++++++++++++++++++++++++

The payload of the **updateStatementProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/statementPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/statementPropertyInfo_request.schema.json
   :language: json
