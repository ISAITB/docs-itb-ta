The **updateOrganisationProperty** operation is used to update the definition of an organisation property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/organisation``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of an organisation property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "vatType",
    "description": "The VAT regime to apply."
  }

In case you want to altogether remove a value, you specify it as an empty string or array (depending on its type):

.. code-block:: json

  {
    "key": "vatType",
    "allowedValues": [],
    "defaultValue": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateOrganisationProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateOrganisationProperty__request:

updateOrganisationProperty - request schema
+++++++++++++++++++++++++++++++++++++++++++

The payload of the **updateOrganisationProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/organisationPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/organisationPropertyInfo_request.schema.json
   :language: json
