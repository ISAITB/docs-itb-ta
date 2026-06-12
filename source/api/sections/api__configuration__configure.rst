The **configure** operation allows you to adapt the values for configuration entries at all levels, specifically:

* At **domain** level, for configuration applying to the overall test configuration.
* At **organisation** level, for configuration pertinent to a specific organisation.
* At **system** level, for configuration pertinent to a specific organisation's system.
* At **statement** level, for configuration relevant to a conformance statement linking a system and specification actor.

For properties at these levels this operation allows you to **create**, **update** and **delete** values. The exception is the
creation and deletion of domain properties, for which you need to use the dedicated :ref:`createDomainProperty <api__configuration__createDomainProperty>`
and :ref:`deleteDomainProperty <api__configuration__deleteDomainProperty>` operations.

To call the **configure** operation make an HTTP ``POST`` to path ``/api/rest/configure``. To authorise the operation and identify the properties to manage,
you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's payload you can provide any of the following properties depending on what configuration you want to update:

* ``domainProperties`` as an array of ``key`` and ``value`` pairs. In case the domain of the property cannot be determined you can also
  set ``domain`` with the relevant domain's API key.
* ``organisationProperties`` as an array where each item defines the relevant ``organisation`` API key followed by an array of ``key`` and ``value`` pairs.
* ``systemProperties`` as an array where each item defines the relevant ``system`` API key followed by an array of ``key`` and ``value`` pairs.
* ``statementProperties`` as an array where each item defines the relevant ``system`` and ``actor`` API keys followed by an array of ``key`` and ``value`` pairs.

The above properties are optional, allowing you to specify precisely what you want to update. Regarding the ``key`` and ``value`` pairs, the ``key`` always
refers to the unique identifier of the property in question (the same as what is used to refer to it in test cases), for which the provided ``value`` will be
applied. The specific action to take place is determined as follows:

* If ``value`` is provided, the property will be updated or created if not existing.
* If ``value`` is not provided and an existing value is defined it will be deleted.

Recall that in the case of domain properties, only updates of existing properties are allowed to take place through this operation. In addition, only properties that are simple text
values can be managed via the API.

The following sample is a JSON request to update a property at each configuration level.

.. code-block:: json

  {
    "domainProperties": [
      { "key": "sampleProperty", "value": "newValue" }
    ],
    "organisationProperties": [
      {
        "organisation": "ORGANISATION_API_KEY",
        "properties": [
          { "key": "sampleProperty", "value": "newValue" }
        ]
      }
    ],
    "systemProperties": [
      {
        "system": "SYSTEM_API_KEY",
        "properties": [
          { "key": "sampleProperty", "value": "newValue" }
        ]
      }
    ],
    "statementProperties": [
      {
        "system": "SYSTEM_API_KEY",
        "actor": "ACTOR_API_KEY",
        "properties": [
          { "key": "sampleProperty", "value": "newValue" }
        ]
      }
    ]
  }

As mentioned previously you can also focus on specific properties and update multiple in one go. The following sample updates two organisation properties for
two different organisations.

.. code-block:: json

  {
    "organisationProperties": [
      {
        "organisation": "ORGANISATION_API_KEY_1",
        "properties": [
          { "key": "sampleProperty1", "value": "newValue1" },
          { "key": "sampleProperty2", "value": "newValue2" }
        ]
      },
      {
        "organisation": "ORGANISATION_API_KEY_2",
        "properties": [
          { "key": "sampleProperty1", "value": "newValue1" },
          { "key": "sampleProperty2", "value": "newValue2" }
        ]
      }
    ]
  }

To delete properties, simply identify the properties in question and omit the ``value``.

.. code-block:: json

  {
    "organisationProperties": [
      {
        "organisation": "ORGANISATION_API_KEY",
        "properties": [
          { "key": "sampleProperty1" },
          { "key": "sampleProperty2" }
        ]
      }
    ]
  }

Once the **configure** operation has completed you will receive a JSON response providing feedback on the result. If all actions could be carried out the payload
will be en empty JSON object. In case warnings were encountered (for example an organisation not being found, or a target property not being a simple text value),
these will be reported in a string array named ``messages``.

.. code-block:: json

  {
    "messages": [
      "No conformance statement defined for system [SYSTEM_API_KEY] and actor [ACTOR_API_KEY]."
    ]
  }

.. _api__configuration__configure__request:

configure - request schema
++++++++++++++++++++++++++

The payload of the **configure** operation's request is defined by the following :download:`JSON Schema<resources/configuration/configure_request.schema.json>`:

.. literalinclude:: resources/configuration/configure_request.schema.json
   :language: json

.. _api__configuration__configure__response:

configure - response schema
+++++++++++++++++++++++++++

The payload of the **configure** operation's response is defined by the following :download:`JSON Schema<resources/configuration/configure_response.schema.json>`:

.. literalinclude:: resources/configuration/configure_response.schema.json
   :language: json
