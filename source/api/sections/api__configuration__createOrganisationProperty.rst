The **createOrganisationProperty** operation is used to define a new organisation property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/organisation``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's body you specify the information of the organisation property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createOrganisationProperty__request>`.

The following example shows how you can create an organisation property with the provided data:

.. code-block:: json

  {
    "key": "vatNumber",
    "name": "VAT number",
    "description": "The VAT number of the supplier.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "vatType",
    "name": "VAT regime",
    "description": "The VAT regime the suppler is subject to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "full", "label": "Full regime" },
      { "value": "minimal", "label": "Minimal regime" },
      { "value": "none", "label": "Exempt" }
    ],
    "defaultValue": "full",
    "dependsOn": "considerTax",
    "dependsOnValue": "Y"
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createOrganisationProperty__request:

createOrganisationProperty - request schema
+++++++++++++++++++++++++++++++++++++++++++

The payload of the **createOrganisationProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/organisationPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/organisationPropertyInfo_request.schema.json
   :language: json
