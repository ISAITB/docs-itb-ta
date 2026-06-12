The **createStatementProperty** operation is used to define a new conformance statement (actor) property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/actor/{actor}``,
setting ``{actor}`` with the API key of the target specification actor. In addition, you need to include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the conformance statement property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createStatementProperty__request>`.

The following example shows how you can create a conformance statement property with the provided data:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "name": "API endpoint",
    "description": "The API endpoint to send messages to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "encrypt",
    "name": "Encrypted endpoint",
    "description": "Whether the provided endpoint is encrypted.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "Y", "label": "Yes" },
      { "value": "N", "label": "No" }
    ],
    "defaultValue": "Y",
    "dependsOn": "apiEndpoint"
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createStatementProperty__request:

createStatementProperty - request schema
++++++++++++++++++++++++++++++++++++++++

The payload of the **createStatementProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/statementPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/statementPropertyInfo_request.schema.json
   :language: json
