The **updateDomainProperty** operation is used to update the definition of a domain property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/domain``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

.. note::
  Updating the value of domain properties can also be achieved using the :ref:`configure <api__configuration__configure>` operation.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. In addition, providing ``domain``
and setting it with a domain API key might be needed, in case the relevant domain cannot be determined. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a domain property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "validationService",
    "description": "The validation service address."
  }

In case you want to altogether remove a value, you specify it as an empty string:

.. code-block:: json

  {
    "key": "validationService",
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateDomainProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateDomainProperty__request:

updateDomainProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **updateDomainProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/updateDomainProperty_request.schema.json>`:

.. literalinclude:: resources/configuration/updateDomainProperty_request.schema.json
   :language: json
