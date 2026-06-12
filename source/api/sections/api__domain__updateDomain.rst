The **updateDomain** operation is used to update an existing domain. It exists in two variants which differ in how the target domain is
identified, the updates that you can do, and the API key you will use for authorisation.

The first variant assumes that you are performing an update as a community administrator would. In this case you can update the domain linked
to the community or any domain, in case the community is not linked to a specific one. The operation is called by making an HTTP ``POST`` to
path ``/api/rest/domain`` and setting an HTTP header named ``ITB-API-KEY`` to your **community API key**.

The second variant allows you to perform tasks reserved for the Test Bed administrator. This means that you can manage any domain within the
Test Bed regardless of the communities linked to it. In this case you call the operation by making an HTTP ``POST`` to path
``/api/rest/domain/{domain}``, setting ``{domain}`` to the target domain's API key. The ``ITB-API-KEY`` HTTP header needs to be set
with the :ref:`master API key <systemAdmin__config__restApi>`.

When calling this operation, regardless of the specific variant, all input properties are optional. You specify the properties that you want to
update, and for the ones that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property
in question as an empty string.

The following example illustrates an update of the domain's ``description``, leaving all other information unchanged:

.. code-block:: json

  {
    "description": "The set of EUPO specifications."
  }

In case you want to altogether remove the description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateDomain__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateDomain__request:

updateDomain - request schema
+++++++++++++++++++++++++++++

The payload of the **updateDomain** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateDomain_request.schema.json>`:

.. literalinclude:: resources/domain/updateDomain_request.schema.json
   :language: json
